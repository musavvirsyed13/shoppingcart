import React from "react";
import Button from "./reusablecomponents/Button";
const CardInfo = ({ shoePrice, updateCart }) => {
  return (
    <div className="cardInfo">
      <p>${shoePrice}</p>
      <Button addItem={updateCart} />
    </div>
  );
};

export default CardInfo;
