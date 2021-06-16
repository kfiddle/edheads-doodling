import { useState } from 'react';

import styles from './NavBarButton.module.css';

const NavBarButton = props => {
    const [buttonHeight, setButtonHeight] = useState(3)

    const clicked = () => {
        props.clickedChoice(props.name);
        setButtonHeight(5);
    }


    return <button className={styles.navButton} onClick={clicked} style={{height: `${buttonHeight}rem`}}>{props.name}</button>


};

export default NavBarButton;