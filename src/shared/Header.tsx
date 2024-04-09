import {useContext} from 'react';
import {ModelNameContext} from "../App";

const Header = () => {
    const {modelName} = useContext(ModelNameContext);
    return (
        <header>
            <h2>Three.js assignement </h2>
            <h2>selected model : {modelName} </h2>
        </header>
    );
};


export default Header;