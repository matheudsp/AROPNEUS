export type VisualScene =
  | 'signals'
  | 'lights'
  | 'dashboard'
  | 'screen'
  | 'windows'
  | 'button'
  | 'memory'
  | 'alert'
  | 'lock'
  | 'climate'
  | 'hill'
  | 'pedal'
  | 'steering'
  | 'traction'
  | 'xds'
  | 'ambient'
  | 'fade'
  | 'engine';
export type CodingVisual = {
  scene: VisualScene;
  before: string;
  after: string;
  caption: string;
};

// “Antes” e “Depois” são exemplos didáticos, não a configuração de fábrica de cada veículo.
export const codingVisuals: Record<string, CodingVisual> = {
  seta_conforto: {
    scene: 'signals',
    before: 'Um toque: 3 piscadas',
    after: 'Um toque: 5 piscadas',
    caption: 'A seta repete mais vezes depois de um único toque.',
  },
  drl_freio_mao: {
    scene: 'lights',
    before: 'Luz diurna acesa',
    after: 'Freio de mão puxado: luz diurna apagada',
    caption: 'O exemplo muda a luz diurna, não o farol de todas as situações.',
  },
  drl_traseiro: {
    scene: 'lights',
    before: 'Luzes diurnas só na frente',
    after: 'Lanternas traseiras acesas também',
    caption: 'As luzes traseiras acompanham as luzes de uso diurno.',
  },
  lanterna_porta_malas: {
    scene: 'lights',
    before: 'Porta-malas fechado',
    after: 'Porta-malas aberto: lanterna acesa',
    caption: 'A iluminação acompanha a abertura do porta-malas.',
  },
  ch_lh_neblina: {
    scene: 'lights',
    before: 'Luzes de apoio apagadas',
    after: 'Chegou ou saiu: luzes de apoio acesas',
    caption: 'Os faróis de neblina iluminam o caminho por alguns instantes.',
  },
  neblina_alto: {
    scene: 'lights',
    before: 'Só o farol alto',
    after: 'Farol alto acompanhado dos neblinas',
    caption: 'O acionamento contínuo ou ao piscar depende da opção do veículo.',
  },
  cornering_off: {
    scene: 'lights',
    before: 'Neblina lateral acende na curva',
    after: 'Luz de curva desativada',
    caption:
      'Desliga esse acendimento automático; não muda a direção do carro.',
  },
  led_neblina: {
    scene: 'alert',
    before: 'Exemplo de aviso após instalar LED',
    after: 'Configuração para LED compatível',
    caption:
      'Adapta o diagnóstico à instalação correta. Não conserta uma lâmpada com defeito.',
  },
  led_placa: {
    scene: 'alert',
    before: 'Exemplo de aviso na luz de placa',
    after: 'Configuração para luz de placa em LED',
    caption:
      'Depende da lâmpada e da instalação; falhas reais precisam de reparo.',
  },
  escala_impares: {
    scene: 'dashboard',
    before: 'Exemplo: marcações de 80 e 100 km/h',
    after: 'Exemplo: marcações de 90 e 110 km/h',
    caption: 'Muda os números exibidos, não a velocidade do veículo.',
  },
  layout_painel: {
    scene: 'dashboard',
    before: 'Um desenho do painel',
    after: 'Outro desenho disponível no painel',
    caption: 'As aparências disponíveis dependem do painel instalado.',
  },
  lap_timer: {
    scene: 'dashboard',
    before: 'Painel sem o cronômetro',
    after: 'Cronômetro disponível no painel',
    caption: 'Mede um intervalo de tempo. O número mostrado é ilustrativo.',
  },
  reabastecer: {
    scene: 'dashboard',
    before: 'Sem a informação de reabastecimento',
    after: 'Estimativa de litros para completar',
    caption: 'É uma estimativa do carro, não uma medição exata da bomba.',
  },
  menu_drl: {
    scene: 'screen',
    before: 'Menu sem o controle da luz diurna',
    after: 'Controle da luz diurna no menu',
    caption: 'Adiciona uma opção na tela; aqui não estamos ligando os faróis.',
  },
  menu_alarme: {
    scene: 'screen',
    before: 'Menu sem o controle do bipe',
    after: 'Controle do bipe disponível no menu',
    caption:
      'Permite escolher pelo menu. O alarme e a sirene precisam ser compatíveis.',
  },
  autoescola: {
    scene: 'screen',
    before: 'Tela habitual do rádio',
    after: 'Velocidade e setas na tela do rádio',
    caption:
      'Mostra informações de condução; não acrescenta controle automático do carro.',
  },
  offroad: {
    scene: 'screen',
    before: 'Tela habitual do rádio',
    after: 'Bússola e informações disponíveis',
    caption:
      'É uma tela de informações. Não transforma o veículo em um carro 4x4.',
  },
  camera_re: {
    scene: 'screen',
    before: 'Tela sem a imagem da câmera',
    after: 'Imagem da câmera de ré na tela',
    caption: 'É preciso ter câmera, instalação e central compatíveis.',
  },
  logo_central: {
    scene: 'screen',
    before: 'Uma tela de abertura',
    after: 'Outro logo aceito pela central',
    caption:
      'Não é envio livre de qualquer imagem; depende das opções da central.',
  },
  visual_vermelho: {
    scene: 'screen',
    before: 'Tema habitual da central',
    after: 'Tema com detalhes vermelhos',
    caption: 'Muda a aparência da central Discover Media compatível.',
  },
  botao_partida: {
    scene: 'button',
    before: 'Iluminação fixa do botão',
    after: 'Luz do botão pulsa antes da partida',
    caption:
      'Muda apenas a iluminação. Não é o start-stop que desliga o motor nas paradas.',
  },
  vidros_pos_ignicao: {
    scene: 'windows',
    before: 'Após desligar: comando indisponível',
    after: 'Após desligar: comando dos vidros disponível',
    caption:
      'A abertura da porta e o tempo de funcionamento dependem da configuração.',
  },
  recirculacao: {
    scene: 'memory',
    before: 'Outro ajuste ao religar',
    after: 'Recirculação volta ao último ajuste',
    caption:
      'Memoriza a escolha anterior. Não significa detectar a qualidade do ar.',
  },
  aviso_cinto: {
    scene: 'alert',
    before: 'Aviso do cinto ativo',
    after: 'Exemplo de alteração do aviso',
    caption:
      'A alteração é no aviso. O cinto continua sendo necessário e deve ser usado.',
  },
  aviso_portas: {
    scene: 'alert',
    before: 'Aviso de porta aberta ativo',
    after: 'Exemplo de alteração do aviso',
    caption:
      'A porta permanece aberta no desenho: mudar o aviso não fecha a porta.',
  },
  assistente_rampa: {
    scene: 'hill',
    before: 'Assistente segura na subida',
    after: 'Liberação do freio ajustada',
    caption:
      'A equipe avalia o ajuste. Não acrescenta freio automático a um carro sem o sistema.',
  },
  start_stop_motor: {
    scene: 'engine',
    before: 'Exemplo: motor desliga na parada',
    after: 'Exemplo: motor permanece ligado',
    caption:
      'A possibilidade e a duração da configuração precisam ser confirmadas no carro.',
  },
  neblina_auto: {
    scene: 'lights',
    before: 'Modo AUTO sem os neblinas',
    after: 'Neblinas acompanham o modo AUTO',
    caption: 'Depende do seletor, dos faróis e dos módulos instalados.',
  },
  cornering_on: {
    scene: 'lights',
    before: 'Sem luz de apoio na curva',
    after: 'Neblina do lado da curva acende',
    caption:
      'Ilumina a lateral durante a manobra; não gira o farol mecanicamente.',
  },
  brake_boasvindas: {
    scene: 'lights',
    before: 'Carro trancado',
    after: 'Ao destrancar: luz de freio como efeito',
    caption:
      'É um efeito de iluminação ao destrancar, não uma frenagem automática.',
  },
  ponteiros: {
    scene: 'dashboard',
    before: 'Ponteiro em repouso',
    after: 'Teste visual dos ponteiros ao ligar',
    caption: 'É uma animação do painel. O carro não está acelerando.',
  },
  temperatura_oleo: {
    scene: 'dashboard',
    before: 'Sem a temperatura do óleo na tela',
    after: 'Temperatura do óleo disponível',
    caption: 'O valor é ilustrativo. Exige informação e painel compatíveis.',
  },
  sport_menu: {
    scene: 'screen',
    before: 'Tela habitual do rádio',
    after: 'Tela Sport com informações do carro',
    caption:
      'O menu não aumenta a potência. Os dados disponíveis dependem do veículo.',
  },
  menus_movimento: {
    scene: 'screen',
    before: 'Exemplo de menu restrito',
    after: 'Consulta sobre acesso a esse menu',
    caption:
      'A equipe verifica quais menus podem ser alterados. Não representa liberação de vídeo.',
  },
  bipe_travas: {
    scene: 'lock',
    before: 'Trancamento sem confirmação sonora',
    after: 'Trancamento com confirmação sonora',
    caption: 'O desenho representa o som; a demonstração não reproduz áudio.',
  },
  trancar_motor_ligado: {
    scene: 'lock',
    before: 'Motor ligado: carro destrancado',
    after: 'Motor ligado: trancamento pela chave',
    caption: 'Depende do sistema de chave e da configuração do veículo.',
  },
  vidros_trancar: {
    scene: 'windows',
    before: 'Vidros abertos',
    after: 'Ao trancar: vidros fechando',
    caption:
      'O fechamento ao trancar é diferente de manter um botão da chave pressionado.',
  },
  teto_chave: {
    scene: 'windows',
    before: 'Teto solar fechado',
    after: 'Teto solar acionado pela chave',
    caption: 'Só se aplica a carros com teto solar e equipamentos compatíveis.',
  },
  ventilador_auto: {
    scene: 'climate',
    before: 'AUTO sem o nível visível',
    after: 'AUTO mostra o nível da ventilação',
    caption: 'Mostra uma informação. Não representa aumento da força do ar.',
  },
  fade_interno: {
    scene: 'fade',
    before: 'Acendimento direto das luzes internas',
    after: 'Acendimento gradual das luzes internas',
    caption: 'A luz aumenta e diminui suavemente, sem piscar como uma seta.',
  },
  resposta_pedal: {
    scene: 'pedal',
    before: 'Uma configuração de resposta',
    after: 'Outra configuração de resposta do pedal',
    caption:
      'Não representa aumento de potência nem eliminação do atraso do turbo.',
  },
  resposta_direcao: {
    scene: 'steering',
    before: 'Uma configuração da direção',
    after: 'Outro ajuste disponível da direção',
    caption:
      'Não altera a relação mecânica da direção nem o alinhamento das rodas.',
  },
  controle_tracao: {
    scene: 'traction',
    before: 'Configuração atual de tração',
    after: 'Consulta sobre modos de tração',
    caption:
      'A equipe confirma quais modos de controle de tração o seu carro oferece.',
  },
  xds: {
    scene: 'xds',
    before: 'Trajetória de uma curva',
    after: 'Apoio do freio na roda interna',
    caption:
      'O XDS usa o sistema de freios; não adiciona um diferencial mecânico ou tração 4x4.',
  },
  luzes_progressivas: {
    scene: 'fade',
    before: 'Acendimento direto do console',
    after: 'Acendimento gradual do console',
    caption: 'O efeito é nas luzes do console e, conforme o carro, do volante.',
  },
  aviso_farol: {
    scene: 'alert',
    before: 'Farol aceso com aviso sonoro',
    after: 'Exemplo de alteração do aviso sonoro',
    caption:
      'O farol continua aceso no desenho. A mudança é no aviso, não na luz.',
  },
  aquecimento_bancos: {
    scene: 'memory',
    before: 'Outro ajuste ao religar',
    after: 'Aquecimento volta ao último ajuste',
    caption: 'É necessário já ter aquecimento nos bancos.',
  },
  lanterna_friso: {
    scene: 'lights',
    before: 'Segmentos e friso acesos',
    after: 'Exemplo: somente o friso aceso',
    caption:
      'A representação destaca partes da lanterna, não a troca do conjunto óptico.',
  },
  luzes_malas_freio: {
    scene: 'lights',
    before: 'Porta-malas fechado',
    after: 'Ao abrir: luzes traseiras e brake light',
    caption: 'As luzes acompanham a abertura do porta-malas.',
  },
  escala_320: {
    scene: 'dashboard',
    before: 'Uma escala do painel',
    after: 'Exemplo de escala até 320 km/h',
    caption:
      'Muda apenas a escala desenhada. Não aumenta a velocidade máxima do carro.',
  },
  tpms: {
    scene: 'dashboard',
    before: 'Sem esse aviso configurado no painel',
    after: 'Exemplo de aviso dos pneus',
    caption:
      'Não mostramos pressão numérica: ela depende do tipo de sistema e dos sensores.',
  },
  ambiente_30: {
    scene: 'ambient',
    before: 'Uma opção de cor ambiente',
    after: 'Paleta com até 30 opções de cor',
    caption: 'É preciso que a iluminação e os módulos suportem as cores.',
  },
  cores_modos: {
    scene: 'ambient',
    before: 'Cor ambiente fixa',
    after: 'Cor acompanha o modo escolhido',
    caption:
      'A cor acompanha um modo já disponível; não cria modos de condução.',
  },
  trancar_sair: {
    scene: 'lock',
    before: 'Saiu do carro: portas destrancadas',
    after: 'Após sair e fechar a porta: trancamento',
    caption:
      'Não é o travamento ao ganhar velocidade. A equipe confirma a lógica de funcionamento.',
  },
};
