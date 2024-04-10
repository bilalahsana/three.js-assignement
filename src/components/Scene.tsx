import { Canvas } from '@react-three/fiber';
import { useContext} from "react";
import Camera from "./Camera";
import Model from "./Model";
import { Cloud, OrbitControls, Outlines} from "@react-three/drei";
import Floor from "./Floor";
import {AnimationContext} from "../App";

const Scene = ({modelsArray}) => {
    const {play} = useContext(AnimationContext);
    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]}/>
            <color attach="background" args={["#7398cc"]}/>
            <Camera/>
            <Floor/>
            {modelsArray.map((model, i) => (
                <Model
                    key={i}
                    name={model.name}
                    url={model.url}
                    position={[model.position.x, model.position.y, model.position.z]}
                    scale={[model.scale.x, model.scale.y, model.scale.z]}
                    rotation={[model.rotation.x, model.rotation.y, model.rotation.z]}
                    play={play}
                />
            ))}

            <Cloud
                position={[0,20,-100]}
                rotation={[0, 90, 0]}

                scale={20}
                segments={100}
                speed={1}
                opacity={0.9}
            />
            <OrbitControls/>
            <Outlines />
        </Canvas>
    );
};

export default Scene;
