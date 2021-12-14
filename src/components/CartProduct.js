import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ShopComponent from "./ShopComponent";

export default function Product(props) {
  const img = props.location.aboutProps.image;
  const price = props.location.aboutProps.price;
  const description = props.location.aboutProps.description;
  const type = props.location.aboutProps.type;

  return (
    <div className="ProductWrapper">
      <h1>Shop Page</h1>
      <ShopComponent
        img={img}
        description={description}
        price={price}
        type={type}
      />
    </div>
  );
}
