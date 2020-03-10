import React from "react";

const Link = (props) => {

  const style = {
    "width": "auto",
    "min-width":"115px",
    "margin": "5px 15px",
    "background-color": "#4e4e4e",
    "border": "#4e4e4e solid 2px",
    "border-radius": "3%",
    "height": "78%",
    "text-shadow": "#f00dd74f 1px 1px 2px, #5b29779c 0px 0px 1em"
  };

  return(
    <a href={props.url}
       className="Link"
       style={style}
    >
      {props.children}
    </a>
  );
};

export default Link;