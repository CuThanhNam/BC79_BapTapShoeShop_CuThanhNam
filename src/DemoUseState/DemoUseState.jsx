import React, { useState } from 'react'

export default function DemoUseState() {
  // useState : quản lý các data thay đổi trên layout
  let [count, setCount] = useState(1);
  // useState : trả về một mảng gồm hai phần tử
  //count : giá trị hiện tại của state
  //setCount : function ~ thay đổi giá trị của count

  let handleClick = () => {
    setCount(count +1);
  }
  // sau khi setState thành công thì component sẽ render lại 
  return (
    <div>
        <h2>DemoUseState</h2>
        <h2>{count}</h2>
        <button onClick={handleClick}>Click</button>
    </div>
  );
}
