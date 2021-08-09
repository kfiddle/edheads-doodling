import { Fragment } from "react";
import AboutUsPanel from "../components/aboutUsPanel/AboutUsPanel";
// import SecondaryNavBar from '../components/secondaryNavBar/SecondaryNavBar';

import SideBar from "../components/sideBar/SideBar";

const AboutUsPage = (props) => {
  return (
    <Fragment>
      <AboutUsPanel />
      {/* <SecondaryNavBar /> */}
      <SideBar />
    </Fragment>
  );
};

export default AboutUsPage;
