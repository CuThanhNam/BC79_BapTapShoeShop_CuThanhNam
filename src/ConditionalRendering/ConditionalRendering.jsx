import React, { useState } from "react";
// render dựa trên điều kiện
export default function ConditionalRendering() {
  let [isLogin, setIsLogin] = useState(false);
  //let isLogin = true;

  if (isLogin == false) {
    // chưa đăng nhập
    return (
      <div>
        <button
          onClick={() => {
            setIsLogin(true);
          }}
        >
          Login
        </button>
        <p>chưa đăng nhập</p>
      </div>
    );
  } else {
    // đã đăng nhập
    return (
      <div>
        <button
          onClick={() => {
            setIsLogin(false);
          }}
        >
          Logout
        </button>
        <p>đã đăng nhập</p>
      </div>
    );
  }
  return <div></div>;
}
