import TextBox from "../textBox/TextBox";
import izzy from "../../assets/Izzy Honda2.svg";
import styles from "./DonatePanel.module.css";

const DonatePanel = () => {
  return (
    <div className={styles.donatePanelDiv}>
      <div className={styles.donateContainer}>
        <TextBox direction={"right"} className={styles.textBox}>
          <p className={styles.aboutUs}>Get Involved</p>
          <h3 className={styles.welcomeTitle}>Get Involved Title</h3>

          <p className={styles.basicText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className={styles.basicText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
            luctus tempus. Nulla facilisi. Proin placerat nulla arcu.
          </p>

          <div className={styles.buttonRow}>
            <button className={styles.buttonToTheGames}>Sign Up</button>

            <div className={styles.discoverUs}>
              <button className={styles.buttonToAboutUs}>Lorem Ipsum!</button>
            </div>
          </div>
        </TextBox>

        <div className={styles.izzyDiv}>
          <img src={izzy} className={styles.izzy}></img>
        </div>
      </div>
    </div>
  );
};

export default DonatePanel;
