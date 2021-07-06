import { useState, useEffect } from "react";

import TextBox from "../textBox/TextBox";
import SecondaryNavBar from "../secondaryNavBar/SecondaryNavBar";
import styles from "./AboutUsPanel.module.css";

const AboutUsPanel = (props) => {
  const firstPhase =
    "linear-gradient(to Right, orangeRed, rgb(197, 110, 3), orange, orange, orange, orange )";
  const secondPhase = "orange";

  const [slidePosition, setSlidePosition] = useState(100);
  const [color, setColor] = useState(firstPhase);

  useEffect(() => {
    setTimeout(() => {
      setSlidePosition(0);
    }, 20);

    setTimeout(() => {
      setColor(secondPhase);
    }, 800);
  }, []);

  return (
    <div
      className={styles.aboutUsDiv}
      style={{ transform: `translateX(${slidePosition}vw)`, background: color }}
    >
      <SecondaryNavBar />
      <TextBox className={styles.textBox}>
        <h1>Don't worry, this will have actual content soon.</h1>
        <p>
          Edheads is an online educational resource that provides science and
          math games and activities that promote critival thinking. Choose from{" "}
          <p className={styles.gamesLink}>Simple Machines</p> ,{" "}
          <p className={styles.gamesLink}>Virtual Knee Surgery</p> or{" "}
          <p className={styles.gamesLink}>Stem Cell Heart Repair</p>, among
          others. All activities meet state and national standards.
        </p>

        <p>
          We partner with corporations, universities, and school systems
          throughout the United States, which help us research, design, and test
          our activities every step of the way. Not only do teachers and
          students appreciate our free activities, Edheads has been recognized
          by almost every major award for our excellent educational content.
        </p>

        <p>
          So, check out our Games to dive into an activity and let the fun begin!
        </p>
      </TextBox>
    </div>
  );
};

export default AboutUsPanel;
