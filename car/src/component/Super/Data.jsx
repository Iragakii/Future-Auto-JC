import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Data.css";
import Pagefour from "../Pagefour/Pagefour";

function Data() {
  const [logos, setLogos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [logoImage, setLogoImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Get token from localStorage for authentication
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchLogos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:4000/api/admin/logos",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLogos(Array.isArray(response.data.logos) ? response.data.logos : []);
        setError("");
      } catch (error) {
        console.error("Error fetching logos:", error);
        setError(
          "Failed to load logos. Please check your connection and permissions."
        );
        setLogos([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, [token]);

  return (
    <div className="data-container">
      <div className="cards">
        {logos.map((logo) => (
          <div className="card" key={logo._id}>
            <div className="logo">
              <img
                src={
                  logo.logoImage.startsWith("http")
                    ? logo.logoImage
                    : `http://localhost:4000${logo.logoImage}`
                }
                alt={logo.title}
              />
            </div>
            <div className="contents">
              <span className="name">{logo.title}</span>
              <span className="content">{logo.content}</span>
            </div>
          </div>
        ))}
      </div>
      <Pagefour></Pagefour>
    </div>
  );
}

export default Data;
