import { useState } from "react";

import TextBox from "../textBox/TextBox";
import ForwardArrow from "../forwardArrow/ForwardArrow";
import LaunchingRobot from "../launchingRobot/LaunchingRobot";

import robot from "../../assets/placeholderRobot.svg";
import styles from "./Welcome.module.css";

const Welcome = (props) => {
  const [rotate, setRotate] = useState(true);
  const [degrees, setDegrees] = useState(5);
  const [upward, setUpward] = useState(false);

  const shootUp = () => {
    setUpward(true);
  };

  const launchRobot = () => {
    for (let i = 0; i < 15; i++) {
      let direction;
      i % 2 === 0 ? (direction = false) : (direction = true);
      setTimeout(() => {
        setRotate(direction);
        i > 10 ? setDegrees(16 - i) : setDegrees(5);
      }, (400 - 10 * i) * i);
    }

    setTimeout(shootUp, 2500);
  };

  return (
    <div className={styles.welcomeDiv}>
      <TextBox direction={"right"}>
        <h3>Welcome to Edheads!</h3>
        <p>
          The hottest spot north of Havana (here) At the copa (co) Copacabana
          Music and passion were always the fashion At the copa they fell in
          love Copa, Copacabana His name was Rico He wore a diamond He was
          escorted to his chair, he saw Lola dancing there And when she
          finished,he called her over But Rico went a bit to far Tony sailed
          across the bar And then the punches flew...
        </p>
        <button
          className={styles.buttonToTheGames}
          onClick={() => {
            launchRobot(0);
          }}
        >
          Explore Our Games!
        </button>
        <button className={styles.buttonToAboutUs}>
          Discover more about us!
        </button>
        <ForwardArrow />
      </TextBox>
      <div className={styles.robotDiv}>
        {/* <img src={robot} className={styles.robot}></img> */}
        <LaunchingRobot position={rotate} degrees={degrees} trajectory={upward} />
      </div>
    </div>
  );
};

export default Welcome;

// const launchRobot = (i) => {
//   let direction;
//   i % 2 === 0 ? (direction = false) : (direction = true);
//   setTimeout(() => {
//     setRotate(direction);
//     i > 10 ? setDegrees(16 - i) : setDegrees(5);
//   }, (400-(10*i)) * i);
//   i++;

//   if (i < 16) {
//     launchRobot(i);
//   }
// };
