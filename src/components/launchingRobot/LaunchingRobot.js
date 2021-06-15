import robot from "../../assets/robot.PNG";

import styles from "./LaunchingRobot.module.css";

const LaunchingRobot = (props) => {
  const { position, degrees, trajectory } = props.position;

  return (
    <div
      className={styles.robotDiv}
      style={{ transform: trajectory && "translateY(-110%)" }}
    >
      <img
        src={robot}
        className={styles.launchingRobot}
        style={{
          transform: position
            ? `rotate(${degrees}deg)`
            : `rotate(-${degrees}deg)`,
        }}
      ></img>
    </div>
  );
};

export default LaunchingRobot;
