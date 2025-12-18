
import React from 'react';

const StockArea: React.FC = () => {
  return (
    <group position={[2.5, 0, -8.5]}>
      {/* Piso delimitador do estoque */}
      <mesh position={[0, 0.011, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4.5, 2.5]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Estantes de Armazenamento (Alinhadas ao fundo) */}
      <group position={[0, 0, -1]}>
        {/* Estrutura Vertical das Estantes */}
        {[ -2, -0.7, 0.7, 2 ].map((x, i) => (
          <mesh key={i} position={[x, 1.4, 0]} castShadow>
            <boxGeometry args={[0.08, 2.8, 0.5]} />
            <meshStandardMaterial color="#b0bec5" />
          </mesh>
        ))}
        {/* Prateleiras Horizontais (Níveis de estoque) */}
        {[ 0.4, 0.9, 1.4, 1.9, 2.4 ].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} castShadow>
            <boxGeometry args={[4, 0.04, 0.5]} />
            <meshStandardMaterial color="#b0bec5" />
          </mesh>
        ))}

        {/* Caixas organizadoras empilhadas */}
        {/* Nível 1 */}
        <mesh position={[-1.3, 0.55, 0]} castShadow>
          <boxGeometry args={[0.6, 0.3, 0.45]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-0.6, 0.55, 0]} castShadow>
          <boxGeometry args={[0.6, 0.3, 0.45]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        
        {/* Nível 2 */}
        <mesh position={[1.3, 1.05, 0]} castShadow>
          <boxGeometry args={[0.5, 0.3, 0.4]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.7, 1.05, 0]} castShadow>
          <boxGeometry args={[0.5, 0.3, 0.4]} />
          <meshStandardMaterial color="#fce4ec" /> {/* Toque rosa sutil */}
        </mesh>

        {/* Nível 3 - Mais alto */}
        <mesh position={[0, 1.55, 0]} castShadow>
          <boxGeometry args={[0.7, 0.3, 0.4]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Outra estante lateral menor */}
      <group position={[1.8, 0, 0.8]} rotation={[0, -Math.PI / 2, 0]}>
         <mesh position={[0, 0.75, 0]} castShadow>
            <boxGeometry args={[0.8, 1.5, 0.4]} />
            <meshStandardMaterial color="#cfd8dc" />
         </mesh>
         <mesh position={[0, 1.6, 0]} castShadow>
            <boxGeometry args={[0.6, 0.2, 0.3]} />
            <meshStandardMaterial color="#ffffff" />
         </mesh>
      </group>

      {/* Iluminação Funcional (Luz fria/direta) */}
      <pointLight position={[0, 2.5, 0]} intensity={1.5} color="#e3f2fd" distance={5} />
      
      {/* Placa decorativa minimalista */}
      <mesh position={[0, 2.5, -0.9]}>
        <boxGeometry args={[1, 0.2, 0.02]} />
        <meshStandardMaterial color="#ad1457" transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

export default StockArea;
