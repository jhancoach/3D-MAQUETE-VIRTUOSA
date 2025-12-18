
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';

export type ViewMode = 'aerial' | 'fps';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('aerial');
  const [showMap, setShowMap] = useState(false);
  const [isTourActive, setIsTourActive] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      // Cancelar tour com ESC
      if (e.key === 'Escape' && isTourActive) {
        setIsTourActive(false);
      }

      // Se o tour estiver ativo, ignorar outros comandos exceto ESC
      if (isTourActive) return;

      if (key === 'v') {
        const newMode = viewMode === 'aerial' ? 'fps' : 'aerial';
        setViewMode(newMode);
        setShowMap(false);
        // Reseta estado de lock ao trocar de modo
        if (newMode === 'aerial') setIsLocked(false);
      }
      if (key === 'm') {
        setShowMap(prev => !prev);
      }
      if (key === 't') {
        setIsTourActive(true);
        setShowMap(false);
        setIsLocked(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTourActive, viewMode]);

  return (
    <div className="w-full h-screen relative bg-[#fce4ec]">
      {/* Canvas 3D */}
      <Canvas 
        shadows 
        camera={{ position: [10, 10, 10], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene 
          viewMode={viewMode} 
          showMap={showMap} 
          isTourActive={isTourActive} 
          onTourFinish={() => setIsTourActive(false)}
          onLock={() => setIsLocked(true)}
          onUnlock={() => setIsLocked(false)}
        />
      </Canvas>

      {/* Overlay para entrada no modo FPS - Previne erros de Pointer Lock API */}
      {viewMode === 'fps' && !isLocked && !isTourActive && !showMap && (
        <div 
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-[1px] cursor-pointer group"
          onClick={() => {
            // O componente PointerLockControls no Scene reagirá a este clique de forma segura
          }}
        >
          <div className="bg-white/90 p-6 rounded-2xl shadow-2xl border-2 border-pink-400 text-center transform transition-transform group-hover:scale-105">
            <p className="text-pink-700 font-bold text-lg mb-2">🎮 Modo Primeira Pessoa</p>
            <p className="text-gray-600 text-sm">Clique em qualquer lugar para começar a explorar</p>
            <div className="mt-4 flex justify-center gap-4">
              <span className="bg-pink-100 px-2 py-1 rounded text-xs font-mono text-pink-800">WASD para mover</span>
              <span className="bg-pink-100 px-2 py-1 rounded text-xs font-mono text-pink-800">Mouse para olhar</span>
            </div>
          </div>
        </div>
      )}

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 z-30 p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-pink-200 pointer-events-none select-none">
        <h1 className="text-xl font-bold text-pink-700 mb-2">Virtuosa Moda Cristã</h1>
        <div className="space-y-1 text-sm text-gray-700">
          <p><span className="font-bold">Modo Atual:</span> {isTourActive ? '🎥 Tour Automático' : viewMode === 'aerial' ? 'Visão Aérea' : 'Primeira Pessoa'}</p>
          <div className="mt-4 pt-2 border-t border-pink-100 space-y-2">
            {!isTourActive && (
              <>
                <p>⌨️ <span className="bg-pink-200 px-1.5 rounded font-mono">V</span> Alternar Visualização</p>
                <p>⌨️ <span className={`px-1.5 rounded font-mono ${showMap ? 'bg-pink-500 text-white' : 'bg-pink-200'}`}>M</span> {showMap ? 'Fechar Mapa' : 'Abrir Mapa Aéreo'}</p>
                <p>⌨️ <span className="bg-pink-200 px-1.5 rounded font-mono">T</span> Iniciar Tour Automático</p>
                {viewMode === 'fps' && !showMap && (
                  <>
                    <p>⌨️ <span className="bg-pink-200 px-1.5 rounded font-mono">WASD</span> Movimentação</p>
                    {isLocked ? (
                      <p>⌨️ <span className="bg-pink-200 px-1.5 rounded font-mono">ESC</span> Liberar Mouse</p>
                    ) : (
                      <p>🖱️ Clique para capturar mouse</p>
                    )}
                  </>
                )}
                {viewMode === 'aerial' && !showMap && (
                  <p>🖱️ Clique e arraste para orbitar</p>
                )}
              </>
            )}
            {isTourActive && (
              <p>⌨️ <span className="bg-pink-600 text-white px-1.5 rounded font-mono">ESC</span> Parar Tour</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-pink-400 text-[10px] uppercase tracking-widest opacity-60">
        Design Arquitetônico Digital • Virtuosa 3D
      </div>
    </div>
  );
}
