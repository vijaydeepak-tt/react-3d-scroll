import { useGLTF } from '@react-three/drei';
import Model from './Model';

useGLTF.preload('/angel.glb');

export default function Angel() {
  const { nodes, materials, animations, scene } = useGLTF('/angel.glb');
  return (
    <Model
      animations={animations}
      scene={scene}
      materials={materials}
      nodes={nodes}
      accesskey={'anim'}
    />
  );
}
