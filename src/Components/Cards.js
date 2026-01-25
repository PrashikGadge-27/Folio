import React from 'react'
import PropTypes, { string } from "prop-types";
export default function Cards(props) {
  return (
    <div>
      <div className="App-track">
      <div class="card custom-card" style={{ width: "18rem", height:"20rem"}}>
        {<img src={props.CardName} className="App-logo" alt={props.CardLoc} style={{ width: props.imgWidth || "100%", height: props.imgHeight || "auto" }} />}
        <div class="card-body">
            <h5 class="card-title">{props.Title}</h5>
            <p class="card-text">{props.data}</p>
            <a href={props.link} target="_blank" 
  rel="noopener noreferrer"  class="btn btn-primary">{props.btnhead}</a>
        </div>
      </div>
    </div>
    </div>
  )
}
