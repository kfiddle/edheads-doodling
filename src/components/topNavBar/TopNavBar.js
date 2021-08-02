import { useState } from "react";
import { NavLink } from "react-router-dom";

import WeatherHead from "../weatherHead/WeatherHead";

import NavBarButton from "./NavBarButton";

import styles from "./TopNavBar.module.css";

const optionsList = [
  {
    title: "About Us",
    active: false,
  },
  {
    title: "Our Games",
    active: false,
  },
  {
    title: "Get Involved",
    active: false,
  },
  {
    title: "Contact Us",
    active: false,
  },
  {
    title: "Donate",
    active: false,
  },
];

const TopNavBar = (props) => {
  const clickedChoice = (choiceObject) => {
    props.clickedChoice(choiceObject.title);
    optionsList.forEach((option) => (option.active = false));
    choiceObject.active = true;
  };

  const displayedMenuList = optionsList.map((option) => (
    <NavBarButton optionObject={option} clickedChoice={clickedChoice} />
  ));

  return (
    <nav>
      <ul className={styles.topNavBar}>
        <li className={styles.navButton}>
          <NavLink to={"/welcome"} activeClassName={styles.active}>
            Welcome
          </NavLink>
        </li>
        <li className={styles.navButton}>
          <NavLink to={"/about-us"} activeClassName={styles.active}>About Us</NavLink>
        </li>
        <li className={styles.navButton}>
          <NavLink to={"/games"} activeClassName={styles.active}>Games</NavLink>
        </li>
        <WeatherHead />
      </ul>
    </nav>

    // <ul className={styles.topNavBar}>
    //   <NavBarButton
    //     optionObject={optionsList[0]}
    //     link={"/about-us"}
    //     clickedChoice={clickedChoice}
    //   ></NavBarButton>
    //   <NavBarButton
    //     optionObject={optionsList[1]}
    //     link={"/games"}
    //     clickedChoice={clickedChoice}
    //   />
    //   <NavBarButton
    //     optionObject={optionsList[2]}
    //     clickedChoice={clickedChoice}
    //   />
    //   <NavBarButton
    //     optionObject={optionsList[3]}
    //     clickedChoice={clickedChoice}
    //   />
    //   <WeatherHead />
    //   <NavBarButton
    //     left={true}
    //     optionObject={optionsList[4]}
    //     clickedChoice={clickedChoice}
    //   />
    // </ul>
  );
};

export default TopNavBar;
