import { useGLTF } from '@react-three/drei';
import Model from './Model';

useGLTF.preload('/robot_playground.glb');

export default function Robot() {
  const { nodes, materials, animations, scene } = useGLTF(
    '/robot_playground.glb'
  );
  return (
    <Model
      animations={animations}
      scene={scene}
      materials={materials}
      nodes={nodes}
      accesskey={'Experiment'}
    />
  );
}
