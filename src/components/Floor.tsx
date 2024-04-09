const Floor = () => {

    return (
        <>
            <mesh position-y={-0.001} rotation-x={-Math.PI / 2}>
                <circleGeometry args={[100]}/>
                <meshBasicMaterial color="#f7c490"/>
            </mesh>
        </>
    );
};

export default Floor;
