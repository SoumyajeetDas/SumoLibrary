
import './App.css';
import Content from './component/Content';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import Library from './component/Library.js'
import PathData from './component/Paths.js'
import AppInsight from './component/AppInsightData.js'
import SqlData from './component/SqlData.js'


function App() {
  const [toggleStyle, setToggleStyle] = useState({ backgroundColor: "white" });
  const [lightToggle, setLightToggle] = useState({ backgroundColor: "#7388ec", cursor: "pointer" });
  const [darkToggle, setDarkToggle] = useState({ backgroundColor: "white", cursor: "pointer" });
  const [cardColor, setCardColor] = useState({ backgroundColor: "white", borderRadius: "1.25rem", })
  const [navbar, setNavbar] = useState({ backgroundImage: "linear-gradient(to top right, white  , rgba(132, 139, 200, 0.18))", position: "sticky", top: "0px", zIndex: "2" })
  const [toggling, setToggling] = useState("light");

  const [lib, setLib] = useState(true);
  const [content, displayContent] = useState(false);
  const [togglingButton, setTogglingButton] = useState("External");
  const [pathContent, setPathContent] = useState(false);
  const [appInsightContent, setappInsightContent] = useState(false);
  const [sqlContent, setSqlContent] = useState(false);
  const [pathButton, setPathButton] = useState(true);
  const [appInsightButton, setappInsightButton] = useState(true);
  const [sqlButton, setSqlButton] = useState(true);

  function Display() {

    if (lib === true) {
      setLib(false);
      displayContent(true);
      setTogglingButton("My Library");
      setPathButton(false);
      setappInsightButton(false);
      setSqlButton(false);
      setPathContent(false);
      setappInsightContent(false)
      setSqlContent(false)
   

    }
    else {

      setLib(true);
      displayContent(false);
      setTogglingButton("External");
      setPathButton(true);
      setappInsightButton(true);
      setSqlButton(true);
      setPathContent(false);
      setappInsightContent(false)
      setSqlContent(false)
  
    }
  }

  function DisplayPath() {

    setPathContent(true);
    setappInsightContent(false)
    setSqlContent(false)
    setLib(false)
    
  }

  function DisplayAppInsight() {
    setPathContent(false);
    setappInsightContent(true)
    setSqlContent(false)
    setLib(false)

  }

  function DisplaySql() {
    setPathContent(false);
    setappInsightContent(false)
    setSqlContent(true)
    setLib(false)

  }


  function toggle(data) {
    if (data === "light") {

      setLightToggle({ backgroundColor: "#7388ec" })
      setDarkToggle({ backgroundColor: "white" });
      document.body.style.backgroundColor = "rgba(132, 139, 200, 0.18)"
      setToggleStyle({ backgroundColor: "white" });
      setCardColor({ backgroundColor: "white", borderRadius: "1.25rem" });
      setNavbar({ backgroundImage: "linear-gradient(to top right, white  , rgba(132, 139, 200, 0.18))", position: "sticky", top: "0px", zIndex: "2" });
      setToggling("light");
    }
    else {

      setLightToggle({ backgroundColor: "transparent", color: "white" })
      setDarkToggle({ backgroundColor: "#7388ec" })
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

      {lib && <Library cardColor={cardColor} />}

      {pathContent && <PathData cardColor={cardColor} />}

      {appInsightContent && <AppInsight cardColor={cardColor} />}

      {sqlContent && <SqlData cardColor={cardColor} />}

      <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "55px", left: "5px", zIndex: "2",padding:"7px" }} onClick={Display}>{togglingButton}</button>
      {pathButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "107px", left: "5px", zIndex: "2", padding:"7px" }} onClick={DisplayPath}>Paths</button>}
      {appInsightButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "5px", left: "5px", zIndex: "2", padding:"7px" }} onClick={DisplayAppInsight}>AppInsight</button>}
      {sqlButton && <button className="btn btn-sm btn-warning rounded-circle" style={{ position: "fixed", bottom: "165px", left: "5px", zIndex: "2", padding:"7px" }} onClick={DisplaySql}>Sql</button>}
    </>

  );
}

export default App;
