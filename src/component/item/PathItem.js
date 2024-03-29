import React from 'react';
import { motion } from 'framer-motion';

export default function pathItem(props) {

    return (

        <>
            <motion.div
                whileHover={{ scale: 1.1 }}

                className="card">

                <div className="card-body" style={props.cardColor}>
                    <h1 id="card-title" className="card-title text-center mb-4">{props.data.name}</h1>

                    {props.data.path.map((q) =>
                        <div key={q}>

                            <div className="pathbody my-md-3 my-5" >
                                <pre style={{ fontSize: "20px" }} className="text-center textquery pathcontent" id={q}>{q}</pre>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}

                                    className="btn btn-sm btn-success rounded-pill pathbutton" id="copyButton" onClick={() => props.copyQuery(q, q + "id")}>
                                    <span className="material-symbols-rounded">
                                        content_copy
                                    </span>
                                    <p id={q + "id"} className="m-0">Copy Query</p>
                                </motion.button>
                            </div>

                        </div>

                    )}

                    <div>
                        <p className="card-text description"><strong>Requirements:</strong> {props.note === "" || props.note === undefined ? 'Unknown' : props.note}</p>
                    </div>

                </div>
            </motion.div>
        </>
    )
}
