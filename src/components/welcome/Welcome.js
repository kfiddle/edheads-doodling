import TextBox from "../textBox/TextBox";
import ForwardArrow from '../forwardArrow/ForwardArrow';

import robot from "../../assets/placeholderRobot.svg";
import styles from "./Welcome.module.css";

const Welcome = (props) => {
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
        <button className={styles.buttonToTheGames}>Explore Our Games!</button>
        <button className={styles.buttonToAboutUs}>Discover more about us!</button>
        <ForwardArrow />


      </TextBox>
      <div className={styles.robotDiv}>
        <img src={robot} className={styles.robot}></img>
      </div>
    </div>
  );
};

export default Welcome;
