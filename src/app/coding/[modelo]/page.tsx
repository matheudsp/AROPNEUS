import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { codingModels, modelYears } from '@/lib/coding-catalog';
import CodingExplorer from '../coding-explorer';
import VehiclePhoto from '../vehicle-photo';
import styles from '../coding.module.css';

const otherSlug = 'outro';

export function generateStaticParams() {
  return [
    ...codingModels.map(({ slug }) => ({ modelo: slug })),
    { modelo: otherSlug },
  ];
}

type ModelPageProps = { params: Promise<{ modelo: string }> };

export async function generateMetadata({
  params,
}: ModelPageProps): Promise<Metadata> {
  const { modelo } = await params;
  const model = codingModels.find(({ slug }) => slug === modelo);
  return {
    title: model
      ? `Coding ${model.title} em Floriano | Aro Pneus`
      : 'Consultar coding Volkswagen | Aro Pneus',
  };
}

export default async function ModelPage({ params }: ModelPageProps) {
  const { modelo } = await params;
  const model = codingModels.find(({ slug }) => slug === modelo);
  if (!model && modelo !== otherSlug) notFound();

  const title =
    model?.brand === 'Audi'
      ? 'Coding Audi'
      : model
        ? `Volkswagen ${model.title}`
        : 'Outro Volkswagen';
  const scope = [model?.subtitle, modelYears(model?.catalog)]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className={`site-container ${styles.detailPage}`}>
      <nav aria-label='Catálogo' className={styles.breadcrumb}>
        <Link href='/coding'>Todos os modelos</Link>
      </nav>
      <section
        className={`${styles.modelHero}${model ? '' : ` ${styles.modelHeroText}`}`}
        aria-labelledby='model-title'
      >
        <div className={styles.modelIntro}>
          <p className='section-kicker'>Coding Aro Pneus</p>
          <h1 id='model-title'>{title}</h1>
          {scope && <p className={styles.modelScope}>{scope}</p>}
          <p>
            {model?.catalog
              ? 'Marque o que você gostaria de ajustar. A oficina confirma a compatibilidade pelo ano, versão e equipamentos.'
              : 'Conte à oficina qual é o seu carro para descobrir as opções de personalização.'}
          </p>
          {model?.photo === 'amarok' && (
            <p className={styles.photoCredit}>
              Foto de{' '}
              <a href='https://commons.wikimedia.org/wiki/File:2017_Volkswagen_Amarok_Highline_V6_TDi_facelift_3.0.jpg'>
                Vauxford
              </a>{' '}
              ·{' '}
              <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
                CC BY-SA 4.0
              </a>
            </p>
          )}
        </div>
        {model && <VehiclePhoto model={model} priority />}
      </section>
      <CodingExplorer brand={model?.brand ?? 'VW'} catalog={model?.catalog} />
    </div>
  );
}
