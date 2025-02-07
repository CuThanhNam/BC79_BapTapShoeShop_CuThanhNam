import React from 'react'

export default function Avatar(props) {
  // props : object chứa các data được truyền từ component cha vào
  console.log("Component con", props);
  return (
    <div className="p-20 bg-red-300">
      <h2>Avatar</h2>

      <h3>Username : {props.propsUsername}</h3>

      <h3>Age : {props.age}</h3>
      <button onClick={props.handleClick} className='button'>Plus age</button>
    </div>
  );
}
