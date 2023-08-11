"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import placepic from "../../../assets/images/Coo_Burger_Walking.png";
import "../../../styles/slider.css";
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          &#34;A true culinary delight! From the moment I entered the website, I
          was drawn in by the diverse menu choices. Placing an order was a
          breeze, and the food arrived earlier than expected. The flavors were
          spot on, as if I were dining in a gourmet restaurant. This food
          website has now become a staple in my weekly dining plans.&#34;
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <Image src={placepic} alt="avatar" className=" rounded" />
          <h6>Gloria</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          &#34;Exquisite flavors delivered to my doorstep! I&#39;m a food
          enthusiast, and this website exceeded my expectations. The attention
          to detail in each dish is evident, and the use of fresh ingredients
          truly sets them apart. The customer service was responsive and
          accommodating as well. I can&#39;t wait to explore more of their
          menu.!&#34;
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <Image src={placepic} alt="avatar" className=" rounded" />
          <h6>Mitchell</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          &#34;Absolutely delectable experience! The variety of flavors and
          textures in the dishes I ordered from this food website blew me away.
          Each bite was like a symphony of taste. The presentation was
          impeccable, and the delivery was prompt. This is now my go-to place
          for satisfying my culinary cravings.&#34;
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <Image src={placepic} alt="avatar" className=" rounded" />
          <h6>Elizabeth</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
