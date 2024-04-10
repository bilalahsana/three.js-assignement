import { useRef, useState, useEffect, useContext } from "react";
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { ModelNameContext } from "../App";

type ModelProps = {
    name:string;
    url: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
    play: boolean;
};


const Model = ({ url, position, rotation, scale, play , name}: ModelProps) => {

    const { setModelName } = useContext(ModelNameContext);
    const gltf = useLoader(GLTFLoader, url);
    const modelRef = useRef<THREE.Mesh>(null);
    const clickedModelRef = useRef<THREE.Object3D | null>(null);
    const { raycaster } = useThree();
    raycaster.layers.enable(1);
    const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);

    const handleClick = (event: THREE.Event) => {
        const intersectedObject = event.target as THREE.Object3D;
        clickedModelRef.current = intersectedObject;
        setModelName(name);
    };

    useEffect(() => {
        if (gltf.scene) {
            const newMixer = new THREE.AnimationMixer(gltf.scene);
            setMixer(newMixer);
            gltf.animations.forEach((clip: THREE.AnimationClip) => {
                const action = newMixer.clipAction(clip);
                if (play) action.play();
            });
        }
    }, [gltf, play]);

    useFrame((_, delta) => {
        mixer?.update(delta);
    });

    return (
        <mesh ref={modelRef} layers={1} name="archMesh" visible={true} onClick={handleClick}>
            <primitive
                object={gltf.scene}
                position={position}
                rotation={rotation}
                scale={scale}
            />
        </mesh>
    );
};

export default Model;
