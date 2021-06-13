
import weatherGirl from '../../assets/weatherhead.PNG';
import styles from './WeatherHead.module.css';

const WeatherHead = () => {

    return <img src={weatherGirl} className={styles['weather-girl']}></img>


};

export default WeatherHead;