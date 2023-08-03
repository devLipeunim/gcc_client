"use client";

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../../components/UI/common-section/CommonSection";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import "../../styles/checkout.css";
const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [enterRoute, setEnterRoute] = useState("");
  const [orderNote, setOrderNote] = useState("");

  const entries = {
    abule: 10,
    agege: 300,
    agidingbi: 500,
    aguda: 300,
    ajah: 200,
    ajegunle: 500,
    ajeromiIfelodun: 200,
    akerele: 300,
    akoka: 200,
    alaba: 300,
    alausa: 500,
    alimosho: 300,
    apapa: 200,
    badagry: 300,
    bariga: 500,
    coker: 300,
    dopemu: 200,
    ebuteMetta: 300,
    epe: 200,
    festacTown: 500,
    gbagada: 200,
    idumota: 300,
    ifakoIjaye: 200,
    ijesha: 500,
    ikeja: 200,
    ikorodu: 300,
    ikoyi: 500,
    ilupeju: 300,
    iyanaIpaja: 500,
    ketu: 300,
    lagosIsland: 200,
    lagosMainland: 300,
    lawanson: 200,
    lekki: 300,
    marina: 200,
    maryland: 500,
    mazaMaza: 200,
    mende: 300,
    mile2: 200,
    mushin: 300,
    obalende: 200,
    ogba: 300,
    ojo: 200,
    ojoduBerger: 500,
    ojota: 200,
    ojuelegba: 300,
    onipanu: 500,
    oregun: 300,
    oshodiIsolo: 200,
    palmgrove: 500,
    satelliteTown: 200,
    shomolu: 300,
    surulere: 500,
    takwaBay: 300,
    tinubuSquare: 200,
    victoriaIsland: 500,
    yaba: 500,
    others: 1000,
  };

  const deliveryFee = entries[enterRoute];
  console.log(deliveryFee);

  const txRef =
    "GourmetChefCuisine_" + Math.floor(Math.random() * 1000000000 + 1);
  const data = useSelector((state) => state.cart.cartItems);
  console.log(data);
  const cartData = data.map((item) => ({
    name: item.title,
    price: item.price,
    quantity: item.quantity,
    totalPrice: item.totalPrice,
    image: item.image01,
  }));
  console.log(cartData);
  const cartDataInfo = JSON.stringify(cartData);
  console.log(cartDataInfo);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const totalAmount =
    deliveryFee !== undefined
      ? parseInt(cartTotalAmount) + parseInt(deliveryFee) + 50
      : cartTotalAmount;
  console.log(totalAmount);

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const config = {
    public_key: "FLWPUBK_TEST-e9ed7f46854efc95342a0d0a48adf0c6-X",
    tx_ref: txRef,
    amount: totalAmount,
    currency: "NGN",
    // redirect_url: "https://gcc-ssa.vercel.app/success.html",
    subaccounts: [
      {
        id: "RS_9A6D440B560005800E890F75CF3FFFA4",
        transaction_charge_type: "percentage",
        transaction_charge: 0,
      },
    ],
    customer: {
      email: enterEmail,
      phone_number: enterNumber,
      name: enterName,
    },
    meta: {
      phone: enterNumber,
      address: enterAddress,
      route: enterRoute,
      itemSelected: cartDataInfo,
      orderNote: orderNote,
    },
    customizations: {
      title: "Gourmet Chef Cuisine",
      description: "Payment for purchase",
      logo: "https://gcc-ssa.vercel.app/gcc-web-logo.svg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const resetFormFields = () => {
    setEnterName("");
    setEnterEmail("");
    setEnterNumber("");
    setEnterAddress("");
    setEnterRoute("");
    setOrderNote("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleFlutterPayment({
      callback: (Response) => {
        console.log(Response);
        if (
          Response.status == "completed" &&
          Response.charge_response_code == "00"
        ) {
          console.log("Successful");
          handleClearCart();
          resetFormFields()
          setTimeout(() => {
            setEnterName("");
            setEnterEmail("");
            setEnterNumber("");
            setEnterAddress("");
            setEnterRoute("");
            setOrderNote("");
          }, 500);
          // resetFormFields()
        }
        closePaymentModal();
      },
      onClose: () => {},
    });
  };
  return (
    <div className="w-100">
      <Helmet>
        <meta name="description" content="Secure Checkout from FlutterWave" />
        <title>Gourmet Chef Cuisine - Checkout</title>
      </Helmet>
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Delivery Information</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </div>
                <div className="form__group sorting__widget">
                  <select
                    className=""
                    value={enterRoute}
                    onChange={(e) => {
                      setEnterRoute(e.target.value);
                    }}
                    required
                  >
                    <option value="">Select Route</option>
                    <option value="abule">Abule</option>
                    <option value="agege">Agege</option>
                    <option value="agidingbi">Agidingbi</option>
                    <option value="aguda">Aguda</option>
                    <option value="ajah">Ajah</option>
                    <option value="ajegunle">Ajegunle</option>
                    <option value="ajeromiIfelodun">Ajeromi-Ifelodun</option>
                    <option value="akerele">Akerele</option>
                    <option value="akoka">Akoka</option>
                    <option value="alaba">Alaba</option>
                    <option value="alausa">Alausa</option>
                    <option value="alimosho">Alimosho</option>
                    <option value="apapa">Apapa</option>
                    <option value="badagry">Badagry</option>
                    <option value="bariga">Bariga</option>
                    <option value="coker">Coker</option>
                    <option value="dopemu">Dopemu</option>
                    <option value="ebuteMetta">Ebute-Metta</option>
                    <option value="epe">Epe</option>
                    <option value="festacTown">Festac-Town</option>
                    <option value="gbagada">Gbagada</option>
                    <option value="idumota">Idumota</option>
                    <option value="ifakoIjaye">Ifako-Ijaye</option>
                    <option value="ijesha">Ijesha</option>
                    <option value="ikeja">Ikeja</option>
                    <option value="ikorodu">Ikorodu</option>
                    <option value="ikoyi">Ikoyi</option>
                    <option value="ilupeju">Ilupeju</option>
                    <option value="iyanaIpaja">Iyana-Ipaja</option>
                    <option value="ketu">Ketu</option>
                    <option value="lagosIsland">Lagos-Island</option>
                    <option value="lagosMainland">Lagos-Mainland</option>
                    <option value="lawanson">Lawanson</option>
                    <option value="lekki">Lekki</option>
                    <option value="marina">Marina</option>
                    <option value="maryland">Maryland</option>
                    <option value="mazaMaza">Maza-Maza</option>
                    <option value="mende">Mende</option>
                    <option value="mile2">Mile-2</option>
                    <option value="mushin">Mushin</option>
                    <option value="obalende">Obalende</option>
                    <option value="ogba">Ogba</option>
                    <option value="ojo">Ojo</option>
                    <option value="ojoduBerger">Ojodu-Berger</option>
                    <option value="ojota">Ojota</option>
                    <option value="ojuelegba">Ojuelegba</option>
                    <option value="onipanu">Onipanu</option>
                    <option value="oregun">Oregun</option>
                    <option value="oshodiIsolo">Oshodi-Isolo</option>
                    <option value="palmgrove">Palmgrove</option>
                    <option value="satelliteTown">Satellite-Town</option>
                    <option value="shomolu">Shomolu</option>
                    <option value="surulere">Surulere</option>
                    <option value="takwaBay">Takwa-Bay</option>
                    <option value="tinubuSquare">Tinubu-Square</option>
                    <option value="victoriaIsland">Victoria-Island</option>
                    <option value="yaba">Yaba</option>
                    <option value="others">Others</option>
                  </select>
                  {/* <input
                    type="text"
                    placeholder="Route"
                    required
                    onChange={(e) => setEnterRoute(e.target.value)}
                  /> */}
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Order note"
                    required
                    onChange={(e) => setOrderNote(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Pay
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>&#8358;{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Delivery fee: <span>&#8358;{deliveryFee}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>&#8358;{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
