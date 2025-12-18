
import React from 'react';

const NewArrivalsArea: React.FC = () => {
  return (
    <group position={[-3, 0, -8.5]}>
      {/* Chão delimitador da área de processamento */}
      <mesh position={[0, 0.012, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[5, 2.5]} />
        <meshStandardMaterial color="#f8f1f1" />
      </mesh>

      {/* Prateleiras de Estoque Premium (Fundo) */}
      <group position={[0, 0, -1]}>
        {/* Estrutura Vertical */}
        {[ -2.4, 0, 2.4 ].map((x, i) => (
          <mesh key={i} position={[x, 1.25, 0]} castShadow>
            <boxGeometry args={[0.1, 2.5, 0.4]} />
            <meshStandardMaterial color="#d1d1d1" />
          </mesh>
        ))}
        {/* Prateleiras Horizontais */}
        {[ 0.5, 1.2, 1.9, 2.5 ].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} castShadow>
            <boxGeometry args={[5, 0.05, 0.4]} />
            <meshStandardMaterial color="#d1d1d1" />
          </mesh>
        ))}

        {/* Caixas de Grife/Looks (Representativas) */}
        <group position={[-1.2, 0.75, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.6, 0.4, 0.35]} />
            <meshStandardMaterial color="#212121" /> {/* Caixa Preta Elegante */}
          </mesh>
          <mesh position={[0, 0.45, 0]} castShadow>
            <boxGeometry args={[0.5, 0.3, 0.3]} />
            <meshStandardMaterial color="#ffffff" /> {/* Caixa Branca */}
          </mesh>
        </group>
        
        <group position={[1.2, 1.45, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.7, 0.4, 0.35]} />
            <meshStandardMaterial color="#cfb53b" /> {/* Caixa Dourada/Premium */}
          </mesh>
        </group>

        <group position={[0, 2.1, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.8, 0.3, 0.3]} />
            <meshStandardMaterial color="#f8eeee" />
          </mesh>
        </group>
      </group>

      {/* Bancada de Conferência Central */}
      <group position={[0, 0.4, 0.5]}>
        <mesh castShadow>
          <boxGeometry args={[2.5, 0.8, 0.8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* Item sobre a bancada (Look sendo conferido) */}
        <mesh position={[0, 0.42, 0]} castShadow>
          <boxGeometry args={[0.8, 0.05, 0.5]} />
          <meshStandardMaterial color="#ec407a" />
        </mesh>
      </group>

      {/* Iluminação Técnica */}
      <pointLight position={[0, 2.5, 0]} intensity={1.2} color="#ffffff" distance={6} />
      
      {/* Placa Decorativa de Identificação */}
      <mesh position={[0, 2.2, -0.8]}>
        <boxGeometry args={[1.5, 0.3, 0.05]} />
        <meshStandardMaterial color="#ad1457" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

export default NewArrivalsArea;
