
import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';

interface TourPoint {
  pos: [number, number, number];
  look: [number, number, number];
}

const TOUR_POINTS: TourPoint[] = [
  { pos: [15, 15, 15], look: [0, 0, 0] },         // Visão Aérea Inicial
  { pos: [0, 1.7, 9], look: [0, 1.5, 0] },        // Entrada / Balcão
  { pos: [3, 1.7, 3], look: [0.5, 1.2, 0] },      // Árvore de Cerejeira
  { pos: [5, 1.7, 0], look: [8, 1.7, 0] },        // Provadores
  { pos: [-5, 1.7, 5], look: [-7, 1, 7] },        // Espaço Kids
  { pos: [-5, 1.7, -2], look: [-7.5, 1.5, -4] },  // Estúdio de Fotos
  { pos: [2, 1.7, 5], look: [4, 1.2, 7.5] },      // Espaço Aconchego
  { pos: [5, 1.7, -5], look: [7, 1.5, -7] },      // Mulheres de Oração
  { pos: [-1, 1.7, -6], look: [-3, 1.2, -8.5] },  // Área de Novos Looks
  { pos: [1, 1.7, -6], look: [2.5, 1.2, -8.5] },  // Estoque de Looks
  { pos: [12, 15, 12], look: [0, 0, 0] },         // Visão Aérea Final
];

interface AutoTourProps {
  onFinish: () => void;
}

const AutoTour: React.FC<AutoTourProps> = ({ onFinish }) => {
  const { camera } = useThree();
  const index = useRef(0);
  const progress = useRef(0);
  const currentLookAt = useRef([0, 0, 0]);
  
  // Velocidade do tour (quanto menor, mais devagar)
  const step = 0.005;

  useEffect(() => {
    // Reset camera position to start of tour
    const start = TOUR_POINTS[0];
    camera.position.set(...start.pos);
    currentLookAt.current = [...start.look];
    camera.lookAt(...start.look);
  }, [camera]);

  useFrame(() => {
    if (index.current >= TOUR_POINTS.length - 1) {
      onFinish();
      return;
    }

    const start = TOUR_POINTS[index.current];
    const end = TOUR_POINTS[index.current + 1];

    progress.current += step;

    if (progress.current >= 1) {
      progress.current = 0;
      index.current += 1;
    } else {
      // Interpolação de Posição (Senoide para suavizar movimento)
      const t = (1 - Math.cos(progress.current * Math.PI)) / 2;
      
      camera.position.x = start.pos[0] + (end.pos[0] - start.pos[0]) * t;
      camera.position.y = start.pos[1] + (end.pos[1] - start.pos[1]) * t;
      camera.position.z = start.pos[2] + (end.pos[2] - start.pos[2]) * t;

      // Interpolação do Alvo (LookAt)
      currentLookAt.current[0] = start.look[0] + (end.look[0] - start.look[0]) * t;
      currentLookAt.current[1] = start.look[1] + (end.look[1] - start.look[1]) * t;
      currentLookAt.current[2] = start.look[2] + (end.look[2] - start.look[2]) * t;
      
      camera.lookAt(
        currentLookAt.current[0],
        currentLookAt.current[1],
        currentLookAt.current[2]
      );
    }
  });

  return (
    <Html fullscreen pointerEvents="none">
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 opacity-80">
        <div className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow-xl font-bold uppercase tracking-tighter text-sm animate-pulse">
          🎥 Tour Automático Ativo
        </div>
        <div className="text-pink-900 text-[10px] font-bold uppercase tracking-widest bg-white/50 px-2 py-0.5 rounded">
          Pressione ESC para Sair
        </div>
      </div>
      <div className="absolute inset-0 border-[20px] border-pink-500/10 pointer-events-none" />
    </Html>
  );
};

export default AutoTour;
