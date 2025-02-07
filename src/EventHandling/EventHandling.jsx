import React from 'react'

export default function EventHandling() {
    //Hàm có tham số => arrow function bọc lại

    //Hàm không có tham số => gắn trực tiếp

    let sayHello = () => {
        console.log("Hello");
    }
    let sayHelloWithParam = (name) => {
        console.log(`Hello ${name}`)
    }
  return (
    <div>
        <h2>EventHandling</h2>
        <button className='button' onClick={sayHello}>Click - No params</button>
        <button className='button' onClick={() => sayHelloWithParam("Tommy")}>Click - With params</button>
    </div>
  )
}
