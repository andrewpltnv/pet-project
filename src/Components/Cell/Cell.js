import React from "react";
import Title from "../Title/Title";
import "./Cell.css";

const Cell = (props) => {

  const id = props.id;

  if (id === "user--ops") {
    return (
      <div id={id} className="grid--cell">
        {props.children}
      </div>
    );
  } else {
    return (
      <div id={id} className="grid--cell">
        {(props.title)?<Title>{props.title}</Title>:<></>}
        {props.children}
      </div>
    );
  }

};

export default Cell;