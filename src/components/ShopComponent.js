import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const API_URI = process.env.REACT_APP_API_URI;

const ShopComponent = ({ img, price, description, type }) => {
  const [size, setSize] = useState("");
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the project id when creating the new task
    // const { projectId } = props;
    // Create an object representing the body of the POST request

    const requestBody = { img, type, size, description, user };

    // Get the token from the localStorage

    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers

    axios
      .post(`${API_URI}/api/products/new`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        // setType("");
        setSize("");
        history.push(`/user/:id`);
        // props.history.push("/favourite");

        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        // props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <form className="ProductContainer" onSubmit={handleSubmit}>
      <div className="SubProductContainer">
        <img src={img} style={{ width: "50%", height: "50%" }} alt="" />
        <p>{description}</p>
        <p>Price: {price} $</p>

        <label>Size:</label>
        <select name="size" onChange={handleChange}>
          <option selected disabled>
            {" "}
            Choose Size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="x-large">Extra Large</option>
          <option value="giant">Giant</option>
        </select>

        <div className="button-add-card">
          <button type="submit"> Add to Shopping </button>
        </div>
      </div>
    </form>
  );

  // return (
  //   <form className="ProductContainer">
  //     <div className="SubProductContainer">

  //       <h3>Shop {type}</h3>
  //       <img src={img} style={{ width: "100px", height: "100px" }} alt=""/>
  //       <p>{description}</p>
  //       <p>Price: {price} $</p>
  //     </div>

  //     <div className="buttonContainer">
  //       {type2 === "Shirt" ? (
  //         <select>
  //           <option>XS</option>
  //           <option>S</option>
  //           <option>L</option>
  //           <option>XL</option>
  //           <option>XXL</option>
  //         </select>
  //       ) : (
  //         <select>
  //           <option>Small</option>
  //           <option>Medium</option>
  //           <option>Large</option>
  //           <option>Extra Large</option>
  //           <option>Giant</option>
  //         </select>
  //       )}
  //       <button type="submit">Buy</button>
  //     </div>
  //   </form>
  // );
};

export default ShopComponent;
