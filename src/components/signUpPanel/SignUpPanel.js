import TextBox from "../textBox/TextBox";
import paulStem from "../../assets/Paul Stem2.svg";
import styles from "./SignUpPanel.module.css";

const SignUpPanel = () => {
  return (
    <div className={styles.signUpDiv}>

<div className={styles.signUpContainer}>
      
      <div className={styles.paulStemDiv}>
        <img src={paulStem} className={styles.paulStem}></img>
      </div>
      
      <TextBox direction={"left"} className={styles.textBox}>
      <p className={styles.aboutUs}>SIGN UP</p>
          <h3 className={styles.welcomeTitle}>
            Made for kids; Used by teachers
          </h3>

          <p className={styles.basicText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <p className={styles.basicText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper luctus tempus. Nulla facilisi. Proin placerat nulla arcu. 
          </p>

          <div className={styles.buttonRow}>
            <button
              className={styles.buttonToTheGames}
            >
              Sign Up
            </button>

            <div className={styles.discoverUs}>

              <button className={styles.buttonToAboutUs}>
                Lorem Ipsum!
              </button>

            </div>
            
          </div>
      </TextBox>

      </div>


    </div>
  );
};

export default SignUpPanel;
