type CodingDetail = { effect: string; caption: string };

export const codingDetails: Record<string, CodingDetail> = {
  seta_conforto: {
    effect: 'Um toque: 5 piscadas',
    caption: 'A seta repete mais vezes depois de um único toque.',
  },
  drl_freio_mao: {
    effect: 'Freio de mão puxado: luz diurna apagada',
    caption: 'O exemplo muda a luz diurna, não o farol de todas as situações.',
  },
  drl_traseiro: {
    effect: 'Lanternas traseiras acesas também',
    caption: 'As luzes traseiras acompanham as luzes de uso diurno.',
  },
  lanterna_porta_malas: {
    effect: 'Porta-malas aberto: lanterna acesa',
    caption: 'A iluminação acompanha a abertura do porta-malas.',
  },
  ch_lh_neblina: {
    effect: 'Chegou ou saiu: luzes de apoio acesas',
    caption: 'Os faróis de neblina iluminam o caminho por alguns instantes.',
  },
  neblina_alto: {
    effect: 'Farol alto acompanhado dos neblinas',
    caption: 'O acionamento contínuo ou ao piscar depende da opção do veículo.',
  },
  cornering_off: {
    effect: 'Luz de curva desativada',
    caption:
      'Desliga esse acendimento automático; não muda a direção do carro.',
  },
  led_neblina: {
    effect: 'Configuração para LED compatível',
    caption:
      'Adapta o diagnóstico à instalação correta. Não conserta uma lâmpada com defeito.',
  },
  led_placa: {
    effect: 'Configuração para luz de placa em LED',
    caption:
      'Depende da lâmpada e da instalação; falhas reais precisam de reparo.',
  },
  escala_impares: {
    effect: 'Exemplo: marcações de 90 e 110 km/h',
    caption: 'Muda os números exibidos, não a velocidade do veículo.',
  },
  layout_painel: {
    effect: 'Outro desenho disponível no painel',
    caption: 'As aparências disponíveis dependem do painel instalado.',
  },
  lap_timer: {
    effect: 'Cronômetro disponível no painel',
    caption: 'Mede um intervalo de tempo. O número mostrado é ilustrativo.',
  },
  reabastecer: {
    effect: 'Estimativa de litros para completar',
    caption: 'É uma estimativa do carro, não uma medição exata da bomba.',
  },
  menu_drl: {
    effect: 'Controle da luz diurna no menu',
    caption: 'Adiciona uma opção na tela; aqui não estamos ligando os faróis.',
  },
  menu_alarme: {
    effect: 'Controle do bipe disponível no menu',
    caption:
      'Permite escolher pelo menu. O alarme e a sirene precisam ser compatíveis.',
  },
  autoescola: {
    effect: 'Velocidade e setas na tela do rádio',
    caption:
      'Mostra informações de condução; não acrescenta controle automático do carro.',
  },
  offroad: {
    effect: 'Bússola e informações disponíveis',
    caption:
      'É uma tela de informações. Não transforma o veículo em um carro 4x4.',
  },
  camera_re: {
    effect: 'Imagem da câmera de ré na tela',
    caption: 'É preciso ter câmera, instalação e central compatíveis.',
  },
  logo_central: {
    effect: 'Outro logo aceito pela central',
    caption:
      'Não é envio livre de qualquer imagem; depende das opções da central.',
  },
  visual_vermelho: {
    effect: 'Tema com detalhes vermelhos',
    caption: 'Muda a aparência da central Discover Media compatível.',
  },
  botao_partida: {
    effect: 'Luz do botão pulsa antes da partida',
    caption:
      'Muda apenas a iluminação. Não é o start-stop que desliga o motor nas paradas.',
  },
  vidros_pos_ignicao: {
    effect: 'Após desligar: comando dos vidros disponível',
    caption:
      'A abertura da porta e o tempo de funcionamento dependem da configuração.',
  },
  recirculacao: {
    effect: 'Recirculação volta ao último ajuste',
    caption:
      'Memoriza a escolha anterior. Não significa detectar a qualidade do ar.',
  },
  aviso_cinto: {
    effect: 'Exemplo de alteração do aviso',
    caption:
      'A alteração é no aviso. O cinto continua sendo necessário e deve ser usado.',
  },
  aviso_portas: {
    effect: 'Exemplo de alteração do aviso',
    caption:
      'A porta permanece aberta no desenho: mudar o aviso não fecha a porta.',
  },
  assistente_rampa: {
    effect: 'Liberação do freio ajustada',
    caption:
      'A equipe avalia o ajuste. Não acrescenta freio automático a um carro sem o sistema.',
  },
  start_stop_motor: {
    effect: 'Exemplo: motor permanece ligado',
    caption:
      'A possibilidade e a duração da configuração precisam ser confirmadas no carro.',
  },
  neblina_auto: {
    effect: 'Neblinas acompanham o modo AUTO',
    caption: 'Depende do seletor, dos faróis e dos módulos instalados.',
  },
  cornering_on: {
    effect: 'Neblina do lado da curva acende',
    caption:
      'Ilumina a lateral durante a manobra; não gira o farol mecanicamente.',
  },
  brake_boasvindas: {
    effect: 'Ao destrancar: luz de freio como efeito',
    caption:
      'É um efeito de iluminação ao destrancar, não uma frenagem automática.',
  },
  ponteiros: {
    effect: 'Teste visual dos ponteiros ao ligar',
    caption: 'É uma animação do painel. O carro não está acelerando.',
  },
  temperatura_oleo: {
    effect: 'Temperatura do óleo disponível',
    caption: 'O valor é ilustrativo. Exige informação e painel compatíveis.',
  },
  sport_menu: {
    effect: 'Tela Sport com informações do carro',
    caption:
      'O menu não aumenta a potência. Os dados disponíveis dependem do veículo.',
  },
  menus_movimento: {
    effect: 'Consulta sobre acesso a esse menu',
    caption:
      'A equipe verifica quais menus podem ser alterados. Não representa liberação de vídeo.',
  },
  bipe_travas: {
    effect: 'Trancamento com confirmação sonora',
    caption: 'O desenho representa o som; a demonstração não reproduz áudio.',
  },
  trancar_motor_ligado: {
    effect: 'Motor ligado: trancamento pela chave',
    caption: 'Depende do sistema de chave e da configuração do veículo.',
  },
  vidros_trancar: {
    effect: 'Ao trancar: vidros fechando',
    caption:
      'O fechamento ao trancar é diferente de manter um botão da chave pressionado.',
  },
  teto_chave: {
    effect: 'Teto solar acionado pela chave',
    caption: 'Só se aplica a carros com teto solar e equipamentos compatíveis.',
  },
  ventilador_auto: {
    effect: 'AUTO mostra o nível da ventilação',
    caption: 'Mostra uma informação. Não representa aumento da força do ar.',
  },
  fade_interno: {
    effect: 'Acendimento gradual das luzes internas',
    caption: 'A luz aumenta e diminui suavemente, sem piscar como uma seta.',
  },
  resposta_pedal: {
    effect: 'Outra configuração de resposta do pedal',
    caption:
      'Não representa aumento de potência nem eliminação do atraso do turbo.',
  },
  resposta_direcao: {
    effect: 'Outro ajuste disponível da direção',
    caption:
      'Não altera a relação mecânica da direção nem o alinhamento das rodas.',
  },
  controle_tracao: {
    effect: 'Consulta sobre modos de tração',
    caption:
      'A equipe confirma quais modos de controle de tração o seu carro oferece.',
  },
  xds: {
    effect: 'Apoio do freio na roda interna',
    caption:
      'O XDS usa o sistema de freios; não adiciona um diferencial mecânico ou tração 4x4.',
  },
  luzes_progressivas: {
    effect: 'Acendimento gradual do console',
    caption: 'O efeito é nas luzes do console e, conforme o carro, do volante.',
  },
  aviso_farol: {
    effect: 'Exemplo de alteração do aviso sonoro',
    caption:
      'O farol continua aceso no desenho. A mudança é no aviso, não na luz.',
  },
  aquecimento_bancos: {
    effect: 'Aquecimento volta ao último ajuste',
    caption: 'É necessário já ter aquecimento nos bancos.',
  },
  lanterna_friso: {
    effect: 'Exemplo: somente o friso aceso',
    caption:
      'A representação destaca partes da lanterna, não a troca do conjunto óptico.',
  },
  luzes_malas_freio: {
    effect: 'Ao abrir: luzes traseiras e brake light',
    caption: 'As luzes acompanham a abertura do porta-malas.',
  },
  escala_320: {
    effect: 'Exemplo de escala até 320 km/h',
    caption:
      'Muda apenas a escala desenhada. Não aumenta a velocidade máxima do carro.',
  },
  tpms: {
    effect: 'Exemplo de aviso dos pneus',
    caption:
      'Não mostramos pressão numérica: ela depende do tipo de sistema e dos sensores.',
  },
  ambiente_30: {
    effect: 'Paleta com até 30 opções de cor',
    caption: 'É preciso que a iluminação e os módulos suportem as cores.',
  },
  cores_modos: {
    effect: 'Cor acompanha o modo escolhido',
    caption:
      'A cor acompanha um modo já disponível; não cria modos de condução.',
  },
  trancar_sair: {
    effect: 'Após sair e fechar a porta: trancamento',
    caption:
      'Não é o travamento ao ganhar velocidade. A equipe confirma a lógica de funcionamento.',
  },
};
