import React from 'react'
import { motion } from 'framer-motion'; 

function Navbar(props) {

    return (
        <>
            <motion.nav 
            initial={{y:-250}}
            animate={{y:0}}
            transition={{type: 'spring', stiffness:200}}
            className={`navbar navbar-expand-lg navbar-${props.toggling}`} style={props.navbar}>
                <div className="container-fluid">
                    <a id="brandname" className="navbar-brand" href="/">
                        <img src="/travel.png" className="me-2" alt="loading...." width={35} height={35} style={{ display: "inline" }}></img>
                        <h3 id="brandnaming" style={{ display: "inline" }}>FlightOps Library</h3>
                    </a>

                    <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                     
                    id="modes" className="rounded-pill p-0" style={props.toggleStyle}>
                        <span className="material-symbols-outlined me-2 rounded-pill p-1" style={props.lightToggle} onClick={() => props.toggle("light")}>
                            light_mode
                        </span>
                        <span className="material-symbols-rounded ms-2 rounded-pill p-1" style={props.darkToggle} onClick={() => props.toggle("dark")}>
                            dark_mode
                        </span>

                    </motion.div>

                </div>
            </motion.nav>
        </>
    )

}

export default Navbar
