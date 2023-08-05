"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { runFireworks } from "../../lib/utils";
import "../../styles/success.css";

const Success = () => {
  useEffect(() => {
    window.scroll(0, 0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <i className="ri-shopping-bag-fill"></i>
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          We hope that you enjoy your experience with us and that you recommend
          us to your friends and family. <br />
          Thank you for choosing <b>Gourmet Chef Cuisine!!</b>
          <br />
          Thank you for considering us for your special event needs!
          <br />
          If you have any questions, please email:
          <a className="email" href="mailto:gourmetchefcuisine@gmail.com">
            <b>gourmetchefcuisine@gmail.com</b>
          </a>{" "}
          or call: <b>+234017003109</b>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
