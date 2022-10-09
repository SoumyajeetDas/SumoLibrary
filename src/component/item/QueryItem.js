import React from 'react'
import { motion } from 'framer-motion'

export default function queryItem(props) {

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="card">
                <div className="card-body" style={props.cardColor}>
                    <h1 id="card-title" className="card-title text-center mb-4">{props.data.name}</h1>
                    <h5 className="text-center mb-4 textquery" id={props.data.search.queryText}>{(props.data.search.queryText)}</h5>
                    <div className="footer">
                        <p className="card-text description"><strong>Requirements:</strong> {props.data.description === "" ? 'Unknown' : props.data.description}</p>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="btn btn-sm btn-success rounded-pill" id="copyButton" onClick={() => props.copyQuery(props.data.search.queryText, props.data.search.queryText + "id")}>
                            <span className="material-symbols-rounded">
                                content_copy
                            </span>
                            <p id={props.data.search.queryText + "id"} className="m-0">Copy Query</p>
                        </motion.button>
                    </div>

                </div>
            </motion.div>
        </>
    )
}
