import React from "react";
import "./Scrollable.css"

function Scrollable(props) {

    return (
        <div className={`scrollable pe-3 ${props.class}`}>
            {props.children}
        </div>
    )

}

export default Scrollable