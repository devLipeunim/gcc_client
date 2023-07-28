"use client";
import React, { useRef } from "react";
// import MetaTag from "./../MetaTag";
import { Helmet } from "react-helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
//import { Link } from "react-router-dom";
import Link from "next/link";
const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-100">
      <Helmet>
        <meta name="description" content="We are available 24/7" />
        <title>Gourmet Chef Cuisine - Login</title>
      </Helmet>
      {/* <MetaTag title="Signup" /> */}
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link href="/register">
                Don&#39;t have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Login;
