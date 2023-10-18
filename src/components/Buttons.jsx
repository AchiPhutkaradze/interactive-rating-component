import React, { useState } from "react";
import "./buttons.css";
import SecondContainer from "./SecondContainer";
import Container from "./Container";

export default function Buttons(props) {
  console.log(props.button);
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="buttons">
        {numbers.map((number) => {
          return (
            <button
              className={`button ${
                number === props.button ? "background" : ""
              }`}
              onClick={() => {
                props.setButton(number);
              }}
              key={number}
            >
              {number}
            </button>
          );
        })}
      </div>
      <div className="submit-btn">
        <button
          className="submit"
          onClick={() => props.button > 0 && props.setPage("answer")}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}
