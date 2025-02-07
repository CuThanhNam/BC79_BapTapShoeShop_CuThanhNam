import React, { useEffect } from "react";

export default function Card({ number }) {
    useEffect(() => {
      console.log("useEffect Card");
      return () => {
        console.log("componentWillUnmount Card");
      };
    }, []);
    return (
      <div className="p-10 bg-black text-white text-xl">
        <h2>{number}</h2>
      </div>
    );
  }