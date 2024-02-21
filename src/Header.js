import React from "react";
export default function Header(props)
{
    return(
        <div className="header-container">
           <h2>{props.title}</h2>
        </div>
    )
    
}