import React from 'react'

export default function ItemMovie(props) {
    console.log("props:", props);
    let { tenPhim, hinhAnh } = props;
    return (
      <div k>
        <h3 className="text-center text-2xl font-bold">{tenPhim}</h3>
        <img className="w-full" src={hinhAnh} alt="" />
      </div>
    );
}
