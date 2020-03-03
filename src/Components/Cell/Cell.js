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
          <Link url="https://www.instagram.com/andrewpltnv/"><p className="p1" id="inst">Instagram</p></Link>
          <Link url="https://www.facebook.com/andrew.platonov.andrewpltnv"><p className="p1" id="facebook">Facebook</p></Link>
          <Link url="https://github.com/andrewpltnv"><p className="p1" id="git">GitHub</p></Link>
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