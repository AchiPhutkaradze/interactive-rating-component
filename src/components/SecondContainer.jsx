import React, { useState } from "react";
import "./secondContainer.css";
import img from "../assets/illustration-thank-you.svg";

export default function SecondContainer(props) {
  return (
    <>
      <div className="second-container">
        <div className="img-div">
          <img id="terminal" src={img}></img>
          <div className="rating-div">
            You selected <span id="rating-number">{props.button}</span> out of 5
          </div>
        </div>
        <div className="texts">
          <h2>Thank you!</h2>
          <p className="last">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
}
