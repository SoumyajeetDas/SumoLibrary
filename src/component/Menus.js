import React from 'react'
import { useNavigate, useResolvedPath, useMatch } from 'react-router-dom'
import { motion } from 'framer-motion';



const MenuVaraints1 = {
    hidden: {
        opacity: 0,
        x: -200
    },
    visible: {
        opacity: 1,
        x: 5
    }
}

const MenuVaraints2 = {
    visible: {
        opacity: 1,
        x: 5
    },
    hidden: {
        opacity: 0,
        x: -200
    }
}


export default function Menus(props) {

    const navigate = useNavigate();


    // When any nav link will be selected that particular component will be rendered and rendered link will be added the className active 
    // so that the colour gets changed from white to yellow
    const CustomLink = (props) => {
        // The resolvedPath resolves a given To value into an actual Path object with an absolute pathname. This is useful whenever 
        // you need to know the exact path for a relative To value. For example, the <Link> component uses this function to know the
        //  actual URL it points to.
        const resolvedPath = useResolvedPath(props.to);

        // Matches a path to the location. It means actually the path passed and the location(current page address) in the browser
        // is same or not. 
        // end is like exact path in the Route section of the BrowserRouter.
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });

        return (
            <div className={isActive ? "menuitems-active":"menuitems"} onClick={() => changes(`${props.to}`)}>
                <span className="material-symbols-outlined">
                    {props.symbols}
                </span>
                {/* <Link to="/">Ad. Sumo</Link> */}
                {props.value}
            </div>
        )
    }



    const changes = (route) => {

        //props.setStatus(false)
        props.show();
        navigate(route);

    }


    return (
        <motion.div
            variants={props.variant.variantName === "MenuVaraints1" ? MenuVaraints1 : MenuVaraints2}
            initial={`${props.variant.initial}`}
            animate={`${props.variant.animate}`}
            transition={{ type: "spring", stiffness: 250 }}

            className={props.classname}>

            <CustomLink symbols="plagiarism" value="Traige" to="/triage"/>
            

            <CustomLink symbols="elderly_woman" value="Ad. Sumo" to="/"/>


            <CustomLink symbols="pending_actions" value="Ops Central" to="/opscentral"/>


            <CustomLink symbols="detector_alarm" value="Critical System" to="/criticalsystem"/>


            <CustomLink symbols="key_visualizer" value="My Query" to="/sql"/>


            <CustomLink symbols="travel_explore" value="My paths" to="/paths"/>


            <CustomLink symbols="data_thresholding" value="My AppInsight" to="/appinsight"/>


            <CustomLink symbols="grading" value="My Sumo" to="/sumo"/>


            <CustomLink symbols="priority_high" value="Sevs" to="/sev"/>

        </motion.div>
    )
}
