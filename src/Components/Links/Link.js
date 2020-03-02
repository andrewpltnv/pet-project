import React from "react";

const Link = (props) => {

  return(
    <a href={props.url}
       className="Link">
      {props.children}
    </a>
  );
};

export default Link;