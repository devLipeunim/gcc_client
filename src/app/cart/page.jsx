"use client";

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
// import MetaTag from "./../MetaTag";
import "../../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../../store/shopping-cart/cartSlice";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
const Cart = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className="w-100">
      <Helmet>
        <meta name="description" content="Your Selected Item for order" />
        <title>Gourmet Chef Cuisine - Cart</title>
      </Helmet>
      {/* <MetaTag title="Cart" /> */}
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: &#8358;
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Delivery fee will be calculated at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link href="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link href="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <Image
          src={image01.url}
          width={image01?.metadata?.dimensions?.width || 300}
          height={image01?.metadata?.dimensions?.height || 200}
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">&#8358;{price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;