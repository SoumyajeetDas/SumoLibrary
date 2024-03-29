import React from 'react';
import { motion } from 'framer-motion';

export default function linkItem(props) {

    return (
        <>
            {/* Adding h-100 in the class to make all the cards of the same height */}
            <motion.div
                whileHover={{ scale: 1.1 }}

                className="card h-100 p-3" style={props.cardColor}>
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h1 id="card-title" className="card-title text-center mb-4">{props.data.name}</h1>
                    <div className="row footer">
                        <a target="_blank" rel="noreferrer" href={props.data.path} style={{ backgroundImage: "linear-gradient(to top right, #ff7782  , #7388ec)" }} className="btn btn-sm rounded-pill"><i style={{ fontSize: "18px" }}>Click Here!!</i></a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
