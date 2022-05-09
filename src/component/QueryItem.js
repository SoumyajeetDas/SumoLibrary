import React from 'react'

export default function queryItem(props) {

    return (
        <>
            <div className="card">
                <div className="card-body" style={props.cardColor}>
                    <h1 id="card-title" className="card-title text-center mb-4">{props.data.name}</h1>
                    <h5 className="text-center mb-4 textquery" id={props.data.search.queryText}>{(props.data.search.queryText)}</h5>
                    <div className="footer">
                        <p className="card-text description"><strong>Requirements:</strong> {props.data.description === "" ? 'Unknown' : props.data.description}</p>
                    
                        <button className="btn btn-sm btn-success rounded-pill" id="copyButton" onClick={() => props.copyQuery(props.data.search.queryText,props.data.search.queryText+"id")}>
                            <span className="material-symbols-rounded">
                                content_copy
                            </span>
                            <p id={props.data.search.queryText+"id"} className="m-0">Copy Query</p>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
