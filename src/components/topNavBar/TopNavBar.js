import { useState } from "react";
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

  return <ul className={styles.topNavBar}> 
  
    <NavBarButton optionObject={optionsList[0]} clickedChoice={clickedChoice}/>
    <NavBarButton optionObject={optionsList[1]} clickedChoice={clickedChoice}/>
    <NavBarButton optionObject={optionsList[2]} clickedChoice={clickedChoice}/>
    <NavBarButton optionObject={optionsList[3]} clickedChoice={clickedChoice}/>
    <WeatherHead />
    <NavBarButton optionObject={optionsList[4]} clickedChoice={clickedChoice}/>
  
  
  
  </ul>;
};

export default TopNavBar;
