export type CodingQuery = {
  brand: string;
  model: string;
  year: string;
  version: string;
  options: readonly { number: number; name: string }[];
};

export function buildCodingMessage(query: CodingQuery): string {
  const vehicle = [
    query.brand === 'VW' ? 'Volkswagen' : 'Audi',
    query.model.trim(),
    query.year,
  ]
    .filter(Boolean)
    .join(' ');
  return [
    'Olá, Aro Pneus! Vim pelo site e quero consultar opções de coding para meu carro.',
    `\nVeículo: ${vehicle}`,
    `Versão: ${query.version.trim() || 'Não informada'}`,
    query.options.length
      ? `\nFunções de interesse:\n${query.options.map((option) => `• ${String(option.number).padStart(2, '0')} — ${option.name}`).join('\n')}`
      : '\nQuero conhecer as opções para este veículo.',
    '\nPodem confirmar a compatibilidade, os valores e a disponibilidade de atendimento?',
  ].join('\n');
}
