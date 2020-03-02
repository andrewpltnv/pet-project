import React from "react";
import Title from "../Title/Title";
import "./Cell.css";
import Link from "../Links/Link";

const Cell = (props) => {

  const id = props.id;

  switch (id) {
    case "user--ops":
      return (
        <div id={id} className="grid--cell">
          {props.children}
        </div>
      );
    case "footer":
      return (
        <div id={id} className="grid--cell">
          <Title><h3>Footer</h3></Title>
          <Link url="https://github.com/andrewpltnv"><p className="p1" id="git">GitHub Account</p></Link>
          <Link url="https://www.instagram.com/andrewpltnv/"><p className="p1" id="inst">GitHub Account</p></Link>
        </div>
      );
    default:
      return (
        <div id={id} className="grid--cell">
          <Title>{props.children}</Title>
        </div>
      );
  }

};

export default Cell;