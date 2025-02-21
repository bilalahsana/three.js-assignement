import { PerspectiveCamera } from '@react-three/drei';

const Camera = () => {
    return <PerspectiveCamera makeDefault position={[0, 30, 100]} />;
};

export default Camera;
