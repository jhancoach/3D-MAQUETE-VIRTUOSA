
import React from 'react';

const CherryBlossomTree: React.FC = () => {
  return (
    <group position={[0.5, 0, 0]}>
      {/* Tronco Principal */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.15, 2.4, 10]} />
        <meshStandardMaterial color="#5d4037" roughness={0.9} />
      </mesh>

      {/* Galhos Superiores */}
      <group position={[0, 1.8, 0]}>
        <mesh rotation={[0, 0, 0.6]} position={[0.4, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.07, 1, 8]} />
          <meshStandardMaterial color="#5d4037" />
        </mesh>
        <mesh rotation={[0, 0, -0.7]} position={[-0.4, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.06, 1.2, 8]} />
          <meshStandardMaterial color="#5d4037" />
        </mesh>
        <mesh rotation={[0.6, 0, 0]} position={[0, 0.4, 0.4]} castShadow>
          <cylinderGeometry args={[0.03, 0.07, 0.8, 8]} />
          <meshStandardMaterial color="#5d4037" />
        </mesh>
      </group>

      {/* Copa (Flores Rosa) */}
      <group position={[0, 2.5, 0]}>
        {/* Esfera central da copa */}
        <mesh position={[0, 0.2, 0]} castShadow>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="#f3b6c8" transparent opacity={0.95} />
        </mesh>
        
        {/* Agrupamentos decorativos de pétalas */}
        <mesh position={[0.6, 0, 0.5]} castShadow>
          <sphereGeometry args={[0.5, 12, 12]} />
          <meshStandardMaterial color="#f8bbd0" transparent opacity={0.9} />
        </mesh>
        <mesh position={[-0.7, 0.1, -0.4]} castShadow>
          <sphereGeometry args={[0.6, 12, 12]} />
          <meshStandardMaterial color="#fce4ec" transparent opacity={0.9} />
        </mesh>
        <mesh position={[0.4, 0.5, -0.6]} castShadow>
          <sphereGeometry args={[0.45, 12, 12]} />
          <meshStandardMaterial color="#f3b6c8" transparent opacity={0.9} />
        </mesh>
        <mesh position={[-0.4, -0.1, 0.7]} castShadow>
          <sphereGeometry args={[0.55, 12, 12]} />
          <meshStandardMaterial color="#f8bbd0" transparent opacity={0.9} />
        </mesh>
        <mesh position={[0, 0.6, 0.2]} castShadow>
          <sphereGeometry args={[0.4, 12, 12]} />
          <meshStandardMaterial color="#fce4ec" transparent opacity={0.9} />
        </mesh>
      </group>

      {/* Base/Vaso Minimalista */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[0.4, 0.5, 0.1, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

export default CherryBlossomTree;
