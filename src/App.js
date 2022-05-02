
import './App.css';
import Content from './component/Content';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import Library from './component/Library.js'


function App() {
  const [toggleStyle, setToggleStyle] = useState({backgroundColor:"white"});
  const [lightToggle, setLightToggle] = useState({backgroundColor:"#7388ec", cursor:"pointer"});
  const [darkToggle, setDarkToggle] = useState({backgroundColor:"white", cursor:"pointer"});
  const [cardColor, setCardColor] = useState({backgroundColor:"white", borderRadius:"1.25rem", })
  const [navbar, setNavbar] = useState({backgroundImage: "linear-gradient(to top right, white  , rgba(132, 139, 200, 0.18))", position:"sticky", top:"0px", zIndex:"2"})
  const [toggling, setToggling] = useState("light");

  const [lib, setLib] = useState(true);
  const [content, displayContent] = useState(false);
  const [togglingButton, setTogglingButton]=useState("External")

  function Display(){
    
    if(lib===true){
      setLib(false);
      displayContent(true);
      setTogglingButton("My Library");
      
    }
    else{
      
      setLib(true);
      displayContent(false);
      setTogglingButton("External");
    }
  }



  function toggle(data){
    if(data==="light"){

      setLightToggle({backgroundColor:"#7388ec"})
      setDarkToggle({backgroundColor:"white"});
      document.body.style.backgroundColor="rgba(132, 139, 200, 0.18)"
      setToggleStyle({backgroundColor:"white"});
      setCardColor({backgroundColor:"white", borderRadius:"1.25rem"});
      setNavbar({backgroundImage: "linear-gradient(to top right, white  , rgba(132, 139, 200, 0.18))", position:"sticky", top:"0px", zIndex:"2"});
      setToggling("light");
    }
    else{

      setLightToggle({backgroundColor:"transparent", color:"white"})
      setDarkToggle({backgroundColor:"#7388ec"})
      document.body.style.backgroundColor="#181a1e"
      setToggleStyle({backgroundColor:"#424242"})
      setCardColor({backgroundColor:"black", borderRadius:"1.25rem"})
      setNavbar({backgroundImage: "linear-gradient(to top right, black, black)", position:"sticky", top:"0px", zIndex:"2"});
      setToggling("dark");


    }
  }


  return (
    <>
      <Navbar toggleStyle={toggleStyle} lightToggle={lightToggle} darkToggle={darkToggle} toggle={toggle} navbar={navbar} toggling={toggling}/>
      {content&&<Content  cardColor={cardColor}/>}

      {lib&&<Library cardColor={cardColor} />}

      <button className="btn btn-primary" style={{position:"fixed", bottom:"10px", left:"15px", zIndex:"2"}} onClick={Display}>{togglingButton}</button>
    </>

  );
}

export default App;
