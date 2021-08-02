import { Fragment } from "react";
import DonatePanel from "../components/donatePanel/DonatePanel";
import SignUpPanel from "../components/signUpPanel/SignUpPanel";
import AdPanel from "../components/adPanel/AdPanel";
import Welcome from "../components/welcome/Welcome";

const WelcomePage = (props) => {
  return (
    <Fragment>
      <AdPanel marginTop={"25vh"} longAd={true} />
      <Welcome />
      <AdPanel marginTop={"0vh"} longAd={false} />
      <SignUpPanel />
      <AdPanel marginTop={"0vh"} longAd={false} />
      <DonatePanel />
    </Fragment>
  );
};

export default WelcomePage;
