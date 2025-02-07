import React, {useState} from 'react'

export default function () {
    let [color, setColor] = useState("silver");
  // với hình để trong thư mục public thì sẽ dẫn đường dẫn từ file index.html
  return (
    <div>
      <h2>ExCar</h2>
      <img
        className="w-96"
        src={`./public/img_src/CarBasic/products/${color}-car.jpg`}
        alt=""
      />
      <div>
        <button
          onClick={() => {
            setColor("red");
          }}
          className="button bg-red-500"
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("black");
          }}
          className="button bg-black"
        >
          Black
        </button>
        <button 
            onClick={() => {
                setColor("Silver");
              }}
         className="button bg-gray-400">
            Silver
        </button>
      </div>
    </div>
  );
}
