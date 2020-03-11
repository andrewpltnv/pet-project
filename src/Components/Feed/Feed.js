import React, {useEffect, useState} from "react";
import "./Feed.css";
import Message from "./Message";
import CreatePost from "./CreatePost";

const Feed = () => {
  const [data,setData] = useState([{}]);
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem('data')));  
  }, []);
  
  return(
    <div id="board">{
        // eslint-disable-next-line array-callback-return
        data.map((value, index, array)=>{
          return <Message name={value.first} lastName={value.last} year={value.born} comment={value.text} key={index}/>
        })}
      <CreatePost/>
    </div>
  );
};

export default Feed;