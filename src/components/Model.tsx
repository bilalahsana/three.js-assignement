// src/Model.jsx
import {useFrame, useLoader, useThree} from '@react-three/fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Text3D} from "@react-three/drei";
const Model = ({ url, position, rotation, scale ,play}) => {

    const gltf = useLoader(GLTFLoader, url);
    const modelRef = useRef();
    const clickedModelRef = useRef(null);
    const [showTextField, setShowTextField] = useState(false);
    const [modelName, setModelName] = useState(null); // Store extracted model name
    const raycaster = useThree(state => state.raycaster)
    raycaster.layers.enable(1)
    const [mixer, setMixer] = useState(null);
    const handleClick = (event) => {
        clickedModelRef.current = event.currentTarget; // Assign clicked model
        console.log(url);
        // const modelName = clickedModelRef.current.userData?.name;

        // Update state to show/hide text field and store model name
        // setShowTextField(true);
        // setModelName(modelName);
    };


    useEffect(() => {
        if (gltf.scene) {
            try {
                const newMixer = new AnimationMixer(gltf.scene);
                setMixer(newMixer);

                gltf.animations.forEach((clip) => {
                    const action = newMixer.clipAction(clip);
                    if(play)
                        action.play();
                });
            } catch (error) {
                console.error('Error creating mixer or animation actions:', error);
            }
        }
    }, [gltf.scene,play]);

    useFrame((state, delta) => {
        if (mixer) {
            mixer.update(delta); // Update animation mixer in each frame
        }
    });
    return (
        <>
            <Billboard
                follow
                position={[
                    0.5,
                    2.05,
                    0.5
                ]}
            >

            </Billboard>

            <mesh ref={modelRef} layers={1} name="archMesh" visible={true} onClick={handleClick} >
            <primitive
                ref={modelRef}
                object={gltf.scene}
                position={position}
                rotation={rotation}
                scale={scale}
            />

            </mesh>
        </>

);
};
import React, {useEffect, useRef, useState} from 'react';


import {AnimationMixer} from "three";
import {Billboard} from "@react-three/drei";

export default Model;
