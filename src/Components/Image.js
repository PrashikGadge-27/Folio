import React from 'react'
import PropTypes, { string } from "prop-types";
export default function Images(props) {
  return (
        
        <img src={props.source} alt={props.imageloc} className="slider-img" />
      
    )
  
}


