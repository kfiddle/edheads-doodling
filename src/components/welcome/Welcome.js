import TextBox from "../textBox/TextBox";

import robot from "../../assets/placeholderRobot.svg";
import styles from "./Welcome.module.css";

const Welcome = (props) => {
  return (
    <div className={styles.welcomeDiv}>
      {/* <div className={styles.greetingDiv}>
        <TextBox direction={"right"} />
      </div> */}

      <TextBox direction={"right"}>Hello I'm a Lorem Ipsum thingie, even though I don't really know Latin.</TextBox>
      <div className={styles.robotDiv}>
        <img src={robot} className={styles.robot}></img>
      </div>
    </div>
  );
};

export default Welcome;
