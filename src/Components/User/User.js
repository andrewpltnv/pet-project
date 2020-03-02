import React from "react";
import "./User.css";

const User = (props) => {

  return(
    <div id="user--slot">
      <h3>{props.nickname}</h3>
    </div>
  );
};

export default User;