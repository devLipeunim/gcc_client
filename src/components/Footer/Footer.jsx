"use client";
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/gcc_logo.svg";
import "../../styles/footer.css";
// import { Link } from "react-router-dom";

import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <Link href="/">
                {" "}
                <Image src={logo} alt="logo" />
              </Link>
              <p>
                Elevate your dining experience: From farm-fresh delights to
                gourmet indulgences. Discover the epitome of convenience and
                taste, delivered straight to you.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Saturday</span>
                <p>24/7 Delivery</p>
              </ListGroupItem>

              {/* <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem> */}
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                Location:<span> Lagos</span>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                Phone:<span> +234 806 446 1184, +234 811 412 0704</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                Email:<span> gourmetchefcuisine@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter Sign Up</h5>
            <p>
              Subscribe today and receive great offers and updates straight to
              your mailbox
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              &copy; {new Date().getFullYear()} Gourmet Chef Cuisine. All Rights
              Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link href="https://www.facebook.com/">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link href="https://instagram.com/prince9782prince">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link href="https://www.youtube.com/">
                  <i className="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
               
                <Link href="https://wa.whatspp/+2348064461184">
                  <i className="ri-whatsapp-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
