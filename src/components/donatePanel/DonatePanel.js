import TextBox from "../textBox/TextBox";
import izzy from "../../assets/Izzy Honda.svg";
import styles from "./DonatePanel.module.css";

const DonatePanel = () => {
  return (
    <div className={styles.donatePanelDiv}>

      <TextBox direction={"right"} className={styles.textBox}>
        <p className={styles.getInvolved}>GET INVOLVED</p>

        <h3>Your support matters</h3>
        <button className={styles.donateButton}><p className={styles.buttonText}>Donate</p></button>
      </TextBox>

      <div className={styles.izzyDiv}>
        <img src={izzy} className={styles.izzy}></img>
      </div>
    </div>
  );
};

export default DonatePanel;
