import React, {useState, useEffect} from 'react';
import './App.css';
import Authentication from "./Components/Authentication/Authentication";
import User from "./Components/User/User";
import Cell from "./Components/Cell/Cell";
import SizeChecker from "./Components/SizeChecker/SizeChecker";

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
        <Cell id="header" title={<h3>Andrii Platonov</h3>}><SizeChecker/></Cell>
        <Cell id="user--ops">{user.nickname!==""?<User nickname={user.nickname}/>:<Authentication/>}</Cell>
        <Cell id="nav"><h3>Contacts</h3></Cell>
        <Cell id="article"><h3>Article</h3></Cell>
        <Cell id="ads"><h3>Ads</h3></Cell>
        <Cell id="footer"/>
      </main>
    </div>
  );
};

export default App;
