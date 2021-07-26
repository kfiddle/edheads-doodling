
import weatherGirl from '../../assets/weather head.svg';
import styles from './WeatherHead.module.css';

const WeatherGirl = () => {

    return <img src={weatherGirl} className={styles['weather-girl']}></img>


};

export default WeatherGirl;