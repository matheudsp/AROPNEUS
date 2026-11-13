'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Car,
  Check,
  ChevronDown,
  Gauge,
  Lightbulb,
  MessageCircle,
  Monitor,
  Search,
  Wind,
  X,
  Armchair,
  type LucideIcon,
} from 'lucide-react';
import FunctionVisual from '@/components/coding/function-visual';
import catalogData from '@/data/coding-catalog.json';
import { buildCodingMessage } from '@/lib/coding-query';
import styles from './coding.module.css';

type CodingOption = (typeof catalogData.catalogs)[number]['options'][number];
type Step = 1 | 2 | 3;
const years = Array.from(
  { length: new Date().getFullYear() + 1 - 1990 },
  (_, index) => String(new Date().getFullYear() + 1 - index),
);
const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
const groups: Record<string, { label: string; icon: LucideIcon }> = {
  Iluminação: { label: 'Luzes do carro', icon: Lightbulb },
  Painel: { label: 'Informações no painel', icon: Gauge },
  Multimídia: { label: 'Tela do rádio', icon: Monitor },
  Conforto: { label: 'Comodidades do dia a dia', icon: Armchair },
  Climatização: { label: 'Ar-condicionado', icon: Wind },
  Avisos: { label: 'Avisos do carro', icon: Bell },
  Condução: { label: 'Ajustes de condução', icon: Car },
  'Iluminação interna': { label: 'Luzes de dentro do carro', icon: Lightbulb },
  Travas: { label: 'Travas e fechamento', icon: Car },
};
const friendlyNames: Record<string, string> = {
  seta_conforto: 'Mais piscadas da seta com um toque',
  drl_freio_mao: 'Apagar as luzes do dia com o freio de mão',
  drl_traseiro: 'Acender as lanternas traseiras durante o dia',
  menu_drl: 'Controlar as luzes do dia pela tela do rádio',
  layout_painel: 'Mudar o visual do painel digital',
  lap_timer: 'Cronômetro no painel',
  reabastecer: 'Ver quantos litros faltam para encher o tanque',
  autoescola: 'Ver a velocidade e as setas na tela do rádio',
  offroad: 'Bússola e informações na tela do rádio',
  camera_re: 'Mostrar a câmera de ré na tela',
  botao_partida: 'Luz pulsante no botão de ligar o carro',
  recirculacao: 'Lembrar a posição da recirculação do ar',
  ch_lh_neblina: 'Luzes de apoio ao chegar e sair do carro',
  cornering_off: 'Desligar a luz de neblina que acende nas curvas',
  cornering_on: 'Acender a luz de neblina ao fazer curvas',
  aquecimento_bancos: 'Lembrar o aquecimento dos bancos',
  tpms: 'Monitoramento dos pneus no painel',
  start_stop_motor: 'Consultar o desligamento automático do motor',
};
const explanations: Record<string, string> = {
  seta_conforto: 'Ao tocar uma vez na alavanca, a seta pisca mais vezes.',
  drl_freio_mao:
    'São as luzes que ficam acesas durante o dia, também chamadas de DRL.',
  menu_drl: 'Adiciona um controle para as luzes diurnas no menu do carro.',
  lap_timer: 'Um relógio para medir o tempo, no próprio painel.',
  reabastecer:
    'Mostra uma estimativa de quanto combustível falta para completar o tanque.',
  ch_lh_neblina: 'Ilumina o caminho por alguns instantes ao chegar ou sair.',
  camera_re: 'É preciso já ter uma câmera e instalação compatíveis.',
  teto_chave: 'Para carros com teto solar instalado.',
  aquecimento_bancos: 'Para carros que já têm bancos com aquecimento.',
  recirculacao:
    'O ar-condicionado lembra a posição deixada antes de desligar o carro.',
  offroad: 'As informações mostradas dependem dos equipamentos do carro.',
  tpms: 'O tipo de aviso depende dos equipamentos instalados.',
  escala_320:
    'Muda apenas a exibição do painel. Não aumenta a velocidade do carro.',
  ambiente_30: 'As cores disponíveis dependem da iluminação instalada.',
  start_stop_motor:
    'É o sistema que desliga o motor nas paradas. A equipe verifica o que pode ser feito.',
  resposta_pedal:
    'A equipe avalia o ajuste de resposta do pedal. Não é aumento de potência.',
};
function optionName(option: CodingOption) {
  return friendlyNames[option.functionId] || option.name;
}
function restrictionText(value: string) {
  if (value.includes('MIB21'))
    return 'Depende do modelo da tela instalada. Nós verificamos para você.';
  return value
    .replace(/^Catálogo restringe ao /, 'Referência para ')
    .replace(/^Catálogo restringe a /, 'Requer ')
    .replace(
      /^Catálogo (cita|condiciona|identifica|exige|descreve|reúne) /,
      'Referência: ',
    );
}

