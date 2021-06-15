

import { useState } from 'react';


import styles from './RocketCloud.module.css';
// import cloud from '../../../assets/edheadsClouds.svg';


const RocketCloud = (props) => {

    const {opacity, bottom, left, size} = props.details;

    return <div className={styles.rocketCloudDiv} 
    style={{opacity: opacity, bottom: `${bottom}vh`,  left: `${left}vw`, backgroundSize: `${size}%`}}></div>

};

export default RocketCloud;