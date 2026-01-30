import { useState } from "react";
import React from 'react';
import Personal from '../Media/Personal.jpg';
//import './App.css'; // make sure to create or add these styles

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelclickupper = (event) => {
    setText(text.toUpperCase());
  }

  const handelonchange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="profile-container">
      {/* Flex container for text + image */}
      <div className="profile-header">
        {/* Left: Text content */}
        <div className="profile-text">
          <h1 className="profile-name">Prashik Gadge</h1>
          <h2 className="profile-role"><u>Associate Software Engineer</u></h2>

          <h3 className="profile-role"><u>About</u></h3>
          <p>
            Full Stack Developer with hands-on experience in ASP.NET Core, Oracle SQL,
            REST APIs, and JavaScript, <br />
            contributing to end-to-end enterprise applications in Trade Finance and Investment Management systems.
            <br />
            Strong problem-solving skills with exposure to automation and backend workflows.
          </p>

          <h3 className="profile-role"><u>Technology Stack</u></h3>
          <p>
            .NET Core MVC | Oracle PL/SQL | React JS <br />
            Python | RESTful APIs
          </p>
        </div>

        {/* Right: Image */}
        {/* <div className="profile-top-right"> */}
                  <img
            src={Personal}
            alt="Personal"
            className="profile-photo"
          />
        {/* </div> */}
      </div>
    </div>
  );
}