import React from "react";
import { listShoe } from "./DataShoe";
import ItemShoe from "./ItemShoe";

export default function ListShoe(props) {
    let renderListShoe = () => {
      return listShoe.map((shoe, index) => {
        return (
          <ItemShoe
            key={index}
            dataShoe={shoe}
            handleChangeShoe={props.setDetailShoe}
            handleAdd={props.handleAddToCart}
          />
        );
      });
    };
    return <div className="grid grid-cols-4 gap-5">{renderListShoe()}</div>;
  }