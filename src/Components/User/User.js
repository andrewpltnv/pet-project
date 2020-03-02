import React from "react";
import "./User.css";
import Title from "../Title/Title";

const User = (props) => {

  function logOut(event) {
    localStorage.removeItem('name');
    localStorage.removeItem('pass');
    window.location.reload(true);
  }

  return(
    <div id="user--slot">
      <Title>
        <h3>{props.nickname}</h3>
      </Title>
      <button id="log--out" onClick={logOut}>Log out</button>
    </div>
  );
};

export default User;