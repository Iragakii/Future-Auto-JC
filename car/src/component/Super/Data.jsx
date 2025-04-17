import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Data.css";
function Data() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await axios.get("/api/admin/logos");
        setLogos(Array.isArray(response.data.logos) ? response.data.logos : []);
      } catch (error) {
        console.error("Error fetching logos:", error);
        setLogos([]); // Set to empty array on error
      }
    };

    fetchLogos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/logos/${id}`);
      setLogos(logos.filter((logo) => logo._id !== id));
    } catch (error) {
      console.error("Error deleting logo:", error);
    }
  };

  return (
    <>
      <div className="cards">
        {logos.map((logo) => (
          <div className="card" key={logo._id}>
            <div className="logo">
              <img src={logo.logoImage} alt={logo.title} />
            </div>
            <div className="contents">
              <Link className="name">
                <span>{logo.title}</span>
              </Link>
              <span className="content">{logo.content}</span>
              <button onClick={() => handleDelete(logo._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Data;
