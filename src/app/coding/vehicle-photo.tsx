import Image from 'next/image';
import type { CodingModel } from '@/lib/coding-catalog';
import styles from './coding.module.css';

export default function VehiclePhoto({
  model,
  priority = false,
}: {
  model: CodingModel;
  priority?: boolean;
}) {
  return (
    <div className={styles.vehiclePhoto}>
      <Image
        fill
        src={`/fotos/${model.photo}.webp`}
        alt={
          model.brand === 'VW'
            ? `Volkswagen ${model.title}`
            : 'Audi A3 Sportback'
        }
        sizes={
          priority
            ? '(max-width: 680px) 95vw, 550px'
            : '(max-width: 900px) 48vw, 370px'
        }
        priority={priority}
        className={model.brand === 'Audi' ? styles.audiPhoto : undefined}
      />
    </div>
  );
}
