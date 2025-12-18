
import React from 'react';

const KidsArea: React.FC = () => {
  return (
    <group position={[-7, 0, 7]}>
      {/* Tapete Central Colorido */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.5, 4.5]} />
        <meshStandardMaterial color="#fff9c4" />
      </mesh>

      {/* Paredes Baixas de Proteção */}
      <group>
        <mesh position={[0, 0.4, 2.25]} castShadow>
          <boxGeometry args={[4.5, 0.8, 0.1]} />
          <meshStandardMaterial color="#fce4ec" />
        </mesh>
        <mesh position={[-2.25, 0.4, 0]} castShadow>
          <boxGeometry args={[0.1, 0.8, 4.5]} />
          <meshStandardMaterial color="#fce4ec" />
        </mesh>
      </group>

      {/* Mesa Infantil Baixa */}
      <group position={[1, 0, -1]}>
        <mesh position={[0, 0.45, 0]} castShadow>
          <boxGeometry args={[1.5, 0.1, 1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* Pernas da Mesa */}
        <mesh position={[0.6, 0.2, 0.4]} castShadow>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#b3e5fc" />
        </mesh>
        <mesh position={[-0.6, 0.2, 0.4]} castShadow>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#b3e5fc" />
        </mesh>
        <mesh position={[0.6, 0.2, -0.4]} castShadow>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#b3e5fc" />
        </mesh>
        <mesh position={[-0.6, 0.2, -0.4]} castShadow>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
          <meshStandardMaterial color="#b3e5fc" />
        </mesh>
      </group>

      {/* Blocos de Brinquedo (Geometrias Básicas) */}
      <group position={[-1, 0.2, 1]}>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#ff80ab" />
        </mesh>
        <mesh position={[0.45, 0, 0.1]} rotation={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#81d4fa" />
        </mesh>
        <mesh position={[0.1, 0.4, 0.05]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#a5d6a7" />
        </mesh>
      </group>

      {/* Puffs Coloridos (Esferas achatadas) */}
      <mesh position={[-1, 0.15, -1]} castShadow>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#ce93d8" />
      </mesh>
      <mesh position={[1, 0.15, 1]} castShadow>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#ffcc80" />
      </mesh>

      {/* Iluminação Suave Local */}
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#ffffff" distance={5} />
    </group>
  );
};

export default KidsArea;
