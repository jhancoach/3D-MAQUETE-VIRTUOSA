
import React from 'react';
import { Html } from '@react-three/drei';

interface AreaLabelProps {
  text: string;
  position: [number, number, number];
}

const AreaLabel: React.FC<AreaLabelProps> = ({ text, position }) => {
  return (
    <Html
      position={position}
      center
      distanceFactor={8}
      zIndexRange={[10, 0]}
      className="pointer-events-none select-none"
    >
      <div className="flex flex-col items-center group">
        <div className="bg-white/60 backdrop-blur-md border border-pink-100 px-4 py-1 rounded-full shadow-lg transition-all duration-500 hover:bg-white/90">
          <span className="text-pink-900 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap block">
            {text}
          </span>
        </div>
        {/* Indicador visual minimalista (opcional) */}
        <div className="w-px h-4 bg-gradient-to-b from-pink-200 to-transparent mt-1 opacity-50" />
      </div>
    </Html>
  );
};

export default AreaLabel;
