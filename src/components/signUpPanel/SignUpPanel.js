
import TextBox from '../textBox/TextBox';
import paulStem from '../../assets/Paul Stem.svg'
import styles from './SignUpPanel.module.css';

const SignUpPanel = () => {

    return <div className={styles.signUpDiv}>

    <div className={styles.paulStemDiv}>
    <img src={paulStem} className={styles.paulStem}></img>

    </div>
    <TextBox direction={'left'} className={styles.textBox}></TextBox>

    </div>


};

export default SignUpPanel;