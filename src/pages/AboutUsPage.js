import { Fragment } from "react";
import AboutUsPanel from "../components/aboutUsPanel/AboutUsPanel";


import SideBar from "../components/sideBar/SideBar";

const AboutUsPage = (props) => {
  return (
    <Fragment>
      <AboutUsPanel />
      <SideBar />
    </Fragment>
  );
};

export default AboutUsPage;
