import { useState, useEffect, useRef } from "react";
import logo from "../../assets/edheadsLogo.svg";

import Airplane from "../airplane/Airplane";
import WeatherHead from "../weatherHead/WeatherHead";
import TopNavBar from "../topNavBar/TopNavBar";

import styles from "./Header.module.css";
import SecondaryNavBar from "../secondaryNavBar/SecondaryNavBar";

const Header = (props) => {
  const [ghostHeaderHeight, setGhostHeaderHeight] = useState(0);

  const headerHeightRef = useRef();

  const clickedChoice = (choice) => {
    props.clickedChoice(choice);
  };

  useEffect(() => {
    let headerHeight = headerHeightRef.current.offsetHeight;
    setGhostHeaderHeight(headerHeight);
  }, []);

  return (
    <div className={styles.ghostHeader} style={{ height: ghostHeaderHeight }}>
      <div className={styles.header} ref={headerHeightRef}>
        <div className={styles.cloudsDiv}>
          <img src={logo} className={styles.logo}></img>
          {/* <Airplane /> */}
          {/* <WeatherHead /> */}
          <TopNavBar clickedChoice={clickedChoice} />
          
        </div>
      </div>
    </div>
  );
};

export default Header;
