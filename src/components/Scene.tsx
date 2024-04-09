import { Canvas } from '@react-three/fiber';
import {memo, useContext} from "react";
import Camera from "./Camera";
import Model from "./Model";
import {AccumulativeShadows, Cloud, OrbitControls, Outlines, RandomizedLight} from "@react-three/drei";
import Floor from "./Floor";
import {AnimationContext} from "../App";

const Shadows = memo(() => (
    <AccumulativeShadows
        temporal
        frames={100}
        color="#d08049"
        colorBlend={1}
        alphaTest={0.9}
        scale={3}
        opacity={0.6}
    >
        <RandomizedLight amount={10} radius={1} position={[5, 5, 5]} />
    </AccumulativeShadows>
));
const Scene = () => {

    const {play} = useContext(AnimationContext);
    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]}/>
            <color attach="background" args={["#7398cc"]}/>
            <Camera/>
            {/*<SmokeEffect />*/}
            <Model url={"/woodlouse.glb"} position={[20,0,0]} scale={[0.5,0.5,0.5]} rotation={[0, 180, 0]} play={play}/>
            <Model url={"/pseudoscorpion.glb"} position={[-20,0,0]} scale={[1,1,1]} rotation={[0, 0, 0]} play={play}/>
            <Floor/>
            <Shadows/>
            <Cloud
                position={[0,10,-100]}
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
