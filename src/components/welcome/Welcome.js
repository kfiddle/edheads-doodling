import { useState } from "react";

import TextBox from "../textBox/TextBox";
import ForwardArrow from "../forwardArrow/ForwardArrow";
import LaunchingRobot from "../launchingRobot/LaunchingRobot";
import RocketCloud from "../rocketCloud/RocketCloud";

import rocketTrail from '../../assets/rocketTrail.png';

import styles from "./Welcome.module.css";

const Welcome = (props) => {
  const [rotate, setRotate] = useState(true);
  const [degrees, setDegrees] = useState(0);
  const [upward, setUpward] = useState(false);

  const [rocketClicked, setRocketClicked] = useState(false);
  const [welcomeScreenOpacity, setWelcomeScreenOpacity] = useState(1)

  const [cloudDetails, setCloudDetails] = useState({
    opacity: 0,
    bottom: -115,
    left: 20,
    size: 100,
  });

  const [trailVisible, setTrailVisible] = useState(false)

  const shootUp = () => {
    setUpward(true);
    setTrailVisible(true)
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

  const cloudFloatUp = () => {
    setCloudDetails({ opacity: 1, bottom: 20, left: 0, size: 250 });
  };

  const blackOut = () => {
    setWelcomeScreenOpacity(0)
  }

  return (
    <div className={styles.welcomeDiv} style={{opacity: welcomeScreenOpacity}}>
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
            setRocketClicked(true);
            launchRobot(0);
            setTimeout(cloudFloatUp, 3000);
            setTimeout(blackOut, 3500);
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
        <LaunchingRobot
          position={{ position: rotate, degrees: degrees, trajectory: upward }}
        />

        <img src={rocketTrail} className={trailVisible? styles.rocketTrail: styles.invisible} ></img>
      </div>

      {rocketClicked && <RocketCloud details={cloudDetails} />}
    </div>
  );
};

export default Welcome;
