
import { useState, useEffect } from 'react';

import styles from './AboutUsPanel.module.css';


const AboutUsPanel = props => {
    const [slidePosition, setSlidePosition] = useState(100);

    useEffect(() => {
        setTimeout(()=> { setSlidePosition(0) }, 500);


    }, [])


    return <div className={styles.aboutUsDiv} style={{transform: `translateX(${slidePosition}vw)`}}>




    </div>


};

export default AboutUsPanel;