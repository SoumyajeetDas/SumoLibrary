import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import Library from './component/maindata/Library'
import PathData from './component/maindata/Paths.js'
import AppInsight from './component/maindata/AppInsightData.js'
import SqlData from './component/maindata/SqlData.js'
import Triage from './component/maindata/Triage.js'
import OpsCentral from './component/maindata/OpsCentral.js'
import Criticalsystem from './component/maindata/CriticalSystem.js';
import Content from './component/maindata/Content';
import Menus from './component/Menus';
import Sev from './component/maindata/Sev';
import AddSev from './component/maindata/AddSev';
import UpdateSev from './component/maindata/UpdateSev';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stat from './component/maindata/Stat';



function App() {
  const [toggleStyle, setToggleStyle] = useState({ backgroundColor: "white" });
  const [lightToggle, setLightToggle] = useState({ backgroundColor: "#7388ec", cursor: "pointer" });
  const [darkToggle, setDarkToggle] = useState({ backgroundColor: "white", cursor: "pointer" });
  const [cardColor, setCardColor] = useState({ backgroundColor: "white", borderRadius: "1.25rem", })
  const [navbar, setNavbar] = useState({ backgroundImage: "linear-gradient(to top right, white  , rgba(132, 139, 200, 0.18))", position: "sticky", top: "0px", zIndex: "2" })
  const [toggling, setToggling] = useState("light");


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

  const [status, setStatus] = useState(false)
  const [classname, seClassName] = useState('menulists2'); // Initially the menubar wil be kept as display: none so that it is not visible

  const show = () => {
    if (status === false) {
      setStatus(true);
      seClassName("menulists")
    }
    else {
      setStatus(false);
      seClassName("menulists1");
    }
  }


  return (

    <>
      {/* Click Outside anywhere and the menu will go. Basiaclly on clicking the backdrop the show function is executed and the 
      menu goes away */}

      {status && <div id="backdrop" onClick={show}>

      </div>}


      <BrowserRouter>
        <Navbar toggleStyle={toggleStyle} lightToggle={lightToggle} darkToggle={darkToggle} toggle={toggle} navbar={navbar} toggling={toggling} />
        <Menus classname={classname} show={show} />
        <Routes>
          <Route exact path="/" element={<Content cardColor={cardColor} />} />
          <Route exact path="/triage" element={<Triage cardColor={cardColor} />} />
          <Route exact path="/opscentral" element={<OpsCentral cardColor={cardColor} />} />
          <Route exact path="/criticalsystem" element={<Criticalsystem cardColor={cardColor} />} />
          <Route exact path="/sql" element={ <SqlData cardColor={cardColor} />} />
          <Route exact path="/paths" element={ <PathData cardColor={cardColor} />} />
          <Route exact path="/appinsight" element={ <AppInsight cardColor={cardColor} />} />
          <Route exact path="/sumo" element={ <Library cardColor={cardColor} />} />
          <Route exact path="/sev" element={ <Sev cardColor={cardColor} />} />
          <Route exact path="/addsev" element={ <AddSev cardColor={cardColor} />} />
          <Route exact path="/updatesev" element={ <UpdateSev cardColor={cardColor} />} />
          <Route exact path="/stat" element={ <Stat/>} />
        </Routes>
      </BrowserRouter>

      <div onClick={show} style={{ cursor: "pointer", position: "fixed", bottom: "10px", left: "5px", zIndex: "7", backgroundColor: "#ff7782", padding: "0px", borderRadius: "10px" }}>
        {!status && <span className="material-symbols-outlined m-2">
          arrow_forward_ios
        </span>}
        {status && <span className="material-symbols-outlined m-2">
          close
        </span>}
      </div>



    </>

  );
}

export default App;
