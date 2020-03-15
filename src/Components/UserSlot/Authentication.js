import React, {useState} from "react";
import "./Authentication.css";
//const axios = require('axios').default;

const Authentication = (props) => {

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    const temp = event.target.value;
    if (typeof temp !== 'undefined') setName(temp);
  };

  const handleSubmit = (event) => {
    localStorage.setItem('name', name.toString());

    /*axios.post(
      'http://localhost:3001/register',
      {name: name}
    ).catch(r => console.error(r)) ;*/

    props.handleSignChanger();
    event.preventDefault();
  };

  return(
    <div id="user--slot">
      <form target="_self" action="" method="post" onSubmit={handleSubmit} autoComplete="on" className="main--form">
          <input name="name"
                 type="text"
                 minLength="2"
                 maxLength="12"
                 value={name}
                 placeholder="Name"
                 onChange={handleNameChange}
          />
          <input type="submit"
                 value="Sign in"
                 id="submit"
                 onSubmit={handleSubmit}
          />
      </form>
    </div>
  );
};

export default Authentication;