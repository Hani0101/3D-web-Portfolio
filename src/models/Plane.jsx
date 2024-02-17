import { useRef, useEffect } from 'react'
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ( {isRotating, ...props}) => {
  const ref = useRef();
  const {scene, animations } = useGLTF(planeScene); // loading the scene and animations
  const { actions } = useAnimations(animations, ref)// loading actions
  
  useEffect (() => {
    console.log({isRotating});
    if(isRotating){
      actions['Take 001'].play();
    }
    else{
      actions['Take 001'].stop();
    }
  },[actions, isRotating]) // dependent array: used for when a value between actions or isRotating is change, it will re-excute the values

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Plane