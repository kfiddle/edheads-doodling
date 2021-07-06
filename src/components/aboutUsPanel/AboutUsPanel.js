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
      style={{ transform: `translateX(${slidePosition}vw)`, background:color }}
    >
      <SecondaryNavBar />
      <TextBox className={styles.textBox}>
        <h1>Don't worry, this will have actual content soon.</h1>
        <p>Plus, it won't be so orange.</p>
      </TextBox>
    </div>
  );
};

export default AboutUsPanel;
