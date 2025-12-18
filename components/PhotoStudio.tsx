
import React from 'react';

const PhotoStudio: React.FC = () => {
  return (
    <group position={[-7.5, 0, -4]}>
      {/* Piso do Estúdio (Cinza muito suave/Bege claro) */}
      <mesh position={[0, 0.015, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* Fundo Infinito (Parede frontal do estúdio) */}
      <mesh position={[0, 1.25, -2]} castShadow>
        <boxGeometry args={[4, 2.5, 0.05]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>

      {/* Iluminação de Estúdio (Softbox representativo) */}
      <group position={[1.5, 2, 1]}>
        <mesh rotation={[0.4, -0.4, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        <pointLight intensity={1.5} distance={5} color="#ffffff" />
      </group>

      <group position={[-1.5, 2, 1]}>
        <mesh rotation={[0.4, 0.4, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        <pointLight intensity={1} distance={5} color="#fff0f0" />
      </group>

      {/* Câmera e Tripé */}
      <group position={[0, 0, 1.5]}>
        {/* Tripé (Base central simplificada) */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.05, 1.2, 8]} />
          <meshStandardMaterial color="#212121" />
        </mesh>
        {/* Pernas do Tripé */}
        <mesh position={[0.2, 0.3, 0.1]} rotation={[0.2, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.7]} />
          <meshStandardMaterial color="#212121" />
        </mesh>
        <mesh position={[-0.2, 0.3, 0.1]} rotation={[0.2, 0, 0.3]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.7]} />
          <meshStandardMaterial color="#212121" />
        </mesh>
        <mesh position={[0, 0.3, -0.2]} rotation={[-0.2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.7]} />
          <meshStandardMaterial color="#212121" />
        </mesh>

        {/* Corpo da Câmera */}
        <group position={[0, 1.25, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.3, 0.2, 0.2]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          {/* Lente */}
          <mesh position={[0, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.15, 12]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </group>
      </group>

      {/* Tapete delimitador */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.2, 4.2]} />
        <meshStandardMaterial color="#ad1457" transparent opacity={0.05} />
      </mesh>
    </group>
  );
};

export default PhotoStudio;
