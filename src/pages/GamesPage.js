import { Fragment } from "react";

import GamesPanel from "../components/games/GamesPanel";
import SideBar from "../components/sideBar/SideBar";

const GamesPage = (props) => {
  return (
    <Fragment>
      <GamesPanel />
      <SideBar />
    </Fragment>
  );
};

export default GamesPage;
