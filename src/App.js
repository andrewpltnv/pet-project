import React, {useState, useEffect} from 'react';
import './App.css';
import Authentication from "./Components/Authentication/Authentication";
import User from "./Components/User/User";
import Cell from "./Components/Cell/Cell";

const App = () => {

  const [user, setUser] = useState({
    nickname:""
  });

  let name;
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      name = localStorage.getItem('name');
    } catch (e) {name = "";}

    if (name) setUser({nickname: name.toString()})
  },[]);


  return (
    <div className="App">
      <main>
        <Cell id="header"><h3>Main title</h3></Cell>
        <Cell id="user--ops">{user.nickname!==""?<User nickname={user.nickname}/>:<Authentication/>}</Cell>
        <Cell id="nav"><h3>Navigation</h3></Cell>
        <Cell id="article"><h3>Article</h3></Cell>
        <Cell id="ads"><h3>Ads</h3></Cell>
        <Cell id="footer"/>
      </main>
    </div>
  );
};

export default App;
