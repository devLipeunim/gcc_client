"use client";
import React from "react";
import { useSelector } from "react-redux";
import Carts from "../UI/cart/Carts.jsx";
const Scart = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return <> {showCart && <Carts />}</>;
};

export default Scart;
