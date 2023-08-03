"use client";

import React from "react";
import { ListGroup } from "reactstrap";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import CartItem from "../cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import "../../../styles/shopping-cart.css";
import emptyCart from "../../../assets/images/emptyCart.svg";
const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <>
              <Image src={emptyCart} alt="emptyCart" style={{width: "100%", height: "100%"}} />
              <h6 className="text-center mt-2">No item added to the cart</h6>
            </>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>&#8358;{totalAmount}</span>
          </h6>
          <button>
            <Link href="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
