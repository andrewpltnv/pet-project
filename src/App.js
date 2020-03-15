import React from 'react';
import './App.css';
import Cell from "./Components/Cell/Cell";
import UserSlot from "./Components/UserSlot/UserSlot";
import SocialNetworks from "./Components/SocialNetworks/SocialNetworks";
import Contacts from "./Components/Contacts/Contacts";
import Feed from "./Components/Feed/Feed";

const App = () => {
  return (
    <div className="App">
      <main>
        <Cell id="header"><h2>Andrii Platonov</h2></Cell>
        <Cell id="user--ops"><UserSlot/></Cell>
        <Cell id="info" ><Contacts/></Cell>
        <Cell id="feed"><Feed/></Cell>
        <Cell id="ads"><SocialNetworks/></Cell>
        <Cell id="footer"><h4>created by Drews 2020</h4></Cell>
      </main>
    </div>
  );
};

export default App;
