"use client";

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import Link from "next/link";
import Image from "next/image";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import featureImg01 from "../assets/images/order.png";
import featureImg02 from "../assets/images/service-01.png";
import featureImg03 from "../assets/images/smile.png";
import products from "../assets/data/products.jsx";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
const featureData = [
  {
    title: "1. Order from your device",
    imgUrl: featureImg01,
  },

  {
    title: "2. Fast delivery",
    imgUrl: featureImg02,
  },
  {
    title: "3. You enjoy, you repeat",
    imgUrl: featureImg03,
  },
];
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const [category, setCategory] = useState("Rice");
  const [allProducts, setAllProducts] = useState([]);
  const [hotStew, setHotStew] = useState([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        // Set up the query to fetch the food data from Sanity
        const products = `*[_type == "food"]`;
        const query = `*[_type == "food" && category == "Stew"][0...4]{
        _id,
        title,
        price,
        "image01": image01.asset->{
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },  
        category,
        desc
      }`;

        // Fetch the data using the query
        const productFoods = await client.fetch(products);
        console.log(productFoods);
        const foods = await client.fetch(query);
        console.log(foods);

        // Update the state with the fetched food data
        setHotStew(foods);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };
    fetchFoodData();
    // const filteredSoup = products.filter(
    //   (item) => item.category === "Soup & Swallow"
    // );
    // const sliceSoup = filteredSoup.slice(4, 8);
    // setHotStew(foods);
  }, []);

  useEffect(() => {
    if (category === "Rice") {
      const fetchFoodData = async () => {
        try {
          // Set up the query to fetch the food data from Sanity
          const query = `*[_type == "food" && category == "Rice"][0...4]{
          _id,
          title,
          price,
          "image01": image01.asset->{
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },  
          category,
          desc
        }`;

          // Fetch the data using the query
          const foods = await client.fetch(query);
          console.log(foods);

          // Update the state with the fetched food data
          setAllProducts(foods);
        } catch (error) {
          console.error("Error fetching food data:", error);
        }
      };
      fetchFoodData();
      // const filteredProducts = products.filter(
      //   (item) => item.category === "Rice"
      // );
      // const popularRice = filteredProducts.slice(0, 4);
      // setAllProducts(popularRice);
    }

    if (category === "Snacks") {
      // Function to fetch food data from Sanity
      const fetchFoodData = async () => {
        try {
          // Set up the query to fetch the food data from Sanity
          const query = `*[_type == "food" && category == "Snacks"][0...4]{
          _id,
          title,
          price,
          "image01": image01.asset->{
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },  
          category,
          desc
        }`;

          // Fetch the data using the query
          const foods = await client.fetch(query);
          console.log(foods);

          // Update the state with the fetched food data
          setAllProducts(foods);
        } catch (error) {
          console.error("Error fetching food data:", error);
        }
      };
      fetchFoodData();
    }

    if (category === "Soup & Swallow") {
      const fetchFoodData = async () => {
        try {
          // Set up the query to fetch the food data from Sanity
          const query = `*[_type == "food" && category == "Soup & Swallow"][0...4]{
          _id,
          title,
          price,
          "image01": image01.asset->{
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },  
          category,
          desc
        }`;

          // Fetch the data using the query
          const foods = await client.fetch(query);
          console.log(foods);

          // Update the state with the fetched food data
          setAllProducts(foods);
        } catch (error) {
          console.error("Error fetching food data:", error);
        }
      };
      fetchFoodData();
      // const filteredProducts = products.filter(
      //   (item) => item.category === "Soup & Swallow"
      // );
      // const popularSoup = filteredProducts.slice(0, 4);
      // setAllProducts(popularSoup);
    }

    if (category === "Sides") {
      const fetchFoodData = async () => {
        try {
          // Set up the query to fetch the food data from Sanity
          const query = `*[_type == "food" && category == "Sides"][0...3]{
          _id,
          title,
          price,
          "image01": image01.asset->{
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },  
          category,
          desc
        }`;

          // Fetch the data using the query
          const foods = await client.fetch(query);
          console.log(foods);

          // Update the state with the fetched food data
          setAllProducts(foods);
        } catch (error) {
          console.error("Error fetching food data:", error);
        }
      };
      fetchFoodData();

      // const filteredProducts = products.filter(
      //   (item) => item.category === "Sides"
      // );
      // const popularSides = filteredProducts.slice(0, 3);
      // setAllProducts(popularSides);

      // setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div className="w-100">
      <Helmet>
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="description"
          content="we serve up delicious gourmet foods for all occasions"
        />
        <title>Gourmet Chef Cuisine</title>
      </Helmet>
      {/* <MetaTag title="Home" desc="Home" /> */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h6 className="mb-3">Traditional & Hygienic</h6>
                <h1 className="mb-4 hero__title">
                  For the <span>love</span> of
                  <span> delicious food</span>
                </h1>

                <h5>Order now and feel the joy of mouth-watering food!</h5>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link href="/foods">Order now</Link>
                    <i className="ri-arrow-right-s-line animated-arrow-right"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link href="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    low delivery charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <Image
                  src={heroImg}
                  alt="hero-img"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <h5 className="mb-4 text-center">
          <b>MENU</b>
        </h5>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h6 className="feature__subtitle mb-4">How it works</h6>
              <h2 className="feature__title">Just sit back, we will</h2>
              <h2 className="feature__title">
                <span>take care</span>
              </h2>
              <p className="feature__text">
                Relish a world of flavors, while we bring them to your
                door-step.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <Image
                    src={item.imgUrl}
                    alt="feature-img"
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "10px",
                    }}
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category">
                <button
                  className={`all__btn   ${
                    category === "Rice" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Rice")}
                >
                  Rice
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Snacks" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Snacks")}
                >
                  Snacks
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Soup & Swallow" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Soup & Swallow")}
                >
                  Soup
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Sides" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Sides")}
                >
                  Sides
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                {isLoading ? (
                  <h4 className="w-100" style={{ textAlign: "center" }}>
                    Loading....
                  </h4>
                ) : (
                  <ProductCard item={item} />
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <Image
                src={whyImg}
                alt="why Gourmet Chef Cuisine"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                className="w-100 animated-img"
              />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Gourmet Chef Cuisine?</span>
                </h2>
                <p className="tasty__treat-desc">
                  We pride ourselves on offering a top-notch service to our
                  customers. From start to finish, we go above and beyond to
                  ensure that every detail is taken care of, from the quality of
                  our food options to the speed and accuracy of our delivery
                  service. We believe that, delivering excellence is not just a
                  goal, but the standard we hold ourselves to every single day.
                  whether you&#39;re ordering for the first time or are a
                  returning customer, we are committed to providing a top-notch
                  service every time. Our team works tirelessly to ensure that
                  every aspect of your experience with us exceeds your
                  expectations. We constantly strive to improve our service and
                  welcome feedback from our customers so that we can continue to
                  enhance our offerings. With our top-notch service, you can
                  have peace of mind knowing that we are dedicated to providing
                  the highest level of satisfaction to our customers. Try us
                  today and experience the convenience of quick, easy, and
                  delicious food delivery right at your fingertips!
                </p>

                <ListGroup className="mt-2">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty foods
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Quality
                      support
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Stew</h2>
            </Col>

            {hotStew.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Real voices, Real experiences - Discover the praise from our
                  valued customers!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <Image
                src={networkImg}
                alt="testimonial-img"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                // className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
