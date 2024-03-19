import { Suspense, useLayoutEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../CanvasLoader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  const [isSmView, setSmView] = useState(false);
  const [isXxsView, setXxsView] = useState(false);

  useLayoutEffect(() => {
    const handleMediaQueryChange = () => {
      setSmView(window.matchMedia('(max-width: 640px)').matches);
      setXxsView(window.matchMedia('(max-width: 400px)').matches);
    };

    handleMediaQueryChange();

    window.addEventListener('resize', handleMediaQueryChange);

    return () => {
      window.removeEventListener('resize', handleMediaQueryChange);
    };
  }, []);
  return (
    <primitive
      object={earth.scene}
      scale={isXxsView ? 2.7 : 2.85}
      position-y={isXxsView ? 0.7 : isSmView ? 0.4 : 0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
