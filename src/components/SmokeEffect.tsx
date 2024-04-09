// src/SmokeEffect.jsx
import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SmokeEffect = () => {
    const smokeRef = useRef();
    const particles = 100;
    const positions = useMemo(() => {
        let positions = [];
        for (let i = 0; i < particles; i++) {
            positions.push(
                Math.random() * 0.5 - 0.25, // x
                Math.random() * 0.5, // y
                Math.random() * 0.5 - 0.25 // z
            );
        }
        return new Float32Array(positions);
    }, [particles]);

    useFrame(() => {
        if (smokeRef.current) {
            smokeRef.current.rotation.y += 0.002;
            smokeRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={smokeRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute attachObject={['attributes', 'position']} count={particles} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial attach="material" size={0.1} color="gray" transparent opacity={0.6} />
        </points>
    );
};

export default SmokeEffect;
