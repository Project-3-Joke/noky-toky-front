import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const API_URI = process.env.REACT_APP_API_URI;

const ShopComponent = ({ img, price, description, type }) => {


 // const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const { user } = useContext(AuthContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();


    console.log( "type", type);


    // We need the project id when creating the new task
    // const { projectId } = props;
    // Create an object representing the body of the POST request
    
    const requestBody = { img, type, size, description, color, user };

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
        setColor("");
       
        // props.history.push("/favourite");

        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        // props.refreshProject();
      
      })
      .catch((error) => console.log(error));
  };

  return (
   
<div >
      
      <img src={img} style={{ width: "100px", height: "100px" }} alt=""/>
      <p>{description}</p>
      <p>Price: {price} $</p>

      <form  onSubmit={handleSubmit}>
          
        {/* <label>Type:</label>
        <input
          type="text"
          name="type"
          value={type2}
          onChange={(e) => setType(e.target.value)}
        /> */}

        <div >
          <button type="submit"> Add to Shopping </button>
        </div>
        
        
      </form>
      </div>
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
