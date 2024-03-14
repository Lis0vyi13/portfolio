import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../CanvasLoader';

const LaptopModel = ({
  is2xlView,
  isXlView,
  isMdView,
  isSmView,
  isXsView,
  rotationZ,
}) => {
  const { scene } = useGLTF('./lenovo_ideapad/scene.gltf');
  return (
    <primitive
      object={scene}
      scale={
        isXsView
          ? 8
          : isSmView
          ? 11.5
          : isMdView
          ? 12
          : isXlView
          ? 14.7
          : is2xlView
          ? 16.75
          : 20
      }
      position={
        isXsView
          ? [0, -0.7, 0]
          : isSmView
          ? [0, -1.55, 0]
          : isMdView
          ? [0, -1.8, 0]
          : isXlView
          ? [0, -3.03, 0]
          : [-2.8, -0.4, -3.2]
      }
      rotation={
        isSmView
          ? [0, -0.245 + rotationZ, -0.4]
          : isMdView
          ? [0, -0.245 + rotationZ, -0.4]
          : isXlView
          ? [0, -0.245 + rotationZ, -0.4]
          : [-0.05, -0.7 + rotationZ, -0.3]
      }
    />
  );
};

const Laptop = ({ is2xlView, isXlView, isMdView, isSmView, isXsView }) => {
  const [time, setTime] = useState(0);

  useFrame(({ clock }) => {
    setTime(clock.getElapsedTime());
  });
  const rotationZ = Math.sin(time) * -0.05;
  return (
    <mesh>
      <hemisphereLight intensity={2.35} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.42}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.3} />
      <LaptopModel
        is2xlView={is2xlView}
        isXlView={isXlView}
        isMdView={isMdView}
        isSmView={isSmView}
        isXsView={isXsView}
        rotationZ={rotationZ}
      />
    </mesh>
  );
};
const LaptopCanvas = () => {
  const [is2xlView, set2xlView] = useState(false);
  const [isXlView, setXlView] = useState(false);
  const [isMdView, setMdView] = useState(false);
  const [isSmView, setSmView] = useState(false);
  const [isXsView, setXsView] = useState(false);

  useEffect(() => {
    const handleMediaQueryChange = () => {
      set2xlView(window.matchMedia('(max-width: 1400px)').matches);
      setXlView(window.matchMedia('(max-width: 1280px)').matches);
      setMdView(window.matchMedia('(max-width: 768px)').matches);
      setSmView(window.matchMedia('(max-width: 640px)').matches);
      setXsView(window.matchMedia('(max-width: 480px)').matches);
    };

    handleMediaQueryChange();

    window.addEventListener('resize', handleMediaQueryChange);

    return () => {
      window.removeEventListener('resize', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      style={{ height: 1200, right: 0 }}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Laptop
          is2xlView={is2xlView}
          isXlView={isXlView}
          isMdView={isMdView}
          isSmView={isSmView}
          isXsView={isXsView}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default LaptopCanvas;
