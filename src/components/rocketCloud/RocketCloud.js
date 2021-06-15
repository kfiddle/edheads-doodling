

import { useState } from 'react';


import styles from './RocketCloud.module.css';
// import cloud from '../../../assets/edheadsClouds.svg';


const RocketCloud = (props) => {

    return <div className={styles.rocketCloudDiv} style={{bottom: `${props.bottom}vh`, opacity: props.opacity}}></div>

};

export default RocketCloud;