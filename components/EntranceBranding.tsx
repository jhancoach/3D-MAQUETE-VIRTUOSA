
import React from 'react';
import { useTexture } from '@react-three/drei';

const EntranceBranding: React.FC = () => {
  // Carregamento da textura de identidade visual
  const texture = useTexture('https://i.ibb.co/rhsBndD/ALTA-RESOLUCAO-page-0001.jpg');
  
  // Ajuste fino para evitar distorção e brilho excessivo
  texture.anisotropy = 16;

  return (
    <group position={[0, 0, 8.5]}>
      {/* Tapete de Boas-Vindas com Logo (Chão) */}
      <mesh position={[0, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4, 2.5]} />
        <meshStandardMaterial 
          map={texture} 
          transparent={true} 
          opacity={0.9} 
          polygonOffset 
          polygonOffsetFactor={-1} 
        />
      </mesh>

      {/* Painel de Identidade Visual na Parede Frontal (Interna) */}
      <mesh position={[0, 1.5, 1.35]} rotation={[0, Math.PI, 0]} castShadow>
        <planeGeometry args={[4, 2.2]} />
        <meshStandardMaterial 
          map={texture} 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* Moldura elegante para o painel da parede */}
      <mesh position={[0, 1.5, 1.36]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[4.2, 2.4, 0.02]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

export default EntranceBranding;
