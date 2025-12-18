
import React from 'react';
import { OrbitControls, PointerLockControls } from '@react-three/drei';
import { ViewMode } from '../App';
import Lights from './Lights';
import StoreLayout from './StoreLayout';
import Player from './Player';
import AerialMap from './AerialMap';
import AutoTour from './AutoTour';

interface SceneProps {
  viewMode: ViewMode;
  showMap: boolean;
  isTourActive: boolean;
  onTourFinish: () => void;
  onLock: () => void;
  onUnlock: () => void;
}

const Scene: React.FC<SceneProps> = ({ 
  viewMode, 
  showMap, 
  isTourActive, 
  onTourFinish,
  onLock,
  onUnlock
}) => {
  return (
    <>
      <color attach="background" args={['#fce4ec']} />
      <fog attach="fog" args={['#fce4ec', 10, 40]} />
      
      <Lights />
      <StoreLayout />
      
      {showMap && <AerialMap />}
      
      {isTourActive && <AutoTour onFinish={onTourFinish} />}

      {!isTourActive && !showMap && (
        viewMode === 'aerial' ? (
          <OrbitControls 
            makeDefault 
            maxPolarAngle={Math.PI / 2.1} 
            minDistance={5} 
            maxDistance={25}
          />
        ) : (
          <>
            <PointerLockControls 
              makeDefault 
              onLock={onLock} 
              onUnlock={onUnlock} 
            />
            <Player />
          </>
        )
      )}
    </>
  );
};

export default Scene;
