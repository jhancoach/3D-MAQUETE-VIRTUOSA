
import React from 'react';

const EntranceArch: React.FC = () => {
  return (
    <group position={[0, 0, 9.9]}>
      {/* Coluna Esquerda */}
      <mesh position={[-2.2, 1.5, 0]} castShadow>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="#f3cccd" />
      </mesh>
      {/* Detalhe da Base Coluna Esquerda */}
      <mesh position={[-2.2, 0.2, 0]} castShadow>
        <boxGeometry args={[0.5, 0.4, 0.5]} />
        <meshStandardMaterial color="#f8eeee" />
      </mesh>

      {/* Coluna Direita */}
      <mesh position={[2.2, 1.5, 0]} castShadow>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="#f3cccd" />
      </mesh>
      {/* Detalhe da Base Coluna Direita */}
      <mesh position={[2.2, 0.2, 0]} castShadow>
        <boxGeometry args={[0.5, 0.4, 0.5]} />
        <meshStandardMaterial color="#f8eeee" />
      </mesh>

      {/* Viga Superior (Topo do Arco) */}
      <mesh position={[0, 3, 0]} castShadow>
        <boxGeometry args={[4.8, 0.3, 0.4]} />
        <meshStandardMaterial color="#f3cccd" />
      </mesh>

      {/* Arco Decorativo Interno (Simulado com cilindro horizontal) */}
      <mesh position={[0, 2.7, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[2, 2, 0.15, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#f8eeee" />
      </mesh>

      {/* Detalhe Decorativo Central (Brasão/Logo Simbolizado) */}
      <mesh position={[0, 3.1, 0.21]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 3.1, 0.27]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ad1457" />
      </mesh>

      {/* Iluminação de Destaque no Portal */}
      <pointLight position={[0, 2.8, 0.5]} intensity={0.5} color="#ffffff" distance={4} />
    </group>
  );
};

export default EntranceArch;
