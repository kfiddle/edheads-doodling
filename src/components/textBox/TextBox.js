

import styles from './TextBox.module.css';

const TextBox = props => {


    return <div className={`${styles.textBox} ${styles[props.extraClass]} ${styles[props.direction]}`} style={{opacity: props.opacity}}>{props.children}</div>

};

export default TextBox;