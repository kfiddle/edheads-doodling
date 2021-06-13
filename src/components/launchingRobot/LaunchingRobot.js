import { useState, useEffect } from "react";

import robot from "../../assets/robot.PNG";
import styles from "./LaunchingRobot.module.css";

const LaunchingRobot = (props) => {


  return (
      <div className={styles.robotDiv} style={{transform: props.trajectory && 'translateY(-110%)'}}>
    <img
      src={robot}
      className={styles.launchingRobot}
      style={{ transform: props.position ? `rotate(${props.degrees}deg)` : `rotate(-${props.degrees}deg)` }}
    ></img>
    </div>
  );
};

export default LaunchingRobot;
