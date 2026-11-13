'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Car,
  ChevronDown,
  Eye,
  Check,
  CircleAlert,
  DoorOpen,
  Fan,
  Fuel,
  KeyRound,
  Lightbulb,
  Lock,
  Monitor,
  Pause,
  Play,
  Power,
  Thermometer,
  Timer,
  Unlock,
  Volume2,
  VolumeX,
  Wind,
  Armchair,
} from 'lucide-react';
import { codingVisuals, type CodingVisual } from '@/data/coding-visuals';
import styles from './function-visual.module.css';

const red = '#e32a35',
  amber = '#ffbe48',
  white = '#f2f5fa',
  dim = '#69788d';
function Text({
  children,
  x = 160,
  y = 119,
  color = white,
  size = 16,
}: {
  children: React.ReactNode;
  x?: number;
  y?: number;
  color?: string;
  size?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      fill={color}
      fontSize={size}
      fontWeight='600'
      textAnchor='middle'
      fontFamily='Arial, sans-serif'
    >
      {children}
    </text>
  );
}
function Vehicle({
  front = false,
  rear = false,
  fog = false,
  corner = false,
  brake = false,
  trunk = false,
  friso = false,
}: {
  front?: boolean;
  rear?: boolean;
  fog?: boolean;
  corner?: boolean;
  brake?: boolean;
  trunk?: boolean;
  friso?: boolean;
}) {
  return (
    <g>
      <path
        d='M128 23 Q160 12 192 23 L205 55 V111 Q160 125 115 111 V55Z'
        fill='#273448'
        stroke='#a9b7ca'
        strokeWidth='2'
      />
      <path
        d='M130 40 Q160 30 190 40 L194 59 H126Z'
        fill='#88acbc'
        opacity='.55'
      />
      <path d='M127 90 H193 L189 106 H131Z' fill='#88acbc' opacity='.35' />
      <path
        d='M122 29 L137 25 M183 25 L198 29'
        stroke={front ? white : dim}
        strokeWidth='6'
        strokeLinecap='round'
      />
      <path
        d='M119 105 H132 M188 105 H201'
        stroke={rear ? red : dim}
        strokeWidth={friso ? 3 : 7}
        strokeLinecap='round'
      />
      {rear && !friso && (
        <path d='M126 97 H133 M187 97 H194' stroke={red} strokeWidth='4' />
      )}
      <path
        d='M148 109 H172'
        stroke={brake ? red : dim}
        strokeWidth='4'
        strokeLinecap='round'
      />
      <path
        d='M125 44 H133'
        stroke={fog || corner ? amber : dim}
        strokeWidth='5'
        strokeLinecap='round'
      />
      <path
        d='M187 44 H195'
        stroke={fog ? amber : dim}
        strokeWidth='5'
        strokeLinecap='round'
      />
      {front && (
        <path
          d='M120 22 100 6 M128 21 119 3 M192 21 201 3 M200 22 220 6'
          stroke={white}
          opacity='.6'
          strokeWidth='3'
        />
      )}
      {fog && (
        <path
          d='M122 43 87 19 M198 43 233 19'
          stroke={amber}
          strokeWidth='10'
          opacity='.23'
        />
      )}
      {corner && (
        <path d='M123 45 Q78 46 70 77 L115 62Z' fill={amber} opacity='.6' />
      )}
      {trunk && (
        <path
          d='M127 101 L139 80 H181 L193 101'
          fill='none'
          stroke={amber}
          strokeWidth='3'
        />
      )}
    </g>
  );
}
function Dash({ children }: { children: React.ReactNode }) {
  return (
    <g>
      <rect
        x='43'
        y='23'
        width='234'
        height='98'
        rx='15'
        fill='#111a28'
        stroke='#8190a6'
        strokeWidth='2'
      />
      {children}
    </g>
  );
}
function Screen({
  children,
  color = '#38475c',
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <g>
      <rect
        x='51'
        y='15'
        width='218'
        height='112'
        rx='9'
        fill='#101925'
        stroke='#91a2b8'
        strokeWidth='2'
      />
      <path
        d='M133 133 H187'
        stroke='#91a2b8'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <rect x='61' y='25' width='198' height='91' rx='4' fill={color} />
      {children}
    </g>
  );
}
function SideCar({
  closed = true,
  roof = false,
}: {
  closed?: boolean;
  roof?: boolean;
}) {
  return (
    <g>
      <path
        d='M58 82 85 74 109 43 H195 L227 75 263 84 V105 H54Z'
        fill='#2a3b50'
        stroke='#a9b7ca'
        strokeWidth='2'
      />
      <path
        d='M116 50 H150 V75 H97Z M157 50 H192 L217 75 H157Z'
        fill='#8bbacb'
        opacity={closed ? '.7' : '.12'}
      />
      <path d='M94 78 H219' stroke={white} strokeWidth='2' />
      {!closed && (
        <path
          d='M130 58 V72 M124 66 130 73 136 66'
          stroke={amber}
          strokeWidth='2'
          fill='none'
        />
      )}
      <circle
        cx='96'
        cy='105'
        r='14'
        fill='#101722'
        stroke='#91a2b8'
        strokeWidth='3'
      />
      <circle
        cx='228'
        cy='105'
        r='14'
        fill='#101722'
        stroke='#91a2b8'
        strokeWidth='3'
      />
      {roof && (
        <path
          d='M135 40 H180 L173 26 H134'
          fill='none'
          stroke={amber}
          strokeWidth='4'
        />
      )}
    </g>
  );
}
function Graphic({
  id,
  visual,
  after,
  playing,
}: {
  id: string;
  visual: CodingVisual;
  after: boolean;
  playing: boolean;
}) {
  const on = after;
  switch (visual.scene) {
    case 'signals':
      return (
        <g>
          <Text y={25} size={14}>
            UM TOQUE NA ALAVANCA
          </Text>
          <path
            d='M53 73 H94 M82 60 95 73 82 86'
            stroke={white}
            strokeWidth='5'
            fill='none'
          />
          {Array.from({ length: on ? 5 : 3 }, (_, index) => (
            <g
              key={index}
              className={playing ? styles.blink : ''}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <rect
                x={113 + index * 34}
                y='53'
                width='27'
                height='36'
                rx='5'
                fill={amber}
              />
              <Text x={126 + index * 34} y={77} color='#182230' size={16}>
                {index + 1}
              </Text>
            </g>
          ))}
          <Text y={123} color={amber}>
            {on ? '5 piscadas' : '3 piscadas'}
          </Text>
        </g>
      );
    case 'lights': {
      const isCorner = id === 'cornering_on' || id === 'cornering_off';
      const fog =
        ['ch_lh_neblina', 'neblina_alto', 'neblina_auto'].includes(id) && on;
      const rear =
        (['drl_traseiro', 'lanterna_porta_malas', 'luzes_malas_freio'].includes(
          id,
        ) &&
          on) ||
        id === 'lanterna_friso';
      const front =
        id === 'drl_freio_mao'
          ? !on
          : ['drl_traseiro', 'neblina_alto', 'neblina_auto'].includes(id);
      const corner = isCorner && (id === 'cornering_on' ? on : !on);
      return (
        <g>
          <Vehicle
            front={front}
            rear={rear}
            fog={fog}
            corner={corner}
            brake={on && ['brake_boasvindas', 'luzes_malas_freio'].includes(id)}
            trunk={
              on && ['lanterna_porta_malas', 'luzes_malas_freio'].includes(id)
            }
            friso={id === 'lanterna_friso' && on}
          />
          {id === 'drl_freio_mao' && (
            <>
              <circle
                cx='52'
                cy='63'
                r='20'
                fill='none'
                stroke={red}
                strokeWidth='2'
              />
              <Text x={52} y={69} color={red}>
                P
              </Text>
              <Text x={53} y={103} size={11}>
                Freio de mão
              </Text>
            </>
          )}
          {isCorner && (
            <path
              d='M249 99 V68 Q249 48 228 48 M238 37 226 48 238 58'
              fill='none'
              stroke={amber}
              strokeWidth='3'
            />
          )}
          {['lanterna_porta_malas', 'luzes_malas_freio'].includes(id) && (
            <Text x={51} y={70} size={11}>
              {on ? 'ABERTO' : 'FECHADO'}
            </Text>
          )}
          {['brake_boasvindas', 'ch_lh_neblina'].includes(id) && (
            <KeyRound
              x={41}
              y={48}
              width={35}
              height={35}
              color={on ? amber : dim}
            />
          )}
          {id === 'neblina_auto' && (
            <Text x={55} y={73} color={amber} size={16}>
              AUTO
            </Text>
          )}
          {id === 'neblina_alto' && (
            <Text x={55} y={73} color='#92caff' size={13}>
              ALTO
            </Text>
          )}
          {id === 'lanterna_friso' && (
            <Text x={266} y={73} size={12}>
              {on ? 'FRISO' : 'TODAS'}
            </Text>
          )}
          <Text y={140} color='#c3cfde' size={11}>
            Frente ↑ · Traseira ↓
          </Text>
        </g>
      );
    }
    case 'dashboard':
      return (
        <Dash>
          {id === 'ponteiros' ||
          id === 'escala_impares' ||
          id === 'escala_320' ? (
            <>
              <path
                d='M89 97 A46 46 0 1 1 181 97'
                fill='none'
                stroke='#91a2b8'
                strokeWidth='6'
              />
              <path
                d={
                  id === 'ponteiros' && on ? 'M135 96 169 53' : 'M135 96 100 79'
                }
                stroke={red}
                strokeWidth='4'
                strokeLinecap='round'
              />
              <circle cx='135' cy='96' r='5' fill={white} />
              <Text x={136} y={52} size={13}>
                {id === 'escala_320'
                  ? on
                    ? '320'
                    : 'ATUAL'
                  : id === 'escala_impares'
                    ? on
                      ? '90  110'
                      : '80  100'
                    : 'TESTE'}
              </Text>
              <Text x={225} y={79} color={amber} size={14}>
                {id === 'ponteiros' ? 'PARADO' : 'ESCALA'}
              </Text>
            </>
          ) : id === 'layout_painel' ? (
            on ? (
              <>
                <circle
                  cx='160'
                  cy='70'
                  r='30'
                  fill='none'
                  stroke={red}
                  strokeWidth='5'
                />
                <Text y={77}>0</Text>
                <Text y={112} size={12}>
                  VISUAL CENTRAL
                </Text>
              </>
            ) : (
              <>
                <circle
                  cx='104'
                  cy='70'
                  r='28'
                  fill='none'
                  stroke='#91a2b8'
                  strokeWidth='4'
                />
                <circle
                  cx='215'
                  cy='70'
                  r='28'
                  fill='none'
                  stroke='#91a2b8'
                  strokeWidth='4'
                />
                <Text y={113} size={12}>
                  DOIS MOSTRADORES
                </Text>
              </>
            )
          ) : id === 'lap_timer' ? (
            <>
              <Timer
                x={78}
                y={49}
                width={36}
                height={36}
                color={on ? amber : dim}
              />
              <Text x={186} y={80} size={25}>
                {on ? '00:08.42' : '— — : — —'}
              </Text>
            </>
          ) : id === 'reabastecer' ? (
            <>
              <Fuel
                x={79}
                y={48}
                width={36}
                height={36}
                color={on ? amber : dim}
              />
              <Text x={187} y={76} size={22}>
                {on ? '≈ 15 L' : '— —'}
              </Text>
              <Text x={186} y={101} size={12}>
                PARA COMPLETAR
              </Text>
            </>
          ) : id === 'temperatura_oleo' ? (
            <>
              <Thermometer
                x={81}
                y={47}
                width={35}
                height={40}
                color={on ? red : dim}
              />
              <Text x={190} y={80} size={25}>
                {on ? '90 °C' : '— —'}
              </Text>
              <Text x={190} y={104} size={12}>
                ÓLEO · EXEMPLO
              </Text>
            </>
          ) : (
            <>
              <path
                d='M112 88 Q98 36 126 40 M194 40 Q222 36 208 88'
                fill='none'
                stroke={on ? amber : dim}
                strokeWidth='5'
              />
              <Text x={160} y={83} color={on ? amber : dim} size={31}>
                !
              </Text>
              <Text y={112} size={12}>
                AVISO DOS PNEUS
              </Text>
            </>
          )}
        </Dash>
      );
    case 'screen':
      return (
        <Screen color={id === 'visual_vermelho' && on ? '#6a1c2a' : '#27374c'}>
          {['menu_drl', 'menu_alarme'].includes(id) ? (
            <>
              <Text y={46} size={13}>
                CONFIGURAÇÕES
              </Text>
              {id === 'menu_drl' ? (
                <Lightbulb x={82} y={62} width={23} height={23} color={white} />
              ) : (
                <Volume2 x={82} y={62} width={23} height={23} color={white} />
              )}
              <Text x={159} y={80} size={14}>
                {on ? (id === 'menu_drl' ? 'Luz diurna' : 'Bipe') : 'Sem opção'}
              </Text>
              {on && (
                <>
                  <rect
                    x='211'
                    y='66'
                    width='31'
                    height='17'
                    rx='8'
                    fill={red}
                  />
                  <circle cx='232' cy='74' r='5' fill={white} />
                </>
              )}
            </>
          ) : id === 'camera_re' && on ? (
            <>
              <path
                d='M95 106 120 47 M225 106 200 47 M109 77 H211'
                fill='none'
                stroke='#80e2a3'
                strokeWidth='3'
              />
              <path d='M88 108 H232' stroke={red} strokeWidth='4' />
              <Text y={41} size={12}>
                CÂMERA INSTALADA
              </Text>
            </>
          ) : id === 'offroad' && on ? (
            <>
              <circle
                cx='160'
                cy='68'
                r='30'
                fill='none'
                stroke='#acbecf'
                strokeWidth='2'
              />
              <path d='M160 42 151 77 170 77Z' fill={red} />
              <Text x={160} y={35} size={11}>
                N
              </Text>
              <Text x={160} y={107} size={12}>
                BÚSSOLA
              </Text>
            </>
          ) : id === 'autoescola' && on ? (
            <>
              <Text y={80} size={26}>
                0 km/h
              </Text>
              <path
                d='M92 54 80 66 92 78 M228 54 240 66 228 78'
                stroke={amber}
                strokeWidth='4'
                fill='none'
              />
            </>
          ) : id === 'logo_central' ? (
            <>
              <Text y={77} size={27}>
                {on ? 'NOVO LOGO' : 'LOGO ATUAL'}
              </Text>
              <Text y={103} size={11}>
                ABERTURA DA CENTRAL
              </Text>
            </>
          ) : id === 'sport_menu' && on ? (
            <>
              <path
                d='M88 88 V52 H148 V88 M174 88 V52 H233 V88'
                stroke={red}
                fill='none'
                strokeWidth='3'
              />
              <Text x={118} y={76} size={15}>
                — —
              </Text>
              <Text x={204} y={76} size={15}>
                — —
              </Text>
              <Text y={105} size={12}>
                DADOS DO CARRO
              </Text>
            </>
          ) : id === 'menus_movimento' ? (
            <>
              <Monitor x={102} y={49} width={39} height={39} color={white} />
              {on ? (
                <CircleAlert
                  x={178}
                  y={47}
                  width={34}
                  height={34}
                  color={amber}
                />
              ) : (
                <Lock x={178} y={47} width={34} height={34} color={white} />
              )}
              <Text y={105} size={11}>
                {on ? 'ACESSO A CONFIRMAR' : 'MENU RESTRITO'}
              </Text>
            </>
          ) : (
            <>
              <rect
                x='84'
                y='44'
                width='28'
                height='28'
                rx='5'
                fill={on ? red : '#8094ab'}
              />
              <rect
                x='127'
                y='44'
                width='28'
                height='28'
                rx='5'
                fill={on ? red : '#8094ab'}
              />
              <rect
                x='170'
                y='44'
                width='28'
                height='28'
                rx='5'
                fill={on ? red : '#8094ab'}
              />
              <rect
                x='213'
                y='44'
                width='24'
                height='28'
                rx='5'
                fill={on ? red : '#8094ab'}
              />
              <Text y={100} size={12}>
                {id === 'visual_vermelho'
                  ? 'APARÊNCIA DA TELA'
                  : 'TELA DO RÁDIO'}
              </Text>
            </>
          )}
        </Screen>
      );
    case 'windows':
      return (
        <g>
          <SideCar
            closed={
              id === 'vidros_trancar'
                ? on
                : id === 'vidros_pos_ignicao'
                  ? !on
                  : true
            }
            roof={id === 'teto_chave' && on}
          />
          <KeyRound
            x={30}
            y={20}
            width={29}
            height={29}
            color={on ? amber : dim}
          />
          {id === 'vidros_pos_ignicao' ? (
            <>
              <Power x={266} y={25} width={24} height={24} color={dim} />
              <Text x={264} y={73} size={12}>
                {on ? 'LIBERADO' : 'INATIVO'}
              </Text>
            </>
          ) : id === 'vidros_trancar' ? (
            on ? (
              <Lock x={270} y={22} width={25} height={25} color={amber} />
            ) : (
              <Unlock x={270} y={22} width={25} height={25} color={dim} />
            )
          ) : null}
          <Text y={139} size={11}>
            {id === 'teto_chave'
              ? 'ACIONAMENTO PELA CHAVE'
              : id === 'vidros_pos_ignicao'
                ? 'IGNIÇÃO DESLIGADA'
                : 'AO TRANCAR O CARRO'}
          </Text>
        </g>
      );
    case 'button':
      return (
        <g>
          <circle
            cx='160'
            cy='69'
            r='46'
            fill='#27374c'
            stroke={on ? red : dim}
            strokeWidth='6'
            className={on && playing ? styles.pulse : ''}
          />
          <Text y={64} size={16}>
            START
          </Text>
          <Text y={86} size={12}>
            ENGINE
          </Text>
          <Text y={137} color='#c4cedc' size={12}>
            SÓ A ILUMINAÇÃO DO BOTÃO
          </Text>
        </g>
      );
    case 'memory':
      return (
        <g>
          <Text y={24} size={13}>
            DESLIGAR → LIGAR O CARRO
          </Text>
          {id === 'aquecimento_bancos' ? (
            <>
              <Armchair
                x={81}
                y={43}
                width={60}
                height={60}
                color={on ? amber : dim}
              />
              <path
                d='M154 91 Q144 81 154 71 Q164 61 154 51 M170 91 Q160 81 170 71 Q180 61 170 51'
                fill='none'
                stroke={on ? red : dim}
                strokeWidth='3'
              />
            </>
          ) : (
            <>
              <Wind x={91} y={46} width={51} height={51} color={white} />
              <path
                d='M176 54 A25 25 0 1 1 176 92 M178 47 169 55 181 59'
                fill='none'
                stroke={on ? amber : dim}
                strokeWidth='3'
              />
            </>
          )}
          <Text y={132} color={on ? amber : white} size={15}>
            {on ? 'ÚLTIMO AJUSTE MANTIDO' : 'EXEMPLO: AJUSTE MUDOU'}
          </Text>
        </g>
      );
    case 'alert':
      return (
        <Dash>
          {['led_neblina', 'led_placa'].includes(id) ? (
            <>
              <Lightbulb
                x={83}
                y={48}
                width={38}
                height={38}
                color={on ? white : amber}
              />
              {on ? (
                <Check x={184} y={47} width={39} height={39} color='#9cd2ab' />
              ) : (
                <CircleAlert
                  x={184}
                  y={47}
                  width={39}
                  height={39}
                  color={amber}
                />
              )}
              <Text y={107} size={12}>
                {id === 'led_placa' ? 'LUZ DE PLACA' : 'FAROL DE NEBLINA'}
              </Text>
            </>
          ) : (
            <>
              {id === 'aviso_portas' ? (
                <DoorOpen x={79} y={46} width={41} height={41} color={amber} />
              ) : id === 'aviso_farol' ? (
                <Lightbulb x={79} y={46} width={41} height={41} color={amber} />
              ) : (
                <>
                  <circle cx='98' cy='44' r='7' fill={white} />
                  <path
                    d='M88 58 Q98 52 108 58 L112 87 H84Z M83 61 111 81 M84 81 H113'
                    fill='none'
                    stroke={white}
                    strokeWidth='4'
                  />
                </>
              )}
              {on ? (
                <VolumeX x={186} y={48} width={38} height={38} color={dim} />
              ) : (
                <Volume2 x={186} y={48} width={38} height={38} color={amber} />
              )}
              <Text y={107} size={11}>
                {id === 'aviso_portas'
                  ? 'PORTA CONTINUA ABERTA'
                  : id === 'aviso_farol'
                    ? 'FAROL CONTINUA ACESO'
                    : 'ALTERAÇÃO NO AVISO'}
              </Text>
            </>
          )}
        </Dash>
      );
    case 'lock':
      return (
        <g>
          <Vehicle />
          <KeyRound x={44} y={32} width={32} height={32} color={amber} />
          {id === 'bipe_travas' ? (
            <>
              <Lock x={243} y={32} width={30} height={30} color={white} />
              {on ? (
                <Volume2 x={239} y={78} width={38} height={38} color={amber} />
              ) : (
                <VolumeX x={239} y={78} width={38} height={38} color={dim} />
              )}
            </>
          ) : (
            <>
              {on ? (
                <Lock x={243} y={50} width={34} height={34} color={amber} />
              ) : (
                <Unlock x={243} y={50} width={34} height={34} color={dim} />
              )}
              {id === 'trancar_motor_ligado' ? (
                <Text x={55} y={107} color={amber} size={12}>
                  MOTOR ON
                </Text>
              ) : (
                <Text x={54} y={107} size={11}>
                  SAIU + FECHOU
                </Text>
              )}
            </>
          )}
        </g>
      );
    case 'climate':
      return (
        <Dash>
          <Fan x={76} y={48} width={39} height={39} color={white} />
          <Text x={174} y={66} size={18}>
            AUTO
          </Text>
          {Array.from({ length: 4 }, (_, i) => (
            <rect
              key={i}
              x={147 + i * 19}
              y={99 - i * 5}
              width='13'
              height={8 + i * 5}
              rx='2'
              fill={on ? (i < 3 ? amber : dim) : '#273448'}
            />
          ))}
        </Dash>
      );
    case 'hill':
      return (
        <g>
          <path d='M38 124 277 61' stroke='#9aabba' strokeWidth='4' />
          <g transform='translate(24,-4) rotate(-15 160 100) scale(.85)'>
            <SideCar />
          </g>
          <Text y={25} color={amber} size={13}>
            {on ? 'LIBERAÇÃO AJUSTADA' : 'SEGURA NA SUBIDA'}
          </Text>
        </g>
      );
    case 'pedal':
      return (
        <g>
          <path
            d='M83 37 104 104 H136 L118 37Z'
            stroke='#b1c0d0'
            strokeWidth='3'
            fill='#35495f'
          />
          <path
            d='M144 49 H186 M175 39 187 49 175 59'
            stroke={amber}
            strokeWidth='3'
            fill='none'
          />
          <path
            d={on ? 'M199 105 Q217 58 272 44' : 'M199 105 Q242 102 272 44'}
            fill='none'
            stroke={on ? red : '#9aabba'}
            strokeWidth='4'
          />
          <Text y={138} size={12}>
            AJUSTE DE RESPOSTA · SEM GANHO DE POTÊNCIA
          </Text>
        </g>
      );
    case 'steering':
      return (
        <g>
          <circle
            cx='133'
            cy='69'
            r='43'
            stroke='#aebed0'
            fill='none'
            strokeWidth='6'
          />
          <circle cx='133' cy='69' r='12' fill={on ? red : '#7b90a8'} />
          <path
            d='M121 69 H92 M145 69 H175 M133 81 V108'
            stroke='#aebed0'
            strokeWidth='5'
          />
          <Text x={241} y={60} size={13}>
            DIREÇÃO
          </Text>
          <Text x={241} y={83} color={on ? amber : white} size={12}>
            {on ? 'OUTRO AJUSTE' : 'AJUSTE ATUAL'}
          </Text>
          <Text y={138} size={12}>
            EXEMPLOS DE CONFIGURAÇÃO
          </Text>
        </g>
      );
    case 'traction':
      return (
        <Dash>
          <Car x={86} y={46} width={49} height={49} color={white} />
          <Text x={208} y={68} size={18}>
            TRAÇÃO
          </Text>
          <Text x={208} y={93} color={on ? amber : white} size={12}>
            {on ? 'CONSULTAR MODOS' : 'AJUSTE ATUAL'}
          </Text>
        </Dash>
      );
    case 'xds':
      return (
        <g>
          <Vehicle />
          <path
            d='M241 122 Q277 69 226 21 M231 18 219 19 225 31'
            fill='none'
            stroke='#93a8bc'
            strokeWidth='3'
          />
          <rect
            x='112'
            y='62'
            width='9'
            height='27'
            rx='3'
            fill={on ? amber : dim}
          />
          <Text x={59} y={64} color={on ? amber : dim} size={12}>
            {on ? 'FREIO' : 'CURVA'}
          </Text>
          <Text x={59} y={83} size={11}>
            {on ? 'RODA INTERNA' : 'À ESQUERDA'}
          </Text>
        </g>
      );
    case 'ambient':
      return (
        <g>
          <path
            d='M64 75 Q160 10 256 75 L243 106 H77Z'
            fill='#27374c'
            stroke='#9aabba'
            strokeWidth='2'
          />
          <path
            d='M83 78 Q160 34 237 78'
            fill='none'
            stroke={on ? (id === 'cores_modos' ? '#b48aff' : red) : white}
            strokeWidth='6'
          />
          <rect x='134' y='59' width='52' height='28' rx='4' fill='#15202e' />
          {id === 'ambiente_30' ? (
            <>
              {Array.from({ length: on ? 30 : 1 }, (_, i) => (
                <circle
                  key={i}
                  cx={43 + (i % 15) * 16.5}
                  cy={118 + Math.floor(i / 15) * 14}
                  r='4'
                  fill={on ? `hsl(${i * 12},75%,65%)` : white}
                />
              ))}
              <Text y={24} size={13}>
                {on ? 'ATÉ 30 OPÇÕES' : 'UMA OPÇÃO DE COR'}
              </Text>
            </>
          ) : (
            <Text y={130} color={on ? '#c7a8ff' : white} size={14}>
              {on ? 'COR DO MODO ESCOLHIDO' : 'COR FIXA'}
            </Text>
          )}
        </g>
      );
    case 'fade':
      return (
        <g>
          <path
            d='M69 93 Q160 30 251 93'
            fill='none'
            stroke='#a6b8ca'
            strokeWidth='3'
          />
          <rect
            x='129'
            y='43'
            width='62'
            height='34'
            rx='6'
            fill='#25374d'
            stroke='#8b9eb3'
          />
          <path
            d={id === 'fade_interno' ? 'M126 22 H194' : 'M81 91 Q160 43 239 91'}
            fill='none'
            stroke={amber}
            strokeWidth='7'
            strokeLinecap='round'
            className={on && playing ? styles.fade : ''}
            opacity={on ? '1' : '.45'}
          />
          <Text y={128} size={14}>
            {on ? 'LUZ GRADUAL' : 'LUZ DIRETA'}
          </Text>
        </g>
      );
    case 'engine':
      return (
        <Dash>
          <Power
            x={83}
            y={44}
            width={42}
            height={42}
            color={on ? '#a3d6ac' : dim}
          />
          <Text x={202} y={64} size={13}>
            CARRO PARADO
          </Text>
          <Text x={202} y={88} color={on ? '#a3d6ac' : white} size={16}>
            {on ? 'MOTOR LIGADO' : 'MOTOR DESLIGADO'}
          </Text>
        </Dash>
      );
  }
}

