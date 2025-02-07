import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ExRenderApi() {
    // tạo state chứa dữ liệu từ api
    let [data, setData] = useState([]);
    console.log("data:", data);
  
    // gọi api lấy data từ server => setState
  let fetchApi = () => {
    axios
      .get("https://api.tiki.vn/raiden/v2/menu-config?platform=desktop")
      .then((result) => {
        // result.data.menu_block.items=> format từ server
        let list = result.data.menu_block.items;
        // setState => render lại component => chạy lại line 7
        setData(list);
      })
      .catch((err) => {});
  };

  // lấy data từ state data => render ra giao diện
  let renderList = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className="flex">
          <img className="w-10" src={item.icon_url} alt="" />
          <span> {item.text}</span>
        </div>
      );
    });
  };

  // khi load trang thì gọi api 1 lần ( vì [] rỗng )
  useEffect(() => {
    console.log("didmount");
    fetchApi();
  }, []);
   // render lần đầu
    return (
      <div>
        <button onClick={fetchApi}>Click to call api</button>
        <div className="p-5 text-sm space-y-3">{renderList()}</div>
      </div>
    );
  }

  // render lần đầu => chạy useEffect => gọi api => setState => render lại component =>  layout hiển danh sách dựa trên dữ liệu từ api

  // 1 số hook cơ bản : useEffect, useMemo, useCallback , memo

  // tìm hiểu kĩ shallow compare và deep compare

  // shallow copy vs deep copy

  // real dom vs virtual dom

  // re-render vs re-paint

  // life cycle trong react

