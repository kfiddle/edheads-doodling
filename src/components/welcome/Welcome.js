import { useState } from "react";

import TextBox from "../textBox/TextBox";
import ForwardArrow from "../forwardArrow/ForwardArrow";
import LaunchingRobot from "../launchingRobot/LaunchingRobot";
import RocketCloud from "../rocketCloud/RocketCloud";

import rocketTrail from "../../assets/rocketTrail.png";

import styles from "./Welcome.module.css";

const Welcome = (props) => {
  const [rotate, setRotate] = useState(true);
  const [degrees, setDegrees] = useState(0);
  const [upward, setUpward] = useState(false);

  const [rocketClicked, setRocketClicked] = useState(false);
  const [welcomeScreenOpacity, setWelcomeScreenOpacity] = useState(1);

  const [cloudDetails, setCloudDetails] = useState({
    opacity: 0,
    bottom: -115,
    left: 20,
    size: 100,
  });

  const [trailVisible, setTrailVisible] = useState(false);
  const [textBoxOpacity, setTextBoxOpacity] = useState(1);

  const shootUp = () => {
    setUpward(true);
    setTrailVisible(true);
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

  const rocketSequence = () => {
    props.gamesClicked("Explore Games");
    setRocketClicked(true);
    launchRobot(0);
    // setTextBoxOpacity(0);

    setTimeout(() => {
      setCloudDetails({ opacity: 1, bottom: 20, left: 0, size: 250 });
    }, 3000);
    setTimeout(() => {
      setWelcomeScreenOpacity(0);
    }, 3500);
  };

  return (
    <div
      className={styles.welcomeDiv}
      style={{ opacity: welcomeScreenOpacity }}
    >
      <div className={styles.welcomeContainer}>
        <TextBox direction={"right"} extraClass={"welcomeText"} opacity ={textBoxOpacity}>
          <p className={styles.aboutUs}>ABOUT US</p>
          <h3 className={styles.welcomeTitle}>
            Welcome to Edheads. Inspiring STEM careers through games!
          </h3>

          <p className={styles.basicText}>
            Our non-profit provides STEM games to empower k-12 students.
          </p>
          <p className={styles.basicText}>
            Teachers use our games to bring life to their curriculum, so
            students can learn STEM lessons with real life and professional
            examples.
          </p>

          <div className={styles.buttonRow}>
            <button
              className={styles.buttonToTheGames}
              onClick={rocketSequence}
            >
              Explore Our Games!
            </button>

            <div className={styles.discoverUs}>
              <button className={styles.buttonToAboutUs}>
                Discover more about us!
              </button>

              <ForwardArrow />
            </div>
          </div>
        </TextBox>

        <div className={styles.robotDiv}>
          <LaunchingRobot
            position={{
              position: rotate,
              degrees: degrees,
              trajectory: upward,
            }}
          />

          {/* <img
            src={rocketTrail}
            className={trailVisible ? styles.rocketTrail : styles.invisible}
          ></img> */}
        </div>

        {rocketClicked && <RocketCloud details={cloudDetails} />}
      </div>
    </div>
  );
};

export default Welcome;
