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
        <Cell id="header" title={<h3>Andrii Platonov</h3>}>
          <SizeChecker/>
        </Cell>
        <Cell id="user--ops"><UserSlot/></Cell>
        <Cell id="info" ><Contacts/></Cell>
        <Cell id="article"><h3>Article</h3></Cell>
        <Cell id="ads"><SocialNetworks/></Cell>
        <Cell id="footer"><h4>created by Drews</h4></Cell>
      </main>
    </div>
  );
};

export default App;
