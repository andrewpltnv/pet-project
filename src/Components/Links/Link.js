import React from "react";

const LinkList = (props) => {

  const list = props.list;

  return(
    <div className="linkList">
      {list.map()}
    </div>
  );
};

export default LinkList;