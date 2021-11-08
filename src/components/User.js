import React from "react";

const User = (props) => {
  return (
    <div className="App">
      <h1>Melih Selçuker {props.userId}</h1>
      <p>{props.userText}</p>
    </div>
  );
};

export default User;
