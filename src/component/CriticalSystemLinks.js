import React from 'react'

export default function linkItem(props) {

    return (
        <>
            <div className="card h-100 p-3" style={props.cardColor}>
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h1 id="card-title" className="card-title text-center mb-4">{props.data.name}</h1>
                    <div className="row footer">
                        <p className="card-text description"><strong>SMEs:</strong> {props.data.smes}</p>
                        <p className="card-text description"><strong>Vendors:</strong> {props.data.vendors}</p>
                        <a target="_blank" rel="noreferrer" href={props.data.path} style={{ backgroundImage: "linear-gradient(to top right, #ff7782  , #7388ec)" }} className="btn btn-sm rounded-pill"><i style={{ fontSize: "18px" }}>Click Here!!</i></a>
                    </div>
                </div>
            </div>
        </>
    );
}
