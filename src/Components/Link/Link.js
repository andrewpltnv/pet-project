import React from "react";
import "./Link.css";

const Link = (props) => {

  return(
    <a href={props.url}
       /* eslint-disable-next-line react/jsx-no-target-blank */
       target="_blank"
       className="Link"
    >
      {props.children}
    </a>
  );
};

export default Link;