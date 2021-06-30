import { useState } from "react";

import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import SignUpPanel from "./components/signUpPanel/SignUpPanel";
import DonatePanel from "./components/donatePanel/DonatePanel";

import AboutUs from "./components/aboutUsPanel/AboutUsPanel";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  const [choice, setChoice] = useState("");

  const chosenPanelHandler = (choice) => {
    choice === 'About Us' && setChoice('About Us');
  };

  return (
    <div className="App">
      <Header clickedChoice={chosenPanelHandler} />
      <Welcome />
       {choice === 'About Us' && <AboutUs />}
      <div
        style={{
          width: "100vw",
          height: "25vh",
          background: "wheat",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#d2d063", fontWeight: "bold", fontSize: "3rem" }}>
          InfoGraphic will live here...
        </h2>
      </div>
      <SignUpPanel />
      <div
        style={{
          width: "100vw",
          height: "35vh",
          background: "wheat",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#d2d063", fontWeight: "bold", fontSize: "3rem" }}>
          Quotes and testimony will live here...
        </h2>
      </div>
      <DonatePanel />
     <Footer /> 
    </div>
  );
}

export default App;
