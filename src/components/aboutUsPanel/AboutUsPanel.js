import { useState, useEffect, Fragment } from "react";

import TextBox from "../textBox/TextBox";
import SecondaryNavBar from "../secondaryNavBar/SecondaryNavBar";
import SideBar from "../sideBar/SideBar";

import FAQ from "./faq/FAQ";
import styles from "./AboutUsPanel.module.css";

const AboutUsPanel = (props) => {
  const firstPhase =
    "linear-gradient(to Right, orangeRed, rgb(197, 110, 3), orange, orange, orange, orange )";
  const secondPhase = "orange";

  const [slidePosition, setSlidePosition] = useState(100);
  const [color, setColor] = useState(firstPhase);
  const [outerPosition, setOuterPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSlidePosition(0);
    }, 20);

    setTimeout(() => {
      setColor(secondPhase);
    }, 800);
  }, []);


  const clickHandler = () => {
    setTimeout(() => setOuterPosition(-80), 10);

  }

  return (
    <div className={styles.outermostDiv} style={{transform: `translateY(${outerPosition}vh)`}}>
      <div
        className={styles.aboutUsDiv}
        style={{
          transform: `translateX(${slidePosition}vw)`,
          background: color,
        }}
      >
        <SecondaryNavBar clickedChoice={clickHandler}/>

        <TextBox>
          <h3 className={styles.textBoxHeading}>What is Edheads?</h3>
          <p className={styles.basicText}>
            Edheads is an online educational resource that provides science and
            math games and activities that promote critival thinking. Choose
            from <p className={styles.gamesLink}>Simple Machines</p> ,{" "}
            <p className={styles.gamesLink}>Virtual Knee Surgery</p> or{" "}
            <p className={styles.gamesLink}>Stem Cell Heart Repair</p>, among
            others. All activities meet state and national standards.
          </p>

          <p className={styles.basicText}>
            We partner with corporations, universities, and school systems
            throughout the United States, which help us research, design, and
            test our activities every step of the way. Not only do teachers and
            students appreciate our free activities, Edheads has been recognized
            by almost every major award for our excellent educational content.
          </p>

          <p className={styles.basicText}>
            So, check out{" "}
            <p
              className={styles.gamesLink}
              style={{ color: "rgb(211, 166, 19)" }}
            >
              our Games
            </p>{" "}
            to dive into an activity and let the fun begin!
          </p>
        </TextBox>
      </div>

      <FAQ />
    </div>
  );
};

export default AboutUsPanel;
