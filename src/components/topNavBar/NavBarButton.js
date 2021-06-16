
import styles from './NavBarButton.module.css';

const NavBarButton = props => {

    const clicked = () => {
        props.clickedChoice(props.name);
    }


    return <button className={styles.navButton} onClick={clicked}>{props.name}</button>


};

export default NavBarButton;