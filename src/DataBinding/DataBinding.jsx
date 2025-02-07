import { useState } from "react";

//DataBinding ~ đưa một biến / function vào html
// thông qua dấu {}
export default function DataBinding() {
    let [isShow, setIsShow] = useState(true);
  // isShow : true => img hiện
  let handleToggleImg = () => {
    setIsShow(!isShow);
  };
  let title = "Tết 2025";
  let imgSrc =
    "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/mung_1_tet_2025_la_ngay_may_duong_lich_4e5c2a0326.jpg";
  let renderBanner = () => {
    if (isShow == true) {
        return <img className="w-40" src={imgSrc} alt="" />;
      }
  };

  return (
    <div>
      <h2>DataBinding</h2>
      <h1>{title}</h1>
      {isShow ? renderBanner() : ""}
      <button onClick={handleToggleImg} className="button hover:bg-orange-500">
        click
      </button>
    </div>
  );
}

//rfc

// renderBanner() => đúng  => gọi function chạy
// renderBanner => sai => không gọi function chạy
