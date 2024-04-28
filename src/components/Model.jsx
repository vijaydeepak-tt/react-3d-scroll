/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// import { Group } from 'three';

useGLTF.preload('/robot_playground.glb');

export default function Model({
  animations,
  scene,
  materials,
  nodes,
  accesskey,
}) {
  const groupRef = useRef(null);
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    // multiple actions available
    console.log(actions);
    actions[accesskey].play().paused = true;
  }, []);

  useFrame(
    () =>
      (actions[accesskey].time =
        (actions[accesskey].getClip().duration * scroll.offset) / 2)
  );

  // Scroll the page to view the animation
  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}
