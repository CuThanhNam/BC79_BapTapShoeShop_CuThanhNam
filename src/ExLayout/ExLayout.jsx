import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import Navigation from "./Navigation";
import Navbar from "./Navbar";

export default function ExLayout() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="flex ">
        <Content />
      </div>
      <Footer />
    </div>
  );
}
