'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { CodingModel } from '@/lib/coding-catalog';
import { normalizeCodingSearch } from '@/lib/coding-query';
import VehiclePhoto from './vehicle-photo';
import styles from './coding.module.css';

export type ModelCard = Omit<CodingModel, 'catalog'> & {
  years?: string;
  count?: number;
};

export default function ModelPicker({ models }: { models: ModelCard[] }) {
  const [brand, setBrand] = useState<CodingModel['brand']>('VW');
  const [query, setQuery] = useState('');
  const search = normalizeCodingSearch(query);
  const visibleModels = models.filter(
    (model) =>
      model.brand === brand &&
      (brand === 'Audi' ||
        normalizeCodingSearch(
          [model.title, model.slug, model.subtitle, model.years]
            .filter(Boolean)
            .join(' '),
        ).includes(search)),
  );
  return (
    <section className={styles.catalog} aria-labelledby='modelos'>
      <div className={styles.collectionHeading}>
        <h2 id='modelos'>Escolha seu carro</h2>
        <div
          className={styles.filters}
          role='group'
          aria-label='Marca do veículo'
        >
          <button
            type='button'
            aria-pressed={brand === 'VW'}
            onClick={() => setBrand('VW')}
          >
            Volkswagen
          </button>
          <button
            type='button'
            aria-pressed={brand === 'Audi'}
            onClick={() => setBrand('Audi')}
          >
            Audi
          </button>
        </div>
      </div>
      {brand === 'VW' && (
        <label className={`${styles.search} ${styles.modelSearch}`}>
          <span>Buscar seu Volkswagen</span>
          <input
            type='search'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Ex.: Golf, Polo, Amarok'
          />
        </label>
      )}
      {visibleModels.length === 0 && (
        <p className={styles.empty} role='status'>
          Nenhum modelo encontrado.
        </p>
      )}
      <ul className={styles.modelGrid}>
        {visibleModels.map(({ count, years, ...model }) => (
          <li key={model.slug} className={styles.modelCard}>
            <Link href={`/coding/${model.slug}`} className={styles.modelLink}>
              <VehiclePhoto model={model} />
              <div className={styles.modelCopy}>
                <div>
                  <h3>{model.title}</h3>
                  {(model.subtitle || years) && (
                    <p>{[model.subtitle, years].filter(Boolean).join(' · ')}</p>
                  )}
                </div>
                <span className={styles.modelAction}>
                  {count ? `Ver ${count} funções` : 'Consultar opções'}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {brand === 'VW' && (
        <div className={styles.missingModel}>
          <div>
            <h3>Seu Volkswagen não está na lista?</h3>
            <p>Informe o modelo e consulte a oficina.</p>
          </div>
          <Link href='/coding/outro' className='outline-button'>
            Consultar outro modelo
          </Link>
        </div>
      )}
    </section>
  );
}