export default function CodingExplorer() {
  const [step, setStep] = useState<Step>(1);
  const [brand, setBrand] = useState('VW');
  const [modelId, setModelId] = useState('');
  const [otherModel, setOtherModel] = useState('');
  const [year, setYear] = useState('');
  const [version, setVersion] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const catalog =
    brand === 'VW'
      ? catalogData.catalogs.find((item) => item.id === modelId)
      : undefined;
  const model = catalog?.model ?? otherModel.trim();
  const knownYear = /^\d{4}$/.test(year);
  const outsideYears = Boolean(
    catalog?.years &&
      (year === 'older' ||
        (knownYear &&
          (Number(year) < catalog.years[0] ||
            Number(year) > catalog.years[1]))),
  );
  const options = outsideYears ? [] : (catalog?.options ?? []);
  const categories = Array.from(
    new Set(options.map((option) => option.category)),
  );
  const chosen = options.filter((option) => selected.includes(option.id));
  const filtered = options.filter((option) =>
    normalize(
      `${optionName(option)} ${option.name} ${groups[option.category]?.label}`,
    ).includes(normalize(search)),
  );
  const yearLabel = knownYear
    ? year
    : year === 'older'
      ? '1990 ou anterior'
      : 'Ano a confirmar';
  const carLabel = [
    brand === 'VW' ? 'Volkswagen' : 'Audi',
    model,
    year ? yearLabel : '',
  ]
    .filter(Boolean)
    .join(' · ');
  const message = buildCodingMessage({
    brand,
    model,
    year: year ? yearLabel : 'Ano não informado',
    version,
    options: chosen.map((option) => ({
      number: option.number,
      name: optionName(option),
    })),
  });
  const whatsappHref = `https://wa.me/5589994136771?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    pageRef.current?.scrollIntoView({ block: 'start', behavior: 'auto' });
    titleRef.current?.focus({ preventScroll: true });
  }, [step]);
  function resetChoices() {
    setSelected([]);
    setSearch('');
  }
  function changeBrand(next: string) {
    setBrand(next);
    setModelId('');
    setYear('');
    setOtherModel('');
    setVersion('');
    resetChoices();
  }
  function chooseModel(next: string) {
    setModelId(next);
    setYear('');
    setOtherModel('');
    setVersion('');
    resetChoices();
  }
  function toggle(option: CodingOption) {
    setSelected((current) =>
      current.includes(option.id)
        ? current.filter((id) => id !== option.id)
        : [...current, option.id],
    );
  }
  function continueFromCar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep(options.length ? 2 : 3);
  }

  const titles = [
    'Qual é o seu carro?',
    'O que você gostaria de mudar?',
    chosen.length ? 'Confira suas escolhas' : 'Vamos ajudar você',
  ];
  return (
    <div
      ref={pageRef}
      className={`${styles.page} ${step > 1 ? styles.withActions : ''}`}
    >
      <div className={styles.container}>
        {step === 1 && (
          <Link className={styles.homeLink} href='/'>
            <ArrowLeft size={18} /> Voltar ao site
          </Link>
        )}
        <nav className={styles.progress} aria-label='Etapas da consulta'>
          {['Seu carro', 'Suas escolhas', 'WhatsApp'].map((label, index) => (
            <div
              key={label}
              className={
                step === index + 1
                  ? styles.currentStep
                  : step > index + 1
                    ? styles.completedStep
                    : ''
              }
              aria-current={step === index + 1 ? 'step' : undefined}
            >
              <span aria-hidden='true'>
                {step > index + 1 ? <Check size={16} /> : index + 1}
              </span>
              <p>{label}</p>
            </div>
          ))}
        </nav>
        <header className={styles.heading}>
          <p className={styles.kicker}>PERSONALIZE SEU VW OU AUDI</p>
          <h1 ref={titleRef} tabIndex={-1}>
            {titles[step - 1]}
          </h1>
          <p>
            {step === 1
              ? 'Conte para a gente. É simples e não precisa entender de tecnologia.'
              : step === 2
                ? 'Toque em um assunto abaixo e marque o que gostar.'
                : 'Nossa equipe confirma o que funciona no seu carro e informa os valores.'}
          </p>
        </header>

        {step === 1 && (
          <>
            <form onSubmit={continueFromCar} className={styles.vehicleForm}>
              <fieldset className={styles.fieldset}>
                <legend>1. Qual é a marca?</legend>
                <div className={styles.brandOptions}>
                  {['VW', 'Audi'].map((item) => (
                    <button
                      key={item}
                      type='button'
                      onClick={() => changeBrand(item)}
                      aria-pressed={brand === item}
                      className={brand === item ? styles.activeBrand : ''}
                    >
                      {item === 'VW' ? 'Volkswagen' : 'Audi'}
                      {brand === item && <Check size={20} />}
                    </button>
                  ))}
                </div>
              </fieldset>
              {brand === 'VW' && (
                <fieldset className={styles.fieldset}>
                  <legend>2. Qual é o modelo?</legend>
                  <div className={styles.modelOptions}>
                    {[
                      ...catalogData.catalogs.map((item) => ({
                        id: item.id,
                        model: item.model,
                      })),
                      { id: 'other', model: 'Outro modelo' },
                    ].map((item) => (
                      <label
                        key={item.id}
                        className={
                          modelId === item.id ? styles.selectedModel : ''
                        }
                      >
                        <input
                          type='radio'
                          name='vehicle-model'
                          required
                          value={item.id}
                          checked={modelId === item.id}
                          onChange={() => chooseModel(item.id)}
                        />
                        <span>{item.model}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}
              {(brand === 'Audi' || modelId === 'other') && (
                <label className={styles.field}>
                  {brand === 'Audi'
                    ? '2. Qual é o modelo?'
                    : 'Como se chama o modelo?'}
                  <input
                    required
                    maxLength={60}
                    pattern={'.*\\S.*'}
                    title='Digite o modelo do seu carro'
                    value={otherModel}
                    onChange={(event) => setOtherModel(event.target.value)}
                    placeholder={
                      brand === 'Audi'
                        ? 'Por exemplo: A3 ou Q3'
                        : 'Por exemplo: Golf ou Tiguan'
                    }
                  />
                </label>
              )}
              <label className={styles.field}>
                3. Qual é o ano do carro?
                <select
                  required
                  value={year}
                  onChange={(event) => {
                    setYear(event.target.value);
                    resetChoices();
                  }}
                >
                  <option value=''>Escolha o ano</option>
                  <option value='unknown'>Não sei o ano</option>
                  {years.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                  <option value='older'>1990 ou anterior</option>
                </select>
              </label>
              <details className={styles.optional}>
                <summary>
                  Sei a versão do meu carro <span>(opcional)</span>
                  <ChevronDown size={18} />
                </summary>
                <label className={styles.field}>
                  Qual é a versão?
                  <input
                    value={version}
                    maxLength={80}
                    onChange={(event) => setVersion(event.target.value)}
                    placeholder='Por exemplo: Highline ou GTS'
                  />
                </label>
              </details>
              <button className={styles.primary} type='submit'>
                {brand === 'Audi' || modelId === 'other' || outsideYears
                  ? 'Continuar com meu carro'
                  : 'Ver opções para meu carro'}
                <ArrowRight size={20} />
              </button>
            </form>
            <div className={styles.help}>
              <MessageCircle size={24} />
              <div>
                <h2>Prefere falar com a gente?</h2>
                <p>Não precisa preencher nada. Nós ajudamos você.</p>
                <a
                  href={whatsappHref}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Falar com um atendente <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={styles.carSummary}>
              <Car size={22} />
              <div>
                <strong>{model}</strong>
                <p>{yearLabel}</p>
              </div>
              <button type='button' onClick={() => setStep(1)}>
                Trocar carro
              </button>
            </div>
            <div className={styles.notice}>
              <strong>Vamos confirmar juntos.</strong>
              <p>
                As opções mudam conforme o ano, a versão e os equipamentos. A
                Aro Pneus verifica o que funciona no seu carro. Os exemplos são
                ilustrativos e o visual pode variar.
              </p>
            </div>
            <a
              className={styles.helpChoice}
              href={whatsappHref}
              target='_blank'
              rel='noopener noreferrer'
            >
              <MessageCircle size={22} />
              <span>
                Não sei o que escolher.
                <br />
                <strong>Quero ajuda de um atendente</strong>
              </span>
              <ArrowRight size={20} />
            </a>
            <details className={styles.searchDetails}>
              <summary>
                <Search size={19} /> Já sabe o que procura? Busque aqui
                <ChevronDown size={18} />
              </summary>
              <label className={styles.field}>
                <span className={styles.srOnly}>Buscar uma opção</span>
                <input
                  type='search'
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder='Por exemplo: luzes ou painel'
                />
              </label>
            </details>
            <div className={styles.groups}>
              {categories.map((category) => {
                const categoryOptions = filtered.filter(
                  (option) => option.category === category,
                );
                if (!categoryOptions.length) return null;
                const meta = groups[category] ?? { label: category, icon: Car };
                const Icon = meta.icon;
                const count = chosen.filter(
                  (option) => option.category === category,
                ).length;
                return (
                  <details
                    key={`${category}-${search ? 'search' : 'browse'}`}
                    className={styles.group}
                    open={search ? true : undefined}
                  >
                    <summary>
                      <Icon size={24} />
                      <span>
                        {meta.label}
                        {count > 0 && (
                          <small>
                            {count} {count === 1 ? 'escolhida' : 'escolhidas'}
                          </small>
                        )}
                      </span>
                      <ChevronDown size={22} className={styles.chevron} />
                    </summary>
                    <div className={styles.optionList}>
                      {categoryOptions.map((option) => (
                        <div key={option.id} className={styles.optionRow}>
                          <label
                            className={`${styles.option} ${selected.includes(option.id) ? styles.optionSelected : ''}`}
                          >
                            <input
                              type='checkbox'
                              checked={selected.includes(option.id)}
                              onChange={() => toggle(option)}
                              aria-label={optionName(option)}
                            />
                            <span>
                              <strong>{optionName(option)}</strong>
                              {explanations[option.functionId] && (
                                <span className={styles.description}>
                                  {explanations[option.functionId]}
                                </span>
                              )}
                              {option.restriction && (
                                <span className={styles.restriction}>
                                  {restrictionText(option.restriction)}
                                </span>
                              )}
                              {selected.includes(option.id) && (
                                <span className={styles.added}>
                                  <Check size={15} /> Escolhida
                                </span>
                              )}
                            </span>
                          </label>
                          <FunctionVisual functionId={option.functionId} />
                        </div>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
            {filtered.length === 0 && (
              <div className={styles.noResults}>
                <p>Não encontramos essa opção aqui.</p>
                <button type='button' onClick={() => setSearch('')}>
                  Mostrar todos os assuntos
                </button>
              </div>
            )}
            <p className={styles.partial}>
              Não encontrou o que procura? Nosso catálogo é parcial. Pergunte
              para a gente pelo WhatsApp.
            </p>
            <div className={styles.actionBar}>
              <div className={styles.actionInner}>
                <p aria-live='polite'>
                  <strong>
                    {chosen.length
                      ? `${chosen.length} ${chosen.length === 1 ? 'opção escolhida' : 'opções escolhidas'}`
                      : 'Pode continuar sem escolher'}
                  </strong>
                  <span>Nós confirmamos para você.</span>
                </p>
                <button
                  type='button'
                  className={styles.primary}
                  onClick={() => setStep(3)}
                >
                  Continuar
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <section className={styles.review} aria-label='Resumo da consulta'>
              <div className={styles.reviewCar}>
                <Car size={26} />
                <div>
                  <p>Seu carro</p>
                  <h2>{carLabel}</h2>
                  {version.trim() && <p>{version.trim()}</p>}
                </div>
                <button type='button' onClick={() => setStep(1)}>
                  Alterar
                </button>
              </div>
              {chosen.length ? (
                <div className={styles.reviewChoices}>
                  <h2>Você quer saber sobre:</h2>
                  <ul>
                    {chosen.map((option) => (
                      <li key={option.id}>
                        <Check size={19} />
                        <span>{optionName(option)}</span>
                        <button
                          type='button'
                          onClick={() => toggle(option)}
                          aria-label={`Remover ${optionName(option)}`}
                        >
                          <X size={19} />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={styles.secondary}
                    type='button'
                    onClick={() => setStep(2)}
                  >
                    Escolher mais opções
                  </button>
                </div>
              ) : (
                <div className={styles.reviewChoices}>
                  <h2>Vamos descobrir as opções para você.</h2>
                  <p>
                    {options.length
                      ? 'Tudo bem não escolher agora. Conte para a equipe o que você gostaria de mudar.'
                      : 'Ainda não temos todas as opções deste carro no site. Nossa equipe verifica para você.'}
                  </p>
                </div>
              )}
            </section>
            <div className={styles.nextHelp}>
              <MessageCircle size={25} />
              <div>
                <h2>Agora é só conversar.</h2>
                <p>
                  O WhatsApp vai abrir com a mensagem pronta. Depois, toque em
                  enviar para falar com a Aro Pneus.
                </p>
              </div>
            </div>
            <p className={styles.partial}>
              A equipe confirma os serviços e os valores antes de agendar.
            </p>
            <button
              type='button'
              className={styles.backButton}
              onClick={() => setStep(options.length ? 2 : 1)}
            >
              <ArrowLeft size={18} /> Voltar
            </button>
            <div className={styles.actionBar}>
              <div className={`${styles.actionInner} ${styles.sendAction}`}>
                <a
                  className={styles.primary}
                  href={whatsappHref}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MessageCircle size={23} /> Conversar no WhatsApp
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </>
        )}
        <p className={styles.location}>Aro Pneus · Floriano, PI</p>
      </div>
    </div>
  );
}
