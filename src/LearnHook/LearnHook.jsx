import React, { useEffect, useState } from "react";
import card from "./card";
/**
useEffect: componentDidMount, componentDidUpdate, componentWillUnmount
componentDidMount : component đã được render lần đầu tiên => dependency = [] => chỉ chạy 1 lần duy nhất sau lần render đầu tiên
componentDidUpdate : component đã được render lại => dependency = [variable] => có thể chạy nhiều lần
componentWillUnmount : component sẽ bị xóa khỏi layout => return function => chạy 1 lần duy nhất

useEffect(callback, [dependency])
callback : function tuỳ ý
dependency : array chứa các biến, khi dependency thay đổi thì useEffect sẽ chạy lại
 */

export default function LearnHook() {
  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, []);
  console.log("render");

  return (
    <div>
      <h1>Learn Hook</h1>
      <h1>{number}</h1>
      <button className="bg-blue-500" onClick={() => setNumber(number + 1)}>
        Increase
      </button>
      {number < 5 && <card number={number} />}
    </div>
  );
}