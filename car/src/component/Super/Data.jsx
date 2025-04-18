import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Data.css";
import Pagefour from "../Pagefour/Pagefour";

function Data({ filters }) {
  const [logos, setLogos] = useState([]);
  const [filteredLogos, setFilteredLogos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const backendUrl = "http://localhost:4000"; // Set your backend URL

  // Get token from localStorage for authentication
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchLogos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${backendUrl}/api/admin/logos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Logos API response:", response.data);

        if (response.data.success && Array.isArray(response.data.logos)) {
          // Make sure image paths are properly formatted
          const formattedLogos = response.data.logos.map((logo) => ({
            ...logo,
            logoImage: logo.logoImage.startsWith("http")
              ? logo.logoImage
              : `${backendUrl}${logo.logoImage.startsWith("/") ? "" : "/"}${
                  logo.logoImage
                }`,
          }));

          setLogos(formattedLogos);
          setFilteredLogos(formattedLogos);
          setError("");
        } else {
          throw new Error("Invalid response format from server");
        }
      } catch (error) {
        console.error("Error fetching logos:", error);
        setError(
          "Failed to load logos. Please check your connection and permissions."
        );
        setLogos([]);
        setFilteredLogos([]);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchLogos();
    } else {
      setError("Authentication token not found. Please log in again.");
    }
  }, [token, backendUrl]);

  // Apply filters when logos data or filters change
  useEffect(() => {
    if (!logos.length || !filters) return;

    console.log("Applying filters:", filters); // Log the current filters

    const filtered = logos.filter((logo) => {
      const brandMatch =
        !filters.brand ||
        (logo.brand &&
          logo.brand.toLowerCase() === filters.brand.toLowerCase());
      const kmMatch =
        !filters.km || (logo.km && logo.km.replace(" KM", "") === filters.km);

      const locationMatch =
        !filters.location ||
        (logo.location &&
          logo.location.toLowerCase() === filters.location.toLowerCase());

      return kmMatch && brandMatch && locationMatch;
    });

    console.log("Filtered logos:", filtered);
    console.log("Applying filters:", filters); // Log the filtered logos
    setFilteredLogos(filtered);
  }, [filters, logos]);

  return (
    <div className="data-container">
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading logos...</div>
      ) : (
        <div className="cards">
          {filteredLogos.length > 0 ? (
            filteredLogos.map((logo) => (
              <div className="card" key={logo._id}>
                <div className="logo">
                  <img
                    src={logo.logoImage}
                    alt={logo.title}
                    onError={(e) => {
                      console.error(`Image failed to load: ${logo.logoImage}`);
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/150?text=Logo+Not+Found";
                    }}
                  />
                </div>
                <div className="contents">
                  <span className="name">{logo.title}</span>
                  <span className="content">{logo.content}</span>
                  <div className="car-details">
                    <span className="detail-item">KM: {logo.km}</span>
                    <span className="detail-item">Brand: {logo.brand}</span>
                    <span className="detail-item">
                      Location: {logo.location}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-logos">
              No cars found matching your option. Please try different select.
            </div>
          )}
        </div>
      )}
      <Pagefour />
    </div>
  );
}

export default Data;
