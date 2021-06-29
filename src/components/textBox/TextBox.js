

import styles from './TextBox.module.css';

const TextBox = props => {


    return <div className={`${styles.textBox} ${styles[props.extraClass]} ${styles[props.direction]}`}>{props.children}</div>

};

export default TextBox;