export default function FunctionVisual({
  functionId,
  initialAfter = true,
}: {
  functionId: string;
  initialAfter?: boolean;
}) {
  const visual = codingVisuals[functionId];
  const [after, setAfter] = useState(initialAfter);
  const [playing, setPlaying] = useState(false);
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!playing) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) {
      setPlaying(false);
      return;
    }
    const timer = window.setInterval(() => setAfter((value) => !value), 2400);
    const ancestors: HTMLDetailsElement[] = [];
    let parent = root.current?.parentElement;
    while (parent) {
      if (parent instanceof HTMLDetailsElement) ancestors.push(parent);
      parent = parent.parentElement;
    }
    const pause = () => {
      if (
        document.hidden ||
        reduced.matches ||
        ancestors.some((item) => !item.open)
      )
        setPlaying(false);
    };
    document.addEventListener('visibilitychange', pause);
    reduced.addEventListener('change', pause);
    ancestors.forEach((item) => item.addEventListener('toggle', pause));
    return () => {
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', pause);
      reduced.removeEventListener('change', pause);
      ancestors.forEach((item) => item.removeEventListener('toggle', pause));
    };
  }, [playing]);
  if (!visual) return null;
  return (
    <details className={styles.example}>
      <summary aria-label={`Ver como funciona: ${visual.after}`}>
        <Eye size={18} />
        <span>Ver como funciona</span>
        <ChevronDown size={18} />
      </summary>
      <figure
        ref={root}
        className={styles.figure}
        aria-label='Demonstração da função'
      >
        <div className={styles.top}>
          <span>Exemplo ilustrativo</span>
          <button
            type='button'
            className={styles.animate}
            aria-pressed={playing}
            onClick={() => {
              setPlaying(!playing);
              setAfter(false);
            }}
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
            {playing ? 'Pausar' : 'Animar'}
          </button>
        </div>
        <svg
          className={styles.scene}
          viewBox='0 0 320 144'
          role='img'
          aria-label={`${after ? visual.after : visual.before}. ${visual.caption}`}
        >
          <Graphic
            id={functionId}
            visual={visual}
            after={after}
            playing={playing}
          />
        </svg>
        <figcaption>
          <p className={styles.result} aria-live={playing ? 'off' : 'polite'}>
            {after ? visual.after : visual.before}
          </p>
          <div
            className={styles.compare}
            role='group'
            aria-label='Comparar o exemplo'
          >
            <button
              type='button'
              aria-pressed={!after}
              onClick={() => {
                setPlaying(false);
                setAfter(false);
              }}
            >
              Antes
            </button>
            <button
              type='button'
              aria-pressed={after}
              onClick={() => {
                setPlaying(false);
                setAfter(true);
              }}
            >
              Depois
            </button>
          </div>
          <p className={styles.caption}>{visual.caption}</p>
        </figcaption>
      </figure>
    </details>
  );
}
