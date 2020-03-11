import React, {useState} from "react";

const CreatePost = (props) => {

  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    const temp = event.target.value;
    if (typeof temp !== 'undefined') setText(temp);
  };
  const handleSubmit = (event) => {
    let temp = {
      first: '',
      last: 'Guest',
      born: 1337,
      text: ''
    };
    if (localStorage.getItem('name') && text){
      temp.first = localStorage.getItem('name');
      console.log(text);
      temp.text = text;
    } else return null;
    window.addToDb('users',`${temp.first}`,temp);
    event.preventDefault();
  };

  return(
    <form target="_self" action="/" method="" onSubmit={handleSubmit} autoComplete="off" id="create--post">
      <textarea name="text"
             id="comment"
             className="message"
             minLength="2"
             maxLength="50"
             value={text}
             placeholder="Type your comment here"
             onChange={handleTextChange}
      />
      <input type="submit"
             value="Create"
             id="submit--comment"
             className="message"
             onSubmit={handleSubmit}
      />
    </form>
  );
};

export default CreatePost;