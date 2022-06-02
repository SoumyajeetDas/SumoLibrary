import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import Library from './component/Library.js'
import PathData from './component/Paths.js'
import AppInsight from './component/AppInsightData.js'
import SqlData from './component/SqlData.js'
import Triage from './component/Triage.js'
import OpsCentral from './component/OpsCentral.js'
import Criticalsystem from './component/CriticalSystem.js';
import Content from './component/Content.js';

function App() {
  const [toggleStyle, setToggleStyle] = useState({ backgroundColor: "white" });
  const [lightToggle, setLightToggle] = useState({ backgroundColor: "#7388ec", cursor: "pointer" });
  const [darkToggle, setDarkToggle] = useState({ backgroundColor: "white", cursor: "pointer" });
  const [cardColor, setCardColor] = useState({ backgroundColor: "white", borderRadius: "1.25rem", })
  const [navbar, setNavbar] = useState({ backgroundImage: "linear-gradient(to top right, white  , rgba(132, 139, 200, 0.18))", position: "sticky", top: "0px", zIndex: "2" })
  const [toggling, setToggling] = useState("light");

  const [lib, setLib] = useState(false);
  const [content, displayContent] = useState(true);
  const [triageContent, displayTriageContent] = useState(false);
  const [opsCentralContent, displayOpsCentralContent] = useState(false);
  const [criticalsystem, displayCriticalSystem] = useState(false);
  const [triageButton, setTriageButton] = useState(true);
  const [togglingButton, setTogglingButton] = useState("My Library");
  const [pathContent, setPathContent] = useState(false);
  const [appInsightContent, setappInsightContent] = useState(false);
  const [sqlContent, setSqlContent] = useState(false);
  const [sumoContent, setSumoContent] = useState(false);
  const [pathButton, setPathButton] = useState(false);
  const [appInsightButton, setappInsightButton] = useState(false);
  const [sqlButton, setSqlButton] = useState(false);
  const [sumoButton, setSumoButton] = useState(false);


  function Display() {
    if (content === true) {
      setLib(true);
      displayContent(false);
      setTogglingButton("External");
      setTriageButton(false);
      displayCriticalSystem(false);
      displayTriageContent(false);
      displayOpsCentralContent(false);
      setPathButton(true);
      setappInsightButton(true);
      setSqlButton(true);
      setSumoButton(true);
      setPathContent(false);
      setappInsightContent(false)
      setSqlContent(false)
      setSumoContent(false);

    }
    else {

      setLib(false);
      displayContent(true);
      setTogglingButton("My Library");
      setTriageButton(true);
      setPathButton(false);
      setappInsightButton(false);
      setSqlButton(false);
      setSumoButton(false);
      setPathContent(false);
      setappInsightContent(false)
      setSqlContent(false)
      setSumoContent(false);

    }
  }

  function DisplayTriage() {

    displayTriageContent(true)
    displayContent(false);
    displayOpsCentralContent(false)
    displayCriticalSystem(false);

  }

  function DisplayOpsCentral() {

    displayOpsCentralContent(true);
    displayContent(false);
    displayTriageContent(false);
    displayCriticalSystem(false);

  }

  function DisplayCriticalSystem() {

    displayCriticalSystem(true);
    displayOpsCentralContent(false);
    displayContent(false);
    displayTriageContent(false);

  }

  function DisplayPath() {

    setPathContent(true);
    setappInsightContent(false)
    setSqlContent(false)
    setLib(false)
    setSumoContent(false);

  }

  function DisplayAppInsight() {
    setPathContent(false);
    setappInsightContent(true)
    setSqlContent(false)
    setLib(false)
    setSumoContent(false);

  }

  function DisplaySql() {
    setPathContent(false);
    setappInsightContent(false)
    setSqlContent(true)
    setLib(false)
    setSumoContent(false);

  }

  function DisplaySumo() {
    setPathContent(false);
    setappInsightContent(false)
    setSqlContent(false)
    setLib(false)
    setSumoContent(true);
  }

  function toggle(data) {
    if (data === "light") {

      setLightToggle({ backgroundColor: "#7388ec", cursor: "pointer" })
      setDarkToggle({ backgroundColor: "white", cursor: "pointer" });
      document.body.style.backgroundColor = "rgba(132, 139, 200, 0.18)"
      setToggleStyle({ backgroundColor: "white" });
      setCardColor({ backgroundColor: "white", borderRadius: "1.25rem" });
      setNavbar({ backgroundImage: "linear-gradient(to top right, white  , rgba(132, 139, 200, 0.18))", position: "sticky", top: "0px", zIndex: "2" });
      setToggling("light");
    }
    else {

      setLightToggle({ backgroundColor: "transparent", color: "white", cursor: "pointer" })
      setDarkToggle({ backgroundColor: "#7388ec", cursor: "pointer" })
      document.body.style.backgroundColor = "#181a1e"
      setToggleStyle({ backgroundColor: "#424242" })
      setCardColor({ backgroundColor: "black", borderRadius: "1.25rem" })
      setNavbar({ backgroundImage: "linear-gradient(to top right, black, black)", position: "sticky", top: "0px", zIndex: "2" });
      setToggling("dark");


    }
  }


  return (

    <>
      <Navbar toggleStyle={toggleStyle} lightToggle={lightToggle} darkToggle={darkToggle} toggle={toggle} navbar={navbar} toggling={toggling} />

      {content && <Content cardColor={cardColor} />}

      {criticalsystem && <Criticalsystem cardColor={cardColor} />}

      {triageContent && <Triage cardColor={cardColor} />}

      {opsCentralContent && <OpsCentral cardColor={cardColor} />}

      {lib && <Library cardColor={cardColor} />}

      {pathContent && <PathData cardColor={cardColor} />}

      {appInsightContent && <AppInsight cardColor={cardColor} />}

      {sqlContent && <SqlData cardColor={cardColor} />}

      {sumoContent && <Library cardColor={cardColor} />}

      <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "107px", left: "5px", zIndex: "2", padding: "7px" }} onClick={Display}>{togglingButton}</button>
      {triageButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "155px", left: "5px", zIndex: "2", padding: "7px" }} onClick={DisplayTriage}>Triage</button>}
      {triageButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "58px", left: "5px", zIndex: "2", padding: "7px" }} onClick={DisplayOpsCentral}>Ops Central</button>}
      {triageButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "10px", left: "5px", zIndex: "2", padding: "7px" }} onClick={DisplayCriticalSystem}>Critical System</button>}


      {pathButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "160px", left: "5px", zIndex: "2", padding: "7px" }} onClick={DisplayPath}>Paths</button>}
      {appInsightButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "55px", left: "5px", zIndex: "2", padding: "7px" }} onClick={DisplayAppInsight}>AppInsight</button>}
      {sqlButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "210px", left: "5px", zIndex: "2", padding: "7px" }} onClick={DisplaySql}>Sql</button>}
      {sumoButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "5px", left: "5px", zIndex: "2", padding: "7px" }} onClick={DisplaySumo}>Sumo Query</button>}
    </>

  );
}

export default App;
