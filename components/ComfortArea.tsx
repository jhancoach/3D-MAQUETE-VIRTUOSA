
import React from 'react';

const ComfortArea: React.FC = () => {
  return (
    <group position={[4, 0, 7.5]}>
      {/* Tapete de Acolhimento */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 4]} />
        <meshStandardMaterial color="#fce4ec" />
      </mesh>

      {/* Sofá Principal */}
      <group position={[0, 0.3, -1.2]}>
        <mesh castShadow>
          <boxGeometry args={[3, 0.6, 0.8]} />
          <meshStandardMaterial color="#f8bbd0" />
        </mesh>
        {/* Encosto */}
        <mesh position={[0, 0.4, -0.35]} castShadow>
          <boxGeometry args={[3, 0.8, 0.1]} />
          <meshStandardMaterial color="#f8bbd0" />
        </mesh>
      </group>

      {/* Poltrona Lateral */}
      <group position={[-1.8, 0.3, 0.5]} rotation={[0, Math.PI / 2.5, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.6, 0.8]} />
          <meshStandardMaterial color="#f48fb1" />
        </mesh>
        <mesh position={[0, 0.4, -0.35]} castShadow>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#f48fb1" />
        </mesh>
      </group>

      {/* Mesa de Centro */}
      <mesh position={[0, 0.2, 0.2]} castShadow>
        <boxGeometry args={[1.2, 0.4, 0.8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Itens sobre a mesa (Representativos) */}
      <group position={[0, 0.45, 0.2]}>
        <mesh position={[-0.2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.1]} />
          <meshStandardMaterial color="#f3cccd" />
        </mesh>
        <mesh position={[0.2, 0, 0.1]}>
          <boxGeometry args={[0.15, 0.05, 0.15]} />
          <meshStandardMaterial color="#fff9c4" />
        </mesh>
      </group>

      {/* Dispenser de Água */}
      <group position={[2, 0, 1.3]}>
        {/* Base */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* Galão de Água */}
        <mesh position={[0, 1.25, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.5, 12]} />
          <meshStandardMaterial color="#b3e5fc" transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Iluminação Quente Local */}
      <pointLight position={[0, 2, 0]} intensity={0.7} color="#ffecb3" distance={6} />
    </group>
  );
};

export default ComfortArea;
