
import React from 'react';

const PrayerRoom: React.FC = () => {
  return (
    <group position={[7, 0, -7]}>
      {/* Chão do Espaço (Levemente elevado para definir área) */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="#f3cccd" />
      </mesh>

      {/* Paredes Baixas (Semi-fechado) */}
      <group>
        {/* Parede Fundo */}
        <mesh position={[0, 1, -2.5]} castShadow>
          <boxGeometry args={[5, 2, 0.1]} />
          <meshStandardMaterial color="#f8eeee" />
        </mesh>
        {/* Parede Lateral Direita */}
        <mesh position={[2.5, 1, 0]} castShadow>
          <boxGeometry args={[0.1, 2, 5]} />
          <meshStandardMaterial color="#f8eeee" />
        </mesh>
        {/* Divisória Entrada */}
        <mesh position={[-2.5, 1, 1]} castShadow>
          <boxGeometry args={[0.1, 2, 3]} />
          <meshStandardMaterial color="#f8eeee" />
        </mesh>
      </group>

      {/* Bancos para Oração */}
      <group position={[0, 0.2, 0]}>
        <mesh position={[0, 0, 1]} castShadow>
          <boxGeometry args={[3.5, 0.4, 0.6]} />
          <meshStandardMaterial color="#e1bee7" />
        </mesh>
        <mesh position={[0, 0, -0.5]} castShadow>
          <boxGeometry args={[3.5, 0.4, 0.6]} />
          <meshStandardMaterial color="#e1bee7" />
        </mesh>
      </group>

      {/* Altar / Mesa Pequena */}
      <mesh position={[0, 0.35, -1.8]} castShadow>
        <boxGeometry args={[1.2, 0.7, 0.8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Cruz Minimalista (Discreta na parede do fundo) */}
      <group position={[0, 1.8, -2.44]}>
        {/* Haste Vertical */}
        <mesh castShadow>
          <boxGeometry args={[0.1, 0.8, 0.05]} />
          <meshStandardMaterial color="#ad1457" />
        </mesh>
        {/* Haste Horizontal */}
        <mesh position={[0, 0.15, 0]} castShadow>
          <boxGeometry args={[0.5, 0.1, 0.05]} />
          <meshStandardMaterial color="#ad1457" />
        </mesh>
      </group>

      {/* Iluminação Quente de Acolhimento */}
      <pointLight position={[0, 2, 0]} intensity={0.8} color="#ffd180" distance={6} decay={2} />
      
      {/* Placa Identificadora Interna */}
      <mesh position={[0, 2.2, -2.45]}>
        <boxGeometry args={[2, 0.4, 0.02]} />
        <meshStandardMaterial color="#ad1457" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

export default PrayerRoom;
