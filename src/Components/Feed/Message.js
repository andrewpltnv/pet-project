import React from "react";

const Message = (props) => {
  const handleDelete = () => {
    if (props.name) window.deleteFromDb('users',props.name).then(document.location.reload(true));
  };

  return(
    <div className="message">
      <p className="p1">{props.name} {props.lastName} {props.year}<button onClick={handleDelete} className="delete"><i className="material-icons">
        delete
      </i></button></p>
      <p className="p3">{props.comment}</p>
    </div>
  );
};

export default Message;