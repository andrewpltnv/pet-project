import React from "react";
import Photo from "../../pic.png";

const Contacts = () => {
  return(
    <span id="info">
      <div><img src={Photo} alt="Me" id="photo"/></div>
      <ul>
        <li><p className="p3">Motivated, creative and hard-working engineer from Kyiv.
I have experience developing responsive and adaptive applications using React.js.
Now I want to prove myself in commercial development.</p></li>
        <li><p className="p3">andrewpltnv@gmail.com</p></li>
        <li><p className="p3">+38(068)745-36-19</p></li>
      </ul>
    </span>
  );
};

export default Contacts;