'use client'
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei';
import { useEffect,useState } from "react";

export const ThreeDModel = ({ modelPath }) => {
    const { scene } = useGLTF(modelPath); 
    const [rotation,setRotation]=useState([0,Math.PI,0])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRotation(prevRotation =>[prevRotation[0],prevRotation[1]+ 0.01, prevRotation[2]])
        },100)
    },[])

    useEffect(()=>{
        let animationFrameID;

        const animate=()=>{
            setRotation(prevRotation=>[
                prevRotation[0],
                prevRotation[1]+0.01,
                prevRotation[2]
            ]);               
            animationFrameID = requestAnimationFrame(animate)//requestAnimationFrame para mais suaves e de acordo com o pc
        };
        animate();//Iniciando a animação
        return () =>cancelAnimationFrame(animationFrameID) // limpar os frames quando desmonta o componente
    },[])

    const scaleValue = 4
    
    return (
        <Canvas style={{ height: "400px", width: "100%", }}>
        <ambientLight intensity={1} /> 
        <pointLight position={[10, 10, 10]} />
        <primitive 
            object={scene} 
            position={[0,-1,0]} 
            scale={[scaleValue, scaleValue, scaleValue]}
            rotation={rotation}
            />

        <OrbitControls enableZoom={false}
                enablePan={false}
                enableRotate={true} 
                rotateSpeed={1.0} 
                maxPolarAngle={Math.PI / 2} 
                minPolarAngle={0} />
        
        </Canvas>
    );
};
