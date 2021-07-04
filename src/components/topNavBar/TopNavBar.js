import NavBarButton from "./NavBarButton";

import styles from "./TopNavBar.module.css";

const TopNavBar = (props) => {

  const clickedChoice = choice => {
    props.clickedChoice(choice);

  }

  return (
    <ul className={styles.topNavBar}>
      <NavBarButton name={"About Us"} clickedChoice={clickedChoice} />
      <NavBarButton name={"Our Games"} clickedChoice={clickedChoice}  />
      <NavBarButton name={"Get Involved"} clickedChoice={clickedChoice}  />
      <NavBarButton name={"Contact Us"} clickedChoice={clickedChoice} />
      <NavBarButton name={"Donate"} clickedChoice={clickedChoice} />
      <NavBarButton name={"Admin"} clickedChoice={clickedChoice} />

    </ul>
  );
};

export default TopNavBar;
