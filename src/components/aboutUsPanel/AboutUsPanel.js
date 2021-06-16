
import { useState, useEffect } from 'react';

import TextBox from '../textBox/TextBox';
import styles from './AboutUsPanel.module.css';


const AboutUsPanel = props => {
    const [slidePosition, setSlidePosition] = useState(100);

    useEffect(() => {
        setTimeout(()=> { setSlidePosition(0) }, 20);


    }, [])


    return <div className={styles.aboutUsDiv} style={{transform: `translateX(${slidePosition}vw)`}}>

    <TextBox className={styles.textBox}><h1>Don't worry, this will have actual content soon.</h1>
    <p>Plus, it won't be so orange.</p>
    </TextBox>


    </div>


};

export default AboutUsPanel;