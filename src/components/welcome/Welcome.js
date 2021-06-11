import robot from "../../assets/placeholderRobot.svg";
import styles from "./Welcome.module.css";

const Welcome = (props) => {
  return (
    <div className={styles.welcomeDiv}>
        <div className={styles.greetingDiv}></div>
      <div className={styles.robotDiv}>
        <img src={robot} className={styles.robot}></img>
      </div>
    </div>
  );
};

export default Welcome;
