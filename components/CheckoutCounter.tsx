
import React from 'react';

const CheckoutCounter: React.FC = () => {
  return (
    <group position={[0, 0, 6.5]}>
      {/* Base do Balcão */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[3.5, 1, 1.2]} />
        <meshStandardMaterial color="#f3cccd" />
      </mesh>

      {/* Tampo do Balcão (Premium) */}
      <mesh position={[0, 1.05, 0]} castShadow>
        <boxGeometry args={[3.7, 0.1, 1.4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Detalhe Frontal Decorativo (Friso Rosa Escuro) */}
      <mesh position={[0, 0.5, 0.61]}>
        <boxGeometry args={[3.5, 0.2, 0.05]} />
        <meshStandardMaterial color="#ad1457" />
      </mesh>

      {/* Computador / PDV (Monitor) */}
      <group position={[-0.8, 1.1, 0.1]}>
        {/* Base do Monitor */}
        <mesh position={[0, 0.1, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.08, 0.2, 12]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        {/* Tela */}
        <mesh position={[0, 0.4, 0]} rotation={[-0.2, 0, 0]} castShadow>
          <boxGeometry args={[0.6, 0.4, 0.03]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      </group>

      {/* Máquina de Cartão */}
      <mesh position={[0.5, 1.15, 0.3]} rotation={[0, -0.3, 0]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.3]} />
        <meshStandardMaterial color="#212121" />
      </mesh>

      {/* Pequeno Vaso Decorativo */}
      <group position={[1.2, 1.1, -0.2]}>
        <mesh position={[0, 0.1, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.08, 0.2, 12]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0, 0.3, 0]} castShadow>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#f8bbd0" />
        </mesh>
      </group>

      {/* Iluminação Local do Balcão */}
      <pointLight position={[0, 2.5, 0]} intensity={0.8} color="#ffffff" distance={5} />
    </group>
  );
};

export default CheckoutCounter;
