import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Clock3, MoveRight, CircleDot, Droplets, ScanLine } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { MAPS_URL, whatsappUrl } from '@/lib/contact';

const services = [
  { number: '01', title: 'Pneus', detail: 'O cuidado começa no contato com a estrada.', description: 'Pneus, alinhamento e balanceamento para você seguir com segurança.', icon: CircleDot, cta: 'Consultar pneus', message: 'Olá! Gostaria de consultar pneus para o meu carro. Modelo e medida: ' },
  { number: '02', title: 'Troca de óleo', detail: 'Motor e câmbio automático.', description: 'O óleo certo para o seu veículo. Consulte a aplicação e agende a troca.', icon: Droplets, cta: 'Agendar troca de óleo', message: 'Olá! Gostaria de agendar uma troca de óleo do motor ou câmbio automático. Meu veículo é: ' },
  { number: '03', title: 'Coding VW / Audi', detail: 'Seu carro pode fazer mais do que você imagina.', description: 'Escolha seu modelo, veja exemplos e descubra opções para deixar o carro do seu jeito.', icon: ScanLine, cta: 'Descobrir funções do meu carro', href: '/coding' },
];

export default function Home() {
  return (
    <>
      <section className="landing-hero" aria-labelledby="hero-title">
        <Image className="hero-photo" src="/Services05.webp" alt="Pneus para o cuidado do seu veículo" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="site-container hero-inner">
          <p className="eyebrow hero-eyebrow"><span /> SEU AUTO CENTER EM FLORIANO–PI</p>
          <h1 id="hero-title">Seu carro pronto.<br />Você <span>tranquilo.</span></h1>
          <p className="hero-description">Pneus, troca de óleo e coding.<br />O cuidado que seu carro precisa, perto de você.</p>
          <a className="contact-button hero-contact" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={25} /> Pedir orçamento no WhatsApp <ArrowUpRight size={21} /></a>
          <p className="hero-note">Fale direto com a nossa equipe.</p>
          <a className="hero-scroll" href="#Services">Conheça nossos serviços <MoveRight size={18} /></a>
        </div>
        <div className="hero-caption">ARO PNEUS <span>A segurança nunca foi tão fácil.</span></div>
      </section>

      <section id="Services" className="services-area site-container" aria-labelledby="services-title">
        <div className="section-heading"><div><p className="eyebrow">CUIDADO EM CADA DETALHE</p><h2 id="services-title">O que seu carro precisa?</h2></div><p>Escolha o serviço. A gente cuida do resto.</p></div>
        <div className="service-grid">
          {services.map(({ number, title, detail, description, icon: Icon, cta, message, href }) => (
            <article className={`service-item${href ? ' service-item-coding' : ''}`} key={number}>
              <div className="service-top"><Icon size={34} strokeWidth={1.5} /><span>{number}</span></div>
              <h3>{title}</h3><p className="service-detail">{detail}</p><p className="service-description">{description}</p>
              {href ? (
                <Link className="coding-cta" href={href}><span>{cta}</span><MoveRight size={22} /></Link>
              ) : (
                <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="service-link">{cta}<ArrowUpRight size={20} /></a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="Location" className="location-area" aria-labelledby="location-title">
        <div className="site-container location-inner">
          <div><p className="eyebrow">PERTINHO DE VOCÊ</p><h2 id="location-title">A gente se encontra<br />em Floriano.</h2><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="directions-link">Abrir rota no mapa <ArrowUpRight size={19} /></a></div>
          <div className="location-details"><div><MapPin size={23} /><p><strong>Venha à Aro Pneus</strong><span>Av. Calisto Lobo, Alto da Guia<br />Floriano–PI</span></p></div><div><Clock3 size={23} /><p><strong>Horário de atendimento</strong><span>Segunda a sexta: 8h às 18h<br />Sábado: 8h às 12h</span></p></div></div>
          <div className="location-contact"><p>Vamos cuidar<br />do seu carro?</p><a className="contact-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={22} /> Agendar atendimento</a><a className="phone-link" href="tel:+5589994136771">(89) 99413-6771</a></div>
        </div>
      </section>
      <div className="mobile-contact"><a className="contact-button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /> Falar no WhatsApp <ArrowUpRight size={19} /></a></div>
    </>
  );
}
