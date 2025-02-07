import React, { useState } from 'react'
import Avatar from './Avatar';

// props : là 1 object chứa các thuộc tính của component

//  dùng để truyền dữ liệu từ component cha sang component con

//  giao tiếp giữa các component
export default function DemoProp() {

    let [age, setAge] = useState(10);
  // state ở đâu thì setState ở đó
    let username = "alice";

    let handlePlusAge = () => {
    let newAge = age + 1;
    setAge(newAge);
  };
  
    console.log("Component cha");
    return (
      <div className="p-20 bg-blue-200">
        DemoProp
        {/* truyền username vào component Avatar dưới tên propsUsername */}
        <Avatar propsUsername={username} age={age} handleClick={handlePlusAge}/>
      </div>
    );
  }
