import React from "react";
import "./Scrollable.css"

function Scrollable({children}){

    return(
        <div className="scrollable pe-3">
            {children}
        </div>
    )

}

export default Scrollable