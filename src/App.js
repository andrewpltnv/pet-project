import React from 'react';
import './App.css';
import Cell from "./Components/Cell/Cell";
import SizeChecker from "./Components/SizeChecker/SizeChecker";
import UserSlot from "./Components/UserSlot/UserSlot";
import SocialNetworks from "./Components/SocialNetworks/SocialNetworks";
import Contacts from "./Components/Contacts/Contacts";

const App = () => {
  return (
    <div className="App">
      <main>
        <Cell id="header"><h2>Andrii Platonov</h2></Cell>
        <Cell id="user--ops"><UserSlot/></Cell>
        <Cell id="info" ><Contacts/></Cell>
        <Cell id="feed"><h3>Feed</h3></Cell>
        <Cell id="ads"><SocialNetworks/></Cell>
        <Cell id="footer"><h3>created by Drews</h3></Cell>
      </main>
    </div>
  );
};

export default App;
