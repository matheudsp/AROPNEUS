# Auditoria dos exemplos visuais de coding

54 funções distintas, correspondentes às 151 referências dos seis catálogos da oficina. Cada função tem um desenho específico com dois estados ilustrativos. As cenas compartilham elementos gráficos em 18 famílias, mantendo diferenças de acionamento e efeito.

## Critérios de conteúdo

- Antes e Depois são exemplos didáticos, não configurações de fábrica garantidas.
- Acender uma lâmpada é diferente de adicionar um controle dela na central.
- A iluminação do botão de partida é diferente do start-stop do motor.
- O brake light ao destrancar é representado somente na luz de freio central.
- O farol de curva ilumina a lateral da manobra, sem representar giro mecânico do farol.
- Telas Sport, off-road e escalas do painel não representam aumento de potência, velocidade ou tração 4x4.
- XDS representa auxílio dos freios na roda interna; não instalação de diferencial mecânico.
- TPMS não promete leituras numéricas de pressão ou sensores que o carro não possui.
- Câmera, teto solar, bancos aquecidos e iluminação ambiente exigem equipamentos compatíveis.
- Alterar avisos não resolve a condição que os provocou. Lâmpadas com defeito precisam de reparo.
- A compatibilidade e as possibilidades de configuração continuam sujeitas à avaliação da Aro Pneus com HEX-V2 e VCDS.

## Uso e acessibilidade

- Cada função oferece “Ver como funciona”; exemplos fechados inicialmente para facilitar a leitura no celular.
- Comparação Antes/Depois e animação opcional. Nenhuma animação começa automaticamente.
- Comparar ou animar não seleciona o serviço. Os controles ficam fora do rótulo da caixa de seleção.
- Movimento reduzido oculta a animação e mantém a comparação manual.
- A animação para ao fechar o exemplo, fechar a categoria, sair da página ou mudar a preferência de movimento.
- SVG com descrição textual, indicação textual dos estados e botões de pelo menos 44 px.

## Verificação

`node scripts/audit-coding-visuals.cjs /tmp/aropneus-visuais-auditoria.html` confere correspondência exata entre os catálogos e as definições, campos de descrição e renderização dos dois estados de todas as funções. A galeria temporária usa os mesmos componentes e estilos do site.

No Chrome, os 108 estados foram renderizados sem texto ultrapassando os limites do SVG. Foram verificados a comparação manual, a animação, a pausa ao fechar o exemplo, o movimento reduzido, a seleção independente e o resumo do WhatsApp com a função escolhida. A tela foi conferida em 320, 390 e 1024 px sem rolagem horizontal. O build de produção, incluindo lint e validação de tipos, passou.

Esta auditoria verifica comunicação e comportamento da interface. Ela não substitui diagnóstico ou teste da função em um veículo.

## Correspondência das funções

