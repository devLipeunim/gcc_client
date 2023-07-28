"use client"
import React, { useRef } from "react";
// import MetaTag from "./../MetaTag";
import { Helmet } from "react-helmet";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import Link from "next/link";
const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-100">
      {/* <MetaTag title="Signup" /> */}
      <Helmet>
        <meta name="description" content="We are available 24/7" />
        <title>Gourmet Chef Cuisine - Register</title>
      </Helmet>
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link href="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Register;
