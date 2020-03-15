import React from "react";

const Message = (props) => {

  return(
    <div className="message">
      <p className="p1">{props.name}</p>
      <p className="p3">{props.comment}</p>
    </div>
  );
};

export default Message;