import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Menus(props) {

    const navigate = useNavigate();


    const changes = (route) => {

        //props.setStatus(false)
        props.show();
        navigate(route);

    }


    return (
        <div className={props.classname}>
            <div className="menuitems" onClick={() => changes('/triage')} >
                <span className="material-symbols-outlined">
                    plagiarism
                </span>
                {/* <Link to="/triage">Triage</Link> */}
                Triage
            </div>
            <div className="menuitems" onClick={() => changes('/')}>
                <span className="material-symbols-outlined">
                    elderly_woman
                </span>
                {/* <Link to="/">Ad. Sumo</Link> */}
                Ad. Sumo
            </div>
            <div className="menuitems" onClick={() => changes('/opscentral')}>
                <span className="material-symbols-outlined">
                    pending_actions
                </span>
                {/* <Link to="/opscentral">Ops Central</Link> */}
                Ops Central
            </div>
            <div className="menuitems" onClick={() => changes('/criticalsystem')}>
                <span className="material-symbols-outlined">
                    detector_alarm
                </span>
                {/* <Link to="/criticalsystem">Critical System</Link> */}
                Critical System
            </div>
            <div className="menuitems" onClick={() => changes('/sql')}>
                <span className="material-symbols-outlined">
                    key_visualizer
                </span>
                {/* <Link to="/sql">My Query</Link> */}
                My Query
            </div>
            <div className="menuitems" onClick={() => changes('/paths')}>
                <span className="material-symbols-outlined">
                    travel_explore
                </span>
                {/* <Link to="/paths">My Paths</Link> */}
                My paths
            </div>
            <div className="menuitems" onClick={() => changes('/appinsight')}>
                <span className="material-symbols-outlined">
                    data_thresholding
                </span>

                {/* <Link to="/appinsight">My AppInsight</Link> */}
                My AppInsight
            </div>
            <div className="menuitems" onClick={() => changes('/sumo')}>
                <span className="material-symbols-outlined">
                    grading
                </span>
                {/* <Link to="/sumo">My Sumo</Link> */}
                My Sumo
            </div>
            <div className="menuitems" onClick={() => changes('/sev')}>
                <span className="material-symbols-outlined">
                    priority_high
                </span>
                Sevs
            </div>
        </div>
    )
}
