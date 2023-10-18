import Star from "../assets/icon-star.svg";
import React from "react";
import "./container.css";
import Buttons from "./Buttons";

function Container(props) {
  return (
    <>
      <div className="container">
        <div className="star">
          <img src={Star} alt="" />
        </div>
        <div className="texts1">
          <h1>How did we do?</h1>
          <p className="describe">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <Buttons
          setPage={props.setPage}
          button={props.button}
          setButton={props.setButton}
        />
      </div>
    </>
  );
}
export default Container;
