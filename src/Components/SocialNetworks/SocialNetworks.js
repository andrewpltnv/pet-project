import React from "react";
import Link from "../Link/Link";
import "./SocialNetworks.css";

const SocialNetworks = () => {
  let urls = {
    instagram: "https://www.instagram.com/andrewpltnv",
    facebook: "https://www.facebook.com/andrew.platonov.andrewpltnv",
    gitHub: "https://github.com/andrewpltn"
  };

  return(
    <div>
      {Object.keys(urls).map(id => (
        <Link url={urls[id]}><p className="p1" id={id}>{id[0].toUpperCase()+id.slice(1)}</p></Link>
      ))}
    </div>
  );
};

export default SocialNetworks;