'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { codingDetails } from '@/data/coding-details';
import { codingNames } from '@/data/coding-names';
import type { CodingCatalog, CodingOption } from '@/lib/coding-catalog';
import {
  buildCodingMessage,
  normalizeCodingSearch,
  yearInRange,
} from '@/lib/coding-query';
import { WHATSAPP_NUMBER } from '@/lib/contact';
import styles from './coding.module.css';

const photos: Record<string, [file: string, subject: string]> = {
  Iluminação: ['headlights', 'Farol e luz diurna do Volkswagen Nivus'],
  Painel: ['cluster', 'Painel digital do Volkswagen Polo'],
  Multimídia: ['multimedia', 'Central multimídia VW Play do Volkswagen Polo'],
  Conforto: ['interior', 'Interior do Volkswagen Taos'],
  Climatização: ['climate', 'Comandos de ar-condicionado do Volkswagen Nivus'],
  'Iluminação interna': ['interior', 'Interior do Volkswagen Taos'],
  'Ajustes de condução': ['cockpit', 'Volante e comandos do Volkswagen Jetta'],
  'Assistentes de condução': [
    'cockpit',
    'Posto do motorista do Volkswagen Jetta',
  ],
};
const detailPhotos: Record<string, [file: string, subject: string]> = {
  drl_traseiro: ['taillights', 'Lanternas traseiras do Volkswagen Nivus'],
  lanterna_friso: [
    'taillights',
    'Friso iluminado na traseira do Volkswagen Nivus',
  ],
  lanterna_porta_malas: [
    'taillights',
    'Lanternas na tampa traseira do Volkswagen Nivus',
  ],
  botao_partida: ['ignition', 'Botão de partida do Volkswagen Nivus'],
  teto_chave: ['sunroof', 'Teto solar do Volkswagen T-Cross'],
};
const categories: Record<string, string> = {
  Iluminação: 'Faróis e lanternas',
  Multimídia: 'Central multimídia',
  Climatização: 'Ar-condicionado',
  Travas: 'Travas e vidros',
};
const nextYear = new Date().getFullYear() + 1;
const years = Array.from({ length: nextYear - 1990 }, (_, index) =>
  String(nextYear - index),
);
const optionName = (option: CodingOption) =>
  codingNames[option.functionId] ?? option.name;

function ReferencePhoto({
  photo: [file, subject],
  category = false,
}: {
  photo: [string, string];
  category?: boolean;
}) {
  return (
    <figure className={category ? styles.categoryPhoto : styles.detailPhoto}>
      <div>
        <Image
          src={`/fotos/${file}.webp`}
          alt={subject}
          fill
          sizes={
            category
              ? '(max-width: 800px) 90vw, 640px'
              : '(max-width: 500px) 80vw, 360px'
          }
        />
      </div>
      <figcaption>{subject} · Foto de referência</figcaption>
    </figure>
  );
}

