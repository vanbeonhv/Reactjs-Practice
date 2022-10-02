import { useState, useEffect } from "react";

export default function CarSelector() {
  const listCars = ["BMW", "Audi", "Porsche", "Mercedes"];
  const listColors = ["Black", "White", "Red", "Pink", "yellow"];

  const [car, setCar] = useState(listCars[0]);
  const [color, setColor] = useState(listColors[0]);
  const handleSelectCar = (e) => {
    setCar(e.target.value);
  };
  const handleSelectColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h1>Select your car</h1>
      <div>
        <p className="d-inline-block me-3">Select a car</p>
        <select onChange={handleSelectCar}>
          {listCars.map((car, index) => (
            <option key={index}> {car}</option>
          ))}
        </select>
      </div>
      <div>
        <p className="d-inline-block me-3">Select a color</p>
        <select onChange={handleSelectColor}>
          {listColors.map((color, index) => (
            <option key={index}> {color}</option>
          ))}
        </select>
      </div>
      <h3>
        You selected a {color} - {car}
      </h3>
    </div>
  );
}
