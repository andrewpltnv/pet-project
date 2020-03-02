import React from "react";
import "./Title.css";

const Title = (props) =>{

  return(
    <span id="title" className={props.className}>{props.children}</span>
  );
};

export default Title;