import React, {useState, useEffect} from "react";
import "./SizeChecker.css";

const SizeChecker = () => {
  const [sizeW, setSizeW] = useState(document.documentElement.offsetWidth);
  const [sizeH, setSizeH] = useState(document.documentElement.offsetHeight);

  useEffect(()=>{
    window.addEventListener('resize',() => {
      setSizeH(document.documentElement.offsetHeight);
      setSizeW(document.documentElement.offsetWidth);
    });
  });

  return(
    <div id="sizeChecker">
      <h4>{sizeH}</h4>
      <h4>{sizeW}</h4>
    </div>
  );
};

export default SizeChecker;