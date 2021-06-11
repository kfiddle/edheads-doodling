import { useState, useEffect } from "react";

import plane from "../../assets/plane.svg";
import styles from "./Airplane.module.css";

const Airplane = () => {
  const [planePosition, setPlanePosition] = useState(25);

  useEffect(() => {
    setTimeout(() => {
      setPlanePosition(-15);
    }, 100);
  }, []);

  return <img src={plane} className={styles.plane} style={{transform: `translateX(${planePosition}vw)`}}></img>;
};

export default Airplane;
