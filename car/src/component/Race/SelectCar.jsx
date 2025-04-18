import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SelectCar.css";

function SelectCar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    km: "",
    brand: "",
    location: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(newFilters);

    // Pass the updated filters to the parent component
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
    console.log("Updated filters:", { ...filters, [name]: value });
  };

  return (
    <>
      <div className="tit-nav">
        <span className="sp-au">Options</span>
        <div className="form-s">
          <select
            className="form-select-1"
            id="year"
            name="km"
            value={filters.km}
            onChange={handleFilterChange}
          >
            <option value="">All KM</option>
            <option value="20000">20000</option>
            <option value="19000">19000</option>
            <option value="18000">18000</option>
            <option value="17000">17000</option>
            <option value="15000">15000</option>
            <option value="14000">14000</option>
            <option value="13000">13000</option>
            <option value="8000">8000</option>
            <option value="10000">10000</option>
            <option value="2000">2000</option>
            <option value="9000">9000</option>
          </select>

          <select
            className="form-select-2"
            id="trans"
            name="brand"
            value={filters.brand}
            onChange={handleFilterChange}
          >
            <option value="">All Brand</option>
            <option value="Mersedes-Benz">Mersedes-Benz</option>
            <option value="Mazda">Mazda</option>
            <option value="Porches">Porches</option>
            <option value="Toyota">Toyota</option>
            <option value="Roll Royce">Roll Royce</option>
            <option value="BMW">BMW</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Maserati">Maserati</option>
            <option value="Nissan">Nissan</option>
          </select>

          <select
            className="form-select-3"
            id="body-style"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Osaka">Osaka</option>
            <option value="Ho chi Minh">Ho chi Minh</option>
            <option value="Moskow">Moskow</option>
            <option value="London">London</option>
            <option value="Beijing">Beijing</option>
            <option value="Findland">Findland</option>
            <option value="Ha Noi">Ha Noi</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SelectCar;
