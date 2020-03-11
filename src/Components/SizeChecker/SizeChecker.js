import React, {useState, useEffect} from "react";
import "./SizeChecker.css";

const SizeChecker = () => {
  const [sizeW, setSizeW] = useState(document.documentElement.offsetWidth);

  useEffect(()=>{
    window.addEventListener('resize',() => {
      setSizeW(document.documentElement.offsetWidth);
    });
  });

  return(
    <>
      <h4>{sizeW}</h4>
    </>
  );
};

export default SizeChecker;