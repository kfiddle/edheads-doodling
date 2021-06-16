
import TextBox from '../textBox/TextBox';

import styles from './Panel.module.css';

const Panel = props => {


    return <div className={styles.panelDiv}>
        <TextBox direction={props.direction}></TextBox>

    </div>


};

export default Panel;