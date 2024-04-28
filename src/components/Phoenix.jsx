import { useGLTF } from '@react-three/drei';
import Model from './Model';

useGLTF.preload('/phoenix_bird.glb');

export default function Phoenix() {
  const { nodes, materials, animations, scene } = useGLTF('/phoenix_bird.glb');
  return (
    <Model
      animations={animations}
      scene={scene}
      materials={materials}
      nodes={nodes}
      accesskey={'Take 001'}
    />
  );
}
