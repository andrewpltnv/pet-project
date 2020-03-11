import React, {useEffect, useState} from "react";
import Authentication from "./Authentication";
import User from "./User";

const UserSlot = () => {
  const [sign, setSign] = useState(false);
  const [user, setUser] = useState({nickname:localStorage.getItem("")});
  useEffect(() => {
    if (localStorage.getItem("name")) {
      setSign(true);
      setUser({
        nickname:localStorage.getItem('name')
      });
    }
    setUser({
      nickname:localStorage.getItem('name')
    });
  },[sign]);
  const handleSingChanger = () => {
    console.log("Its work");
    setSign(prevState => !prevState);
  };
  return(
    <>
      {sign?<User nickname={user.nickname} handleSignChanger={handleSingChanger}/>:<Authentication handleSignChanger={handleSingChanger}/>}
    </>
  );
};

export default UserSlot;