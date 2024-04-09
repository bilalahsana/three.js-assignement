// src/CameraComponent.jsx
import { PerspectiveCamera } from '@react-three/drei';
import React from "react";

const Camera = () => {
    return <PerspectiveCamera makeDefault position={[0, 30, 100]} />;
};

export default Camera;
