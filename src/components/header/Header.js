import logo from "../../assets/edheadsLogo.svg";
import clouds from "../../assets/edheadsClouds.svg";
import Airplane from "../airplane/Airplane";
import WeatherHead from "../weatherHead/WeatherHead";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.cloudsDiv}>
        <img src={logo} className={styles.logo}></img>
        {/* <Airplane /> */}
        <WeatherHead />
      </div>
    </div>
  );
};

export default Header;
