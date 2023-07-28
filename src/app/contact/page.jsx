"use client"
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
          marginBottom: "15px",
        }}
      >
        <span style={{ color: "#df2020" }}>Home Service</span> Also
        <span style={{ color: "#7ab256" }}>Available</span>
      </h1>
    </div>
  );
};

export default Contact;
