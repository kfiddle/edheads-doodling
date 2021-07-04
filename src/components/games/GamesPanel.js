import GameScene from "./gameScene/GameScene";

import scene1 from '../../assets/gameScenes/simp mach bedroom.jpg';
import scene2 from '../../assets/gameScenes/simp mach tool shed.jpg';
import scene3 from '../../assets/gameScenes/simp mach garage.jpg';
import scene4 from '../../assets/gameScenes/simp mach kitchen.jpg';


import styles from "./GamesPanel.module.css";

const GamesPanel = (props) => {
  return (
    <div className={styles.gamesPanelContainer}>

      <GameScene scene={scene1} gameTitle={'First Game'} />
      <GameScene scene={scene2} gameTitle={'Second Game'} />
      <GameScene scene={scene3} gameTitle={'Third Game'}/>
      <GameScene scene={scene4} gameTitle={'Fourth Game'}/>
     
    </div>
  );
};

export default GamesPanel;
