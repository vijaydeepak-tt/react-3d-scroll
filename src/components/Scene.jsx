/* eslint-disable react/no-unknown-property */
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { Html, ScrollControls, useProgress } from '@react-three/drei';
import Robot from './Robot';
// import Angel from './Angel';
// import Phoenix from './Phoenix';

function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 2]} className='relative h-svh'>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.2} pages={4}>
          <Robot />
        </ScrollControls>
        {/* <ScrollControls damping={0.2} pages={2}>
          <Angel />
        </ScrollControls> */}
        {/* <ScrollControls damping={0.2} pages={2}>
          <Phoenix />
        </ScrollControls> */}
      </Suspense>
    </Canvas>
  );
}
