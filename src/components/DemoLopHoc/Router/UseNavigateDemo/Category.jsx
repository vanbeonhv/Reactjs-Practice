import React from "react";
import { useNavigate } from "react-router-dom";
const Category = () => {
  let navigate = useNavigate();
  const handleData = (e) => {
    navigate("/product", { state: { categoryId: e.target.value } });
  };
  return (
    <div>
      <h2>Garage</h2>
      <select
        name="car"
        id="car"
        defaultValue="default"
        onChange={(e) => handleData(e)}
      >
        <option value="default" hidden disabled>
          Choose your car
        </option>
        <option value="1">Mec</option>
        <option value="2">Porch</option>
        <option value="3">BMW</option>
      </select>
    </div>
  );
};

export default Category;
