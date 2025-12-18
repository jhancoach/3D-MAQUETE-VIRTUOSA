
import React from 'react';
import CherryBlossomTree from './CherryBlossomTree';
import PrayerRoom from './PrayerRoom';
import KidsArea from './KidsArea';
import PhotoStudio from './PhotoStudio';
import FittingRooms from './FittingRooms';
import ComfortArea from './ComfortArea';
import NewArrivalsArea from './NewArrivalsArea';
import StockArea from './StockArea';
import CheckoutCounter from './CheckoutCounter';
import AreaLabel from './AreaLabel';
import EntranceBranding from './EntranceBranding';
import EntranceArch from './EntranceArch';

const StoreLayout: React.FC = () => {
  const PI_2 = Math.PI / 2;

  return (
    <group>
      {/* Chão */}
      <mesh rotation={[-PI_2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#f3cccd" />
      </mesh>

      {/* Paredes Externas */}
      <group>
        {/* Norte */}
        <mesh position={[0, 1.5, -10]} receiveShadow castShadow>
          <boxGeometry args={[20, 3, 0.2]} />
          <meshStandardMaterial color="#fce7e8" />
        </mesh>
        {/* Sul (Entrada) - Dividida para o vão da porta se necessário, ou mantida como fundo */}
        <mesh position={[0, 1.5, 10]} receiveShadow castShadow>
          <boxGeometry args={[20, 3, 0.2]} />
          <meshStandardMaterial color="#fce7e8" />
        </mesh>
        {/* Leste */}
        <mesh position={[10, 1.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.2, 3, 20]} />
          <meshStandardMaterial color="#fce7e8" />
        </mesh>
        {/* Oeste */}
        <mesh position={[-10, 1.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.2, 3, 20]} />
          <meshStandardMaterial color="#fce7e8" />
        </mesh>
      </group>

      {/* Portal de Entrada com Arco */}
      <EntranceArch />

      {/* Identidade Visual na Entrada */}
      <EntranceBranding />

      {/* Árvore de Cerejeira Central */}
      <CherryBlossomTree />

      {/* Labels de Identificação de Áreas */}
      <AreaLabel text="Loja Principal" position={[0, 2.8, 0]} />
      <AreaLabel text="Atendimento" position={[0, 2.5, 6.5]} />
      <AreaLabel text="Provadores" position={[6.5, 2.5, 0]} />
      <AreaLabel text="Espaço Kids" position={[-7, 2.5, 4.5]} />
      <AreaLabel text="Estúdio de Fotos" position={[-7.5, 2.5, -2]} />
      <AreaLabel text="Espaço Aconchego" position={[4, 2.5, 5]} />
      <AreaLabel text="Mulheres de Oração" position={[7, 2.5, -4]} />
      <AreaLabel text="Área de Novos Looks" position={[-3, 2.5, -7]} />
      <AreaLabel text="Estoque de Looks" position={[2.5, 2.5, -7]} />

      {/* Componentes de Área */}
      <KidsArea />
      <PhotoStudio />
      <FittingRooms />
      <PrayerRoom />
      <ComfortArea />
      <NewArrivalsArea />
      <StockArea />
      <CheckoutCounter />

      {/* Área Principal (Expositores) */}
      <group position={[0, 0, 0]}>
        {/* Araras de roupas (Geometrias básicas) */}
        {[ -4, -1.5, 2.5, 5 ].map((x) => (
          <mesh key={x} position={[x, 0.8, 0]} castShadow>
            <boxGeometry args={[0.5, 1.6, 4]} />
            <meshStandardMaterial color="#f06292" />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default StoreLayout;
