import type { Metadata } from 'next';
import Image from 'next/image';
import { codingModels, modelYears } from '@/lib/coding-catalog';
import ModelPicker from './model-picker';
import styles from './coding.module.css';

export const metadata: Metadata = {
  title: 'Coding Volkswagen e Audi em Floriano | Aro Pneus',
  description:
    'Escolha seu Volkswagen ou Audi, explore funções de coding e confirme as opções pelo WhatsApp da Aro Pneus em Floriano, PI.',
};

export default function CodingPage() {
  const models = codingModels.map(({ catalog, ...model }) => ({
    ...model,
    years: modelYears(catalog),
    count: catalog?.options.length,
  }));
  return (
    <>
      <section className={styles.hero} aria-labelledby='coding-title'>
        <div className={styles.heroImage}>
          <Image
            src='/fotos/jetta-interior.webp'
            fill
            priority
            sizes='(max-width: 680px) 100vw, 55vw'
            alt=''
          />
        </div>
        <div className={`site-container ${styles.heroContent}`}>
          <p className='section-kicker'>Coding Volkswagen e Audi</p>
          <h1 id='coding-title'>Descubra o que seu carro pode fazer</h1>
          <p>Explore ajustes de iluminação, painel e conforto por modelo.</p>
        </div>
      </section>
      <div className='site-container'>
        <ModelPicker models={models} />
      </div>
    </>
  );
}
