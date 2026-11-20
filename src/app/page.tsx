import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';
import { MAPS_URL, whatsappUrl } from '@/lib/contact';

export default function Home() {
  return (
    <>
      <section className='landing-hero' aria-labelledby='hero-title'>
        <div className='hero-visual'>
          <Image
            src='/fotos/jetta.webp'
            fill
            priority
            sizes='(max-width: 700px) 100vw, 57vw'
            alt='Volkswagen Jetta GLI vermelho'
          />
        </div>
        <div className='site-container hero-inner'>
          <p className='section-kicker'>Auto center em Floriano, PI</p>
          <h1 id='hero-title'>
            Pneus, troca de óleo e <em>coding.</em>
          </h1>
          <p>Cuide do seu carro e personalize seu Volkswagen ou Audi.</p>
          <div className='hero-actions'>
            <a
              className='contact-button'
              href={whatsappUrl()}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp size={22} aria-hidden='true' /> Pedir orçamento
            </a>
            <Link className='hero-link' href='/coding'>
              Explorar coding
            </Link>
          </div>
        </div>
      </section>

      <section
        id='Services'
        className='services-area site-container'
        aria-labelledby='services-title'
      >
        <h2 id='services-title'>Serviços da oficina</h2>
        <div className='service-grid'>
          <article className='service-item'>
            <div className='service-photo'>
              <Image
                src='/fotos/wheels.webp'
                fill
                alt='Roda e pneu de um Volkswagen Nivus'
                sizes='(max-width: 700px) 92vw, 370px'
              />
            </div>
            <div className='service-copy'>
              <h3>Pneus</h3>
              <p>Pneus, alinhamento e balanceamento.</p>
              <a
                href={whatsappUrl(
                  'Olá! Gostaria de consultar pneus para meu carro. Modelo e medida: ',
                )}
                target='_blank'
                rel='noopener noreferrer'
                className='outline-button'
              >
                Consultar pneus
              </a>
            </div>
          </article>
          <article className='service-item'>
            <div className='service-photo'>
              <Image
                src='/fotos/oil.webp'
                fill
                alt='Óleo sendo colocado no motor de um carro'
                sizes='(max-width: 700px) 92vw, 370px'
              />
            </div>
            <div className='service-copy'>
              <h3>Troca de óleo</h3>
              <p>
                Para câmbios automáticos, fazemos troca por diálise com a PRIME
                IV PRO conforme a recomendação do fabricante.
              </p>
              <a
                href={whatsappUrl(
                  'Olá! Gostaria de agendar uma troca de óleo. Meu veículo é: ',
                )}
                target='_blank'
                rel='noopener noreferrer'
                className='outline-button'
              >
                Agendar troca de óleo
              </a>
            </div>
          </article>
          <article className='service-item'>
            <div className='service-photo'>
              <Image
                src='/fotos/cockpit.webp'
                fill
                alt='Volante e painel de um Volkswagen Polo'
                sizes='(max-width: 700px) 92vw, 370px'
              />
            </div>
            <div className='service-copy'>
              <h3>Coding Volkswagen e Audi</h3>
              <p>
                Veja o que pode mudar nas luzes, no painel e nas funções de
                conforto do seu carro.
              </p>
              <Link href='/coding' className='contact-button'>
                Descobrir funções do meu carro
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section
        id='Location'
        className='location-area'
        aria-labelledby='location-title'
      >
        <div className='site-container location-inner'>
          <div>
            <h2 id='location-title'>Como chegar</h2>
            <address>
              Av. Calisto Lobo, Alto da Guia
              <br />
              Floriano, PI
            </address>
            <a
              href={MAPS_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='outline-button'
            >
              Abrir rota no mapa
            </a>
          </div>
          <div className='hours'>
            <h3>Horário de atendimento</h3>
            <p>
              Segunda a sexta, das 8h às 18h
              <br />
              Sábado, das 8h às 12h
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
