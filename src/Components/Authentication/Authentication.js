import React, {useState} from "react";
import "./Authentication.css";

const Authentication = (props) => {

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleNameChange = (event) => {
    const temp = (event.target.value);
    if (typeof temp !== 'undefined') setName(temp);
  };
  const handlePassChange = (event) => {
    const temp = (event.target.value);
    if (typeof temp !== 'undefined') setPass(temp);
  };

  const handleSubmit = (event) => {
    localStorage.setItem("name",name.toString());
    localStorage.setItem("pass",pass.toString());
    event.run();
  };

  return(
    <div id="user--slot">
      <form target="_self" action="" onSubmit={handleSubmit} autoComplete="on" className="main--form">
          <input name="name"
                 type="text"
                 value={name}
                 placeholder="Name"
                 onChange={handleNameChange}
          />
          <input name="password"
                 type="password"
                 value={pass}
                 placeholder="Password"
                 onChange={handlePassChange}
          />
          <input type="submit"
                 value="Log in"
                 id="submit"
                 onSubmit={handleSubmit}
          />
      </form>
    </div>
  );
};

export default Authentication;