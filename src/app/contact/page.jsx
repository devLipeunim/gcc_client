"use client";
import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="w-100">
      <Helmet>
        <meta name="description" content="We are available 24/7" />
        <title>Gourmet Chef Cuisine - Contact Us</title>
      </Helmet>
      {/* <MetaTag title="Contact" /> */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: 800,
          marginTop: "40px",
        }}
      >
        <span style={{ color: "#df2020" }}>Home Service</span> Also
        <span style={{ color: "#7ab256" }}> Available</span>
      </h1>
      <p
        style={{
          textAlign: "center",
          fontWeight: 600,
          marginBottom: "15px",
        }}
      >
        <b>kindly call:</b> +234 806 446 1184, +234 811 412 0704.
      </p>
    </div>
  );
};

export default Contact;
