import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Product = () => {
  let { state } = useLocation();
  let { categoryId } = useParams();
  let navigate = useNavigate();
  console.log(state);
  return (
    <div>
      <h2>You selected {state.categoryId}</h2>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Product;
