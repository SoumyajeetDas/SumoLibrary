import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Menus(props) {

    const navigate = useNavigate();


    const changes = (route) => {

        props.setStatus(false)
        props.show();
        navigate(route);

    }


    return (
        <div className={props.classname}>
            <div className="menuitems p-3" onClick={() => changes('/triage')} >
                <span className="material-symbols-outlined">
                    plagiarism
                </span>
                <Link to="/triage">Triage</Link>
            </div>
            <div className="menuitems p-3" onClick={() => changes('/')}>
                <span className="material-symbols-outlined">
                    elderly_woman
                </span>
                <Link to="/">Ad. Sumo</Link>
            </div>
            <div className="menuitems p-3" onClick={() => changes('/opscentral')}>
                <span className="material-symbols-outlined">
                    pending_actions
                </span>
                <Link to="/opscentral">Ops Central</Link>
            </div>
            <div className="menuitems p-3" onClick={() => changes('/criticalsystem')}>
                <span className="material-symbols-outlined">
                    detector_alarm
                </span>
                <Link to="/criticalsystem">Critical System</Link>
            </div>
            <div className="menuitems p-3" onClick={() => changes('/sql')}>
                <span className="material-symbols-outlined">
                    key_visualizer
                </span>
                <Link to="/sql">My Query</Link>
            </div>
            <div className="menuitems p-3" onClick={() => changes('/paths')}>
                <span className="material-symbols-outlined">
                    travel_explore
                </span>
                <Link to="/paths">My Paths</Link>
            </div>
            <div className="menuitems p-3" onClick={() => changes('/appinsight')}>
                <span className="material-symbols-outlined">
                    data_thresholding
                </span>

                <Link to="/appinsight">My AppInsight</Link>
            </div>
            <div className="menuitems p-3" onClick={() => changes('/sumo')}>
                <span className="material-symbols-outlined">
                    grading
                </span>
                <Link to="/sumo">My Sumo</Link>
            </div>
        </div>
    )
}
