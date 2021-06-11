import robot from "../../assets/placeholderRobot.svg";
import styles from "./Welcome.module.css";

const Welcome = (props) => {
  return (
    <div className={styles.welcomeDiv}>
      <img src={robot} className={styles.robot}></img>
    </div>
  );
};

export default Welcome;
