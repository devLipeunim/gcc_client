"use client"

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../../styles/all-foods.css";
import "../../styles/pagination.css";

const AllFoods = () => {
  // useEffect(() => {
    window.scroll(0, 0);
  // }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const query = `*[_type == "food"]{
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
      const fetchedFoods = await client.fetch(query);
      setFoods(fetchedFoods);
    };

    fetchFoods();
  }, []);

  const searchedProduct = foods.filter((item) => {
    if (searchTerm === "") {
      return selectedCategory ? item.category === selectedCategory : true; // Filter based on selected category
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
    return false;
  });

  const productPerPage = 16;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="w-100">
      <Helmet>
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Yummy Foods" />
        <title>Gourmet Chef Cuisine - All Foods</title>
      </Helmet>
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-75"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="BreakFast">BreakFast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Main Menu">Main Menu</option>
                  <option value="Sides">Sides</option>
                  <option value="Soup & Swallow">Soup & Swallow</option>
                  <option value="Peppe Soup">Peppe Soup</option>
                  <option value="Rice Menu">Rice Menu</option>
                  <option value="Stew">Stew</option>
              
                  <option value="Drinks">Drinks</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AllFoods;