export default function CodingExplorer({
  catalog,
  brand,
}: {
  catalog?: CodingCatalog;
  brand: 'VW' | 'Audi';
}) {
  const [model, setModel] = useState(catalog?.model ?? '');
  const [year, setYear] = useState('');
  const [version, setVersion] = useState('');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  const options =
    catalog?.options.filter((option) =>
      yearInRange(
        year,
        option.reference ? catalog.reference?.years : catalog.years,
      ),
    ) ?? [];
  const outsideRange = Boolean(catalog && !options.length);
  const search = normalizeCodingSearch(query);
  const grouped = new Map<string, CodingOption[]>();
  for (const option of options) {
    const searchable = [
      optionName(option),
      option.name,
      categories[option.category] ?? option.category,
      option.effect ?? codingDetails[option.functionId]?.effect,
    ].join(' ');
    if (!normalizeCodingSearch(searchable).includes(search)) continue;
    const items = grouped.get(option.category);
    if (items) items.push(option);
    else grouped.set(option.category, [option]);
  }
  const chosen = options.filter((option) => selected.includes(option.id));
  const countLabel =
    chosen.length === 1
      ? '1 função escolhida'
      : `${chosen.length} funções escolhidas`;
  const message = buildCodingMessage({
    brand,
    model,
    year: year === 'older' ? '1990 ou anterior' : year || 'Ano não informado',
    version,
    options: chosen.map((option) => ({
      name: optionName(option),
      number: option.reference ? undefined : option.number,
    })),
  });

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <div className={catalog ? styles.exploreLayout : styles.consultLayout}>
      {catalog && (
        <section className={styles.functions} aria-labelledby='funcoes'>
          <h2 id='funcoes'>Funções do catálogo</h2>
          {outsideRange ? (
            <p className={styles.empty}>
              O ano informado está fora da faixa deste catálogo. Envie os dados
              do carro para a oficina verificar suas opções.
            </p>
          ) : (
            <>
              {catalog.reference &&
                options.some((option) => option.reference) && (
                  <p className={styles.referenceNote}>
                    As opções com a indicação “A confirmar” vêm de uma{' '}
                    <a
                      href={catalog.reference.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      referência internacional
                    </a>
                    . A oficina verifica os equipamentos e o que pode ser feito
                    no seu carro.
                  </p>
                )}
              <label className={styles.search}>
                <span>Buscar uma função</span>
                <input
                  type='search'
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder='Ex.: seta, luzes, painel'
                />
              </label>
              {!grouped.size && (
                <p className={styles.empty} role='status'>
                  Nenhuma função encontrada. Tente outro termo ou fale com a
                  oficina.
                </p>
              )}
              <div className={styles.groups}>
                {Array.from(grouped).map(([category, items]) => {
                  const photo = photos[category];
                  const picked = items.filter((option) =>
                    selected.includes(option.id),
                  ).length;
                  return (
                    <details
                      className={styles.category}
                      key={`${search ? 'busca' : 'lista'}-${category}`}
                      open={search ? true : undefined}
                    >
                      <summary>
                        <span>{categories[category] ?? category}</span>
                        <span className={styles.categoryCount}>
                          {picked ? `${picked} de ` : ''}
                          {items.length}
                        </span>
                        <ChevronDown size={19} aria-hidden='true' />
                      </summary>
                      {photo && !search && (
                        <ReferencePhoto photo={photo} category />
                      )}
                      <ul className={styles.functionList}>
                        {items.map((option) => {
                          const detail = codingDetails[option.functionId];
                          const detailPhoto = detailPhotos[option.functionId];
                          const effect = option.effect ?? detail?.effect;
                          return (
                            <li key={option.id} className={styles.functionItem}>
                              <label className={styles.functionChoice}>
                                <input
                                  type='checkbox'
                                  checked={selected.includes(option.id)}
                                  onChange={() => toggle(option.id)}
                                />
                                <span>
                                  <strong>{optionName(option)}</strong>
                                  {option.reference && (
                                    <span className={styles.referenceLabel}>
                                      A confirmar
                                    </span>
                                  )}
                                  {effect && (
                                    <span className={styles.effect}>
                                      {effect}
                                    </span>
                                  )}
                                </span>
                              </label>
                              {(detail?.caption ||
                                option.restriction ||
                                detailPhoto) && (
                                <details className={styles.functionDetails}>
                                  <summary>Entenda o ajuste</summary>
                                  {detail && <p>{detail.caption}</p>}
                                  {option.restriction && (
                                    <p>{option.restriction}</p>
                                  )}
                                  {detailPhoto && (
                                    <ReferencePhoto photo={detailPhoto} />
                                  )}
                                </details>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  );
                })}
              </div>
            </>
          )}
        </section>
      )}
      <aside
        className={styles.quote}
        id='consulta'
        aria-labelledby='quote-title'
      >
        <h2 id='quote-title'>Consultar a oficina</h2>
        <p>
          Envie seu carro e suas escolhas para confirmar o que pode ser feito e
          pedir um orçamento.
        </p>
        {catalog && (
          <p className={styles.chosen} aria-live='polite'>
            {countLabel}
          </p>
        )}
        <form
          className={styles.quoteForm}
          action={`https://wa.me/${WHATSAPP_NUMBER}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {!catalog && (
            <label>
              Modelo do carro
              <input
                required
                maxLength={80}
                pattern={'.*\\S.*'}
                value={model}
                onChange={(event) => setModel(event.target.value)}
                placeholder={brand === 'Audi' ? 'Ex.: A3' : 'Ex.: Golf'}
              />
            </label>
          )}
          <label>
            Ano do carro
            <select
              value={year}
              onChange={(event) => setYear(event.target.value)}
            >
              <option value=''>Não sei informar</option>
              {years.map((item) => (
                <option key={item}>{item}</option>
              ))}
              <option value='older'>1990 ou anterior</option>
            </select>
          </label>
          <label>
            Versão (opcional)
            <input
              maxLength={80}
              value={version}
              onChange={(event) => setVersion(event.target.value)}
              placeholder='Ex.: Highline, TSI'
            />
          </label>
          <input type='hidden' name='text' value={message} />
          <button className='contact-button' type='submit'>
            <FaWhatsapp size={20} aria-hidden='true' /> Consultar no WhatsApp
          </button>
        </form>
      </aside>
      {catalog && chosen.length > 0 && (
        <div className={styles.mobileReview}>
          <span>{countLabel}</span>
          <a className='contact-button' href='#consulta'>
            Ir para consulta
          </a>
        </div>
      )}
    </div>
  );
}
