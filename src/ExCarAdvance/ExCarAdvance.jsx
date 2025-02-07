import React, {useState} from "react";
import ButtonColor from "./ButtonColor";

export default function ExCarAdvance() {
    let colorArr = ["red", "black", "silver", "pink", "blue", "steel"];
  //   tạo state để lưu màu sắc => tại vì khi click vào button màu sắc thì màu sắc của xe sẽ thay đổi => cần re-render => cần state

  let [color, setColor] = useState("red");
  let renderButton = () => {
    return colorArr.map((item, index) => {
      return (
        <ButtonColor key={index} color={item} handleChangeColor={setColor} />
      );
    });
  };
  return (
    <div>
      <img
        className="w-96"
        src={`./public/img_src/CarBasic/products/${color}-car.jpg`}
        alt=""
      />
      <div>{renderButton()}</div>
    </div>
  );
}
//  mục tiêu: luyện tập props và RenderWithMap

// desc: dùng map để render ra các button màu sắc từ mảng colorArr
// sau đó sử dụng useState để lưu trữ màu sắc hiện tại của xe
// component ButtonColor sẽ có 2 props: color và setColor
