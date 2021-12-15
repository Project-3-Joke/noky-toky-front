import React from "react";

const ShopComponent = ({ img, price, description, type }) => {
  return (
    <form className="ProductContainer">
      <div className="SubProductContainer">
        <h3>Shop {type}</h3>
        <img src={img} style={{ width: "280px", height: "280px" }} />
        <p>{description}</p>
        <p>Price: {price} $</p>
      </div>
      <div className="buttonContainer">
        {type === "Shirt" ? (
          <select>
            <option>XS</option>
            <option>S</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        ) : (
          <select>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
            <option>Giant</option>
          </select>
        )}
        <button type="submit">Buy</button>
      </div>
    </form>
  );
};

export default ShopComponent;