| Função do catálogo | Cena | Efeito ilustrado | Limite ou esclarecimento |
| --- | --- | --- | --- |
| Quantidade de piscadas da seta de conforto | `signals` | Um toque: 5 piscadas | A seta repete mais vezes depois de um único toque. |
| Comportamento do DRL com o freio de mão | `lights` | Freio de mão puxado: luz diurna apagada | O exemplo muda a luz diurna, não o farol de todas as situações. |
| Lanternas traseiras com o DRL | `lights` | Lanternas traseiras acesas também | As luzes traseiras acompanham as luzes de uso diurno. |
| Lanterna acesa com porta-malas aberto | `lights` | Porta-malas aberto: lanterna acesa | A iluminação acompanha a abertura do porta-malas. |
| Coming/Leaving Home pelos faróis de neblina | `lights` | Chegou ou saiu: luzes de apoio acesas | Os faróis de neblina iluminam o caminho por alguns instantes. |
| Faróis de neblina com o farol alto | `lights` | Farol alto acompanhado dos neblinas | O acionamento contínuo ou ao piscar depende da opção do veículo. |
| Desativar a luz de curva pelos faróis de neblina | `lights` | Luz de curva desativada | Desliga esse acendimento automático; não muda a direção do carro. |
| Configuração para LED nos faróis de neblina | `alert` | Configuração para LED compatível | Adapta o diagnóstico à instalação correta. Não conserta uma lâmpada com defeito. |
| Configuração para LED na luz de placa | `alert` | Configuração para luz de placa em LED | Depende da lâmpada e da instalação; falhas reais precisam de reparo. |
| Números ímpares e escala do painel digital | `dashboard` | Exemplo: marcações de 90 e 110 km/h | Muda os números exibidos, não a velocidade do veículo. |
| Visual do painel digital | `dashboard` | Outro desenho disponível no painel | As aparências disponíveis dependem do painel instalado. |
| Cronômetro de voltas no painel | `dashboard` | Cronômetro disponível no painel | Mede um intervalo de tempo. O número mostrado é ilustrativo. |
| Estimativa de litros para completar o tanque | `dashboard` | Estimativa de litros para completar | É uma estimativa do carro, não uma medição exata da bomba. |
| Controle do DRL pelo menu da central | `screen` | Controle da luz diurna no menu | Adiciona uma opção na tela; aqui não estamos ligando os faróis. |
| Controle do bipe de travamento pela central | `screen` | Controle do bipe disponível no menu | Permite escolher pelo menu. O alarme e a sirene precisam ser compatíveis. |
| Informações de condução na central | `screen` | Velocidade e setas na tela do rádio | Mostra informações de condução; não acrescenta controle automático do carro. |
| Tela de informações off-road | `screen` | Bússola e informações disponíveis | É uma tela de informações. Não transforma o veículo em um carro 4x4. |
| Habilitação de câmera de ré instalada | `screen` | Imagem da câmera de ré na tela | É preciso ter câmera, instalação e central compatíveis. |
| Logo de inicialização da central | `screen` | Outro logo aceito pela central | Não é envio livre de qualquer imagem; depende das opções da central. |
| Tema vermelho da central Discover Media | `screen` | Tema com detalhes vermelhos | Muda a aparência da central Discover Media compatível. |
| Iluminação pulsante do botão de partida | `button` | Luz do botão pulsa antes da partida | Muda apenas a iluminação. Não é o start-stop que desliga o motor nas paradas. |
| Uso dos vidros após desligar a ignição | `windows` | Após desligar: comando dos vidros disponível | A abertura da porta e o tempo de funcionamento dependem da configuração. |
| Memória de recirculação do ar-condicionado | `memory` | Recirculação volta ao último ajuste | Memoriza a escolha anterior. Não significa detectar a qualidade do ar. |
| Configuração do aviso de cinto | `alert` | Exemplo de alteração do aviso | A alteração é no aviso. O cinto continua sendo necessário e deve ser usado. |
| Configuração do aviso de portas abertas | `alert` | Exemplo de alteração do aviso | A porta permanece aberta no desenho: mudar o aviso não fecha a porta. |
| Ajuste do assistente de partida em rampa | `hill` | Liberação do freio ajustada | A equipe avalia o ajuste. Não acrescenta freio automático a um carro sem o sistema. |
| Configuração do start-stop do motor | `engine` | Exemplo: motor permanece ligado | A possibilidade e a duração da configuração precisam ser confirmadas no carro. |
| Faróis de neblina no modo automático | `lights` | Neblinas acompanham o modo AUTO | Depende do seletor, dos faróis e dos módulos instalados. |
| Habilitar luz de curva pelos faróis de neblina | `lights` | Neblina do lado da curva acende | Ilumina a lateral durante a manobra; não gira o farol mecanicamente. |
| Brake light como iluminação ao destrancar | `lights` | Ao destrancar: luz de freio como efeito | É um efeito de iluminação ao destrancar, não uma frenagem automática. |
| Varredura dos ponteiros ao ligar | `dashboard` | Teste visual dos ponteiros ao ligar | É uma animação do painel. O carro não está acelerando. |
| Temperatura do óleo no painel | `dashboard` | Temperatura do óleo disponível | O valor é ilustrativo. Exige informação e painel compatíveis. |
| Tela de informações Sport na central | `screen` | Tela Sport com informações do carro | O menu não aumenta a potência. Os dados disponíveis dependem do veículo. |
| Acesso a menus da central em movimento | `screen` | Consulta sobre acesso a esse menu | A equipe verifica quais menus podem ser alterados. Não representa liberação de vídeo. |
| Confirmação sonora ao trancar/destrancar | `lock` | Trancamento com confirmação sonora | O desenho representa o som; a demonstração não reproduz áudio. |
| Travamento pela chave com motor ligado | `lock` | Motor ligado: trancamento pela chave | Depende do sistema de chave e da configuração do veículo. |
| Fechamento dos vidros ao trancar | `windows` | Ao trancar: vidros fechando | O fechamento ao trancar é diferente de manter um botão da chave pressionado. |
| Comando do teto solar pela chave | `windows` | Teto solar acionado pela chave | Só se aplica a carros com teto solar e equipamentos compatíveis. |
| Indicador de ventilação no modo automático | `climate` | AUTO mostra o nível da ventilação | Mostra uma informação. Não representa aumento da força do ar. |
| Acendimento progressivo das luzes internas | `fade` | Acendimento gradual das luzes internas | A luz aumenta e diminui suavemente, sem piscar como uma seta. |
| Configuração de resposta do acelerador | `pedal` | Outra configuração de resposta do pedal | Não representa aumento de potência nem eliminação do atraso do turbo. |
| Configuração de resposta da direção | `steering` | Outro ajuste disponível da direção | Não altera a relação mecânica da direção nem o alinhamento das rodas. |
| Opção de controle de tração | `traction` | Consulta sobre modos de tração | A equipe confirma quais modos de controle de tração o seu carro oferece. |
| Configuração do diferencial eletrônico XDS | `xds` | Apoio do freio na roda interna | O XDS usa o sistema de freios; não adiciona um diferencial mecânico ou tração 4x4. |
| Acendimento progressivo das luzes do console | `fade` | Acendimento gradual do console | O efeito é nas luzes do console e, conforme o carro, do volante. |
| Configuração do aviso de farol aceso | `alert` | Exemplo de alteração do aviso sonoro | O farol continua aceso no desenho. A mudança é no aviso, não na luz. |
| Memória do aquecimento dos bancos | `memory` | Aquecimento volta ao último ajuste | É necessário já ter aquecimento nos bancos. |
| Configuração do friso e segmentos da lanterna | `lights` | Exemplo: somente o friso aceso | A representação destaca partes da lanterna, não a troca do conjunto óptico. |
| Luzes traseiras e brake light com porta-malas aberto | `lights` | Ao abrir: luzes traseiras e brake light | As luzes acompanham a abertura do porta-malas. |
| Escala do painel digital até 320 km/h | `dashboard` | Exemplo de escala até 320 km/h | Muda apenas a escala desenhada. Não aumenta a velocidade máxima do carro. |
| Configuração do monitoramento dos pneus | `dashboard` | Exemplo de aviso dos pneus | Não mostramos pressão numérica: ela depende do tipo de sistema e dos sensores. |
| Paleta de cores da iluminação ambiente | `ambient` | Paleta com até 30 opções de cor | É preciso que a iluminação e os módulos suportem as cores. |
| Cor ambiente associada ao modo de condução | `ambient` | Cor acompanha o modo escolhido | A cor acompanha um modo já disponível; não cria modos de condução. |
| Travamento automático após sair e fechar a porta | `lock` | Após sair e fechar a porta: trancamento | Não é o travamento ao ganhar velocidade. A equipe confirma a lógica de funcionamento. |
