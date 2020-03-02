import React from "react";
import Title from "../Title/Title";
import "./Cell.css";
import User from "../User/User";

const Cell = (props) => {

  const id = props.id;

  return(
    <div id={id} className="grid--cell">
      {
        (props.id==="user")?<User id={props.id}/>:<Title>{props.children}</Title>
      }

    </div>
  );
};

export default Cell;