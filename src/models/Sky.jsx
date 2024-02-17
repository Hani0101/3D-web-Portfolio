import { useGLTF } from "@react-three/drei"
import {useRef} from 'react'
import { useFrame } from "@react-three/fiber"
import skyScene from "../assets/3d/sky.glb"

const Sky = ({ isRotating }) => {
    {/*instead of building every 3d model from scratch we use useGLTF to transport a model into our programm */}
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame ((_,delta) => {
      if(isRotating){
        skyRef.current.rotation.y += 0.15 * delta
      }
    })
    return (
    <mesh ref = {skyRef}>
    {/*mesh: a 3D building block for creating shapes and scenes */}

      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky