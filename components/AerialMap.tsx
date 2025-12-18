
import React from 'react';
import { Html } from '@react-three/drei';

interface MapLabelProps {
  position: [number, number, number];
  text: string;
}

const MapLabel: React.FC<MapLabelProps> = ({ position, text }) => (
  <Html position={position} center distanceFactor={15}>
    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-pink-300 pointer-events-none whitespace-nowrap">
      <span className="text-[10px] font-bold text-pink-800 uppercase tracking-wider">{text}</span>
    </div>
  </Html>
);

const AerialMap: React.FC = () => {
  return (
    <group>
      {/* Camada de semi-transparência para realçar o mapa */}
      <mesh position={[0, 2.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>

      {/* Rótulos dos Ambientes */}
      <MapLabel position={[0, 3, 0]} text="Loja Principal" />
      <MapLabel position={[0, 3, 6.5]} text="Balcão de Atendimento" />
      <MapLabel position={[8, 3, 0]} text="Provadores" />
      <MapLabel position={[-7, 3, 7]} text="Espaço Kids" />
      <MapLabel position={[-7.5, 3, -4]} text="Estúdio de Fotos" />
      <MapLabel position={[4, 3, 7.5]} text="Espaço Aconchego" />
      <MapLabel position={[7, 3, -7]} text="Mulheres de Oração" />
      <MapLabel position={[-3, 3, -8.5]} text="Área de Novos Looks" />
      <MapLabel position={[2.5, 3, -8.5]} text="Estoque de Looks" />

      {/* Linhas de demarcação simples (Map Style) */}
      <gridHelper args={[20, 10, 0xffc1e3, 0xfff1f1]} position={[0, 0.05, 0]} />
    </group>
  );
};

export default AerialMap;
