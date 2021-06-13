
import styles from './NavBarButton.module.css';

const NavBarButton = props => {

    return <button className={styles.navButton}>{props.name}</button>


};

export default NavBarButton;