import {useContext, useState} from 'react';
import playIcon from './../assets/playIcon.svg';
import stopIcon from './../assets/stopIcon.svg';
import {AnimationContext} from "../App";

const Footer = () => {

    const pctx = useContext(AnimationContext);

    const [icon, setIcon] = useState(stopIcon);


    const handleClick = () => {
        pctx.setPlay(!pctx.play);
        if (pctx.play) {
            setIcon(playIcon);
        } else {
            setIcon(stopIcon);
        }
    };

    return (
        <footer>
            <div onClick={handleClick}>
                {<img src={icon} alt="Stop Icon" width={50}/>}
            </div>
        </footer>
    );
};

export default Footer;
