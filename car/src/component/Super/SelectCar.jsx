import React from "react";
import { Link } from "react-router-dom";
import "./SelectCar.css";
function Auction() {
  return (
    <>
      <div className="tit-nav">
        <span className="sp-au">Options</span>
        <div className="form-s">
          <select className="form-select-1" id="year" name="year">
            <option value="KM">KM</option>
            <option value="1990">20000</option>
            <option value="1991">19000</option>
            <option value="1992">18000</option>
            <option value="1993">17000</option>
            <option value="1994">15000</option>
            <option value="1995">14000</option>
            <option value="1996">13000</option>
            <option value="1997">8000</option>
            <option value="1998">10000</option>
            <option value="1999">9000</option>
          </select>
          <select className="form-select-2" id="trans" name="trans">
            <option value="Brands">Brands</option>
            <option value="All">Mersedes-Benz</option>
            <option value="Automatic">Mazda</option>
            <option value="Manual">Porches</option>
            <option value="Manual">Toyota</option>
            <option value="Manual">Roll Royce</option>
            <option value="Manual">BMW</option>
            <option value="Manual">Aston Martin</option>
            <option value="Manual">Maserati</option>
          </select>
          <select className="form-select-3" id="body-style" name="body-style">
            <option value="Location">Location</option>
            <option value="All">New York</option>
            <option value="Coupe">Tokyo</option>
            <option value="Convertible">Osaka</option>
            <option value="Hatchback">Ho chi Minh</option>
            <option value="Sedan">Moskow</option>
            <option value="SUV">London</option>
            <option value="Truck">Beijing</option>
            <option value="Van">Findland</option>
            <option value="Wagon">Ha Noi</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Auction;
