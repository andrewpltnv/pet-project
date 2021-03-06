import React from "react";
import "./User.css";
import Title from "../Title/Title";

const User = (props) => {

  function logOut(event) {
    localStorage.removeItem('name');
    props.handleSignChanger();
  }

  return(
    <div id="user--slot">
      <Title>
        <p id="user--name" className="p1">{props.nickname}</p>
      </Title>
      <button id="log--out" onClick={logOut}><i className="material-icons">
        exit_to_app
      </i></button>
    </div>
  );
};

export default User;