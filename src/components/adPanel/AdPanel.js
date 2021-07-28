import adPlaceholder728x90 from "../../assets/AdPlaceholder728x90.jpg"

import adPlaceholder300x250 from "../../assets/AdPlaceholder300x250.jpg"
import styles from "./AdPanel.module.css";

const AdPanel = (props) => {

  let ad='';

  if(props.adSize===1){ad=adPlaceholder728x90}

  else{props.ad=adPlaceholder300x250}

  return (
    <div className={styles.container} style={{marginTop: props.marginTop}}>


    <img src={adPlaceholder300x250} style={{width:"300px", height:"250px", padding:"2rem"}}/>
    <img src={adPlaceholder300x250} style={{width:"300px", height:"250px", padding:"2rem"}}/>

    </div>
  );
};

export default AdPanel;