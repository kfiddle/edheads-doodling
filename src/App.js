import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import SignUpPanel from './components/signUpPanel/SignUpPanel';
import DonatePanel from './components/donatePanel/DonatePanel';


import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <div style={{width: '100vw', height: '25vh', background: 'lightgray', display: 'flex', justifyContent: 'center'}}><h2 style={{color: '#d2d063', fontWeight: 'bold', fontSize: '3rem'}}>InfoGraphic will live here...</h2></div>
      <SignUpPanel />
      <DonatePanel />
    </div>
  );
}

export default App;
