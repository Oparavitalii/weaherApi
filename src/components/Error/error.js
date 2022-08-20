import React from "react";

import "./error.css"

const Error = () => {
    return (
        <div className="error">
        <i className="fa fa-frown-o" aria-hidden="true"></i>
        <div className="">Ooops...</div>
        <div className="">No cities matched your query.</div>
        </div>
    )
}

export default Error;