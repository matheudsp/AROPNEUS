import type { Metadata } from 'next';
import CodingExplorer from './coding-explorer';

export const metadata: Metadata = {
  title: 'Coding VW e Audi em Floriano | Aro Pneus',
  description:
    'Explore opções de coding para seu Volkswagen ou Audi e consulte a Aro Pneus em Floriano-PI para confirmar os serviços disponíveis para seu carro.',
};

export default function CodingPage() {
  return <CodingExplorer />;
}
