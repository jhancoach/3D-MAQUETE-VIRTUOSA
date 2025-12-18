
import React from 'react';

const Lights: React.FC = () => {
  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={2} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
        color="#fff5f5"
      />
      <pointLight position={[-5, 5, -5]} intensity={1} color="#ffe4e6" />
      <pointLight position={[5, 3, 5]} intensity={0.5} color="#ffffff" />
    </>
  );
};

export default Lights;
