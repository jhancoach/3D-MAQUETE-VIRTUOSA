
import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const MOVE_SPEED = 0.12;

const Player: React.FC = () => {
  const { camera } = useThree();
  const keys = useRef<Record<string, boolean>>({});

  useEffect(() => {
    // Initial FPS position
    camera.position.set(0, 1.7, 8);
    camera.lookAt(0, 1.7, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.code] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.code] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [camera]);

  useFrame(() => {
    // Movement logic
    const direction = { x: 0, z: 0 };
    
    // We compute camera orientation manually to move correctly relative to view
    // Since we can't import THREE, we use the camera's internal math
    const forward = [
      Math.sin(camera.rotation.y),
      Math.cos(camera.rotation.y)
    ];
    
    const right = [
      Math.sin(camera.rotation.y + Math.PI / 2),
      Math.cos(camera.rotation.y + Math.PI / 2)
    ];

    if (keys.current['KeyW']) {
      camera.position.x -= forward[0] * MOVE_SPEED;
      camera.position.z -= forward[1] * MOVE_SPEED;
    }
    if (keys.current['KeyS']) {
      camera.position.x += forward[0] * MOVE_SPEED;
      camera.position.z += forward[1] * MOVE_SPEED;
    }
    if (keys.current['KeyA']) {
      camera.position.x -= right[0] * MOVE_SPEED;
      camera.position.z -= right[1] * MOVE_SPEED;
    }
    if (keys.current['KeyD']) {
      camera.position.x += right[0] * MOVE_SPEED;
      camera.position.z += right[1] * MOVE_SPEED;
    }

    // Constraints - don't let player leave the store area too much
    camera.position.x = Math.max(-9.5, Math.min(9.5, camera.position.x));
    camera.position.z = Math.max(-9.5, Math.min(9.5, camera.position.z));
    camera.position.y = 1.7; // Constant height
  });

  return null;
};

export default Player;
