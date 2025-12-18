
import React from 'react';

const FittingRoomStall: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <group position={position}>
      {/* Paredes Laterais */}
      <mesh position={[0, 1.25, 1]} castShadow>
        <boxGeometry args={[2, 2.5, 0.05]} />
        <meshStandardMaterial color="#f8eeee" />
      </mesh>
      <mesh position={[0, 1.25, -1]} castShadow>
        <boxGeometry args={[2, 2.5, 0.05]} />
        <meshStandardMaterial color="#f8eeee" />
      </mesh>
      
      {/* Parede de Fundo */}
      <mesh position={[1, 1.25, 0]} castShadow>
        <boxGeometry args={[0.05, 2.5, 2]} />
        <meshStandardMaterial color="#f8eeee" />
      </mesh>

      {/* Fachada com Arco */}
      <group position={[-1, 0, 0]}>
        {/* Lado Esquerdo da Porta */}
        <mesh position={[0, 1.25, 0.75]} castShadow>
          <boxGeometry args={[0.1, 2.5, 0.5]} />
          <meshStandardMaterial color="#f8eeee" />
        </mesh>
        {/* Lado Direito da Porta */}
        <mesh position={[0, 1.25, -0.75]} castShadow>
          <boxGeometry args={[0.1, 2.5, 0.5]} />
          <meshStandardMaterial color="#f8eeee" />
        </mesh>
        {/* Topo Reto (Acima do Arco) */}
        <mesh position={[0, 2.25, 0]} castShadow>
          <boxGeometry args={[0.1, 0.5, 1]} />
          <meshStandardMaterial color="#f8eeee" />
        </mesh>
        {/* Simulação de Arco Suave (Cilindro horizontal no topo da abertura) */}
        <mesh position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
          <meshStandardMaterial color="#f8eeee" />
        </mesh>

        {/* Cortina (Plane Levemente Recuado) */}
        <mesh position={[0.05, 1, 0]} castShadow>
          <planeGeometry args={[1, 2]} />
          <meshStandardMaterial color="#fce4ec" side={2} transparent opacity={0.8} />
        </mesh>
      </group>

      {/* Tapete Interno */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.9, 1.9]} />
        <meshStandardMaterial color="#f3cccd" />
      </mesh>
    </group>
  );
};

const FittingRooms: React.FC = () => {
  return (
    <group position={[8, 0, 0]}>
      {/* 3 Cabines alinhadas no eixo Z */}
      <FittingRoomStall position={[0, 0, -2.5]} />
      <FittingRoomStall position={[0, 0, 0]} />
      <FittingRoomStall position={[0, 0, 2.5]} />

      {/* Iluminação Suave do Corredor dos Provadores */}
      <pointLight position={[-2, 2.5, 0]} intensity={0.6} color="#ffffff" distance={8} />
    </group>
  );
};

export default FittingRooms;
