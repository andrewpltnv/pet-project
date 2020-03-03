import React, {useState} from "react";
import "./Authentication.css";
const axios = require('axios').default;

const Authentication = (props) => {

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    const temp = (event.target.value);
    if (typeof temp !== 'undefined') setName(temp);
  };

  const handleSubmit = (event) => {
    localStorage.setItem('name', name.toString());

    const response = axios.post(
      'http://localhost:3001/register',
      { name: name}
    );
    console.log(response.data);
    document.location.href = "";
    event.preventDefault();
  };

  return(
    <div id="user--slot">
      <form target="_self" action="/register" method="post" onSubmit={handleSubmit} autoComplete="on" className="main--form">
          <input name="name"
                 type="text"
                 maxLength="10"
                 value={name}
                 placeholder="Name"
                 onChange={handleNameChange}
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