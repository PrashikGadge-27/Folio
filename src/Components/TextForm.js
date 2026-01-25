import { useState } from "react";
import React, { Component } from 'react'
import Personal from '../Media/Personal.jpg';

import PropTypes, { string } from "prop-types";
//import React from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handelclickupper=(event)=>{
        setText(text.toUpperCase());
    }
    const handelonchange = (event) => {
        setText(event.target.value);
    }

  return (
    <>
    {/* <div>
        <h4>{props.heading}</h4>
        <div class="mb-3">
        <textarea class="form-control" value={text} id="exampleFormControlTextarea1" onChange={handelonchange} placeholder="Enter text here" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handelclickupper}>Upper</button>
    </div>
    <div className="container my-3">
        <h2>{text.split(" ").length} words and {text.length} characters.</h2>
        
    </div> */}
   <div className="profile-container">
  <h1 className="profile-name">Prashik Gadge</h1>
  <h2 className="profile-role"> <u>Associate Software Engineer</u></h2>

  <br />

  <h3 className="profile-role"> <u>About </u></h3>

  <p className="profile-text">
    Full Stack Developer with hands-on experience in ASP.NET Core, Oracle SQL,
    REST APIs, and JavaScript, <br /> contributing to end-to-end enterprise
    applications in Trade Finance and Investment Management systems.
    <br />
    Strong problem-solving skills with exposure to automation and backend workflows.
  </p>

  <br />

  <h3 className="profile-role"> <u> Technology Stack</u></h3>

  <p className="profile-text">
    .NET Core MVC | Oracle PL/SQL | React JS <br />
    Python | RESTful APIs
  </p>
  <br />
  <br />
 <img
    src={Personal} // import your image correctly
    alt="Personal"
    className="profile-top-right"
  />
</div>

    </>
  )
}

