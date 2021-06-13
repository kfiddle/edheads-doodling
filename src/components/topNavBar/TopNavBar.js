import NavBarButton from "./NavBarButton";

import styles from "./TopNavBar.module.css";

const TopNavBar = (props) => {
  return (
    <ul className={styles.topNavBar}>
      <NavBarButton name={"About Us"} />
      <NavBarButton name={"Our Games"} />
      <NavBarButton name={"Get Involved"} />
      <NavBarButton name={"Contact Us"} />
    </ul>
  );
};

export default TopNavBar;
