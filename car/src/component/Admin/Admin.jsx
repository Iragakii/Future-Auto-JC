import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    km: "",
    brand: "",
    location: "",
  });
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [logos, setLogos] = useState([]); // New state for logos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newAdminData, setNewAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [newCarData, setNewCarData] = useState({
    title: "",
    year: "",
    mileage: "",
    status: "",
    sold: false,
    centerImage: null,
    leftImage: null,
  });
  const [newLogoData, setNewLogoData] = useState({
    // New state for logo data
    title: "",
    content: "",
    logoImage: null,
  });
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRole, setSelectedRole] = useState("user");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4000/api/admin/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(response.data.users);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users. Please check your admin privileges.");
      setLoading(false);
      console.error("Error fetching users:", err);
      if (err.response?.status === 401) {
        navigate("/login");
      }
    }
  };

  const fetchLogos = async () => {
    console.log("Fetching logos..."); // Log fetching logos
    console.log("Fetching logos..."); // Log fetching logos
    try {
      const response = await axios.get(
        "http://localhost:4000/api/admin/logos",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLogos(response.data.logos);
    } catch (err) {
      console.error("Error fetching logos:", err);
    }
  };

  const fetchCars = async () => {
    console.log("Fetching cars..."); // Log fetching cars
    try {
      const response = await axios.get("http://localhost:4000/api/admin/cars", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars(response.data.cars);
    } catch (err) {
      console.error("Error fetching cars:", err);
      setError("Failed to fetch cars");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchUsers();
    fetchCars();
    fetchLogos(); // Fetch logos on component mount
  }, [token, navigate]);
  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/api/admin/create-admin",
        newAdminData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Admin created successfully!");
      setNewAdminData({ name: "", email: "", password: "" });
      fetchUsers();
    } catch (err) {
      console.error("Error creating admin:", err);
      alert(
        `Error creating admin: ${err.response?.data?.message || err.message}`
      );
    }
  };
  const handleCreateCar = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newCarData.title);
      formData.append("year", newCarData.year);
      formData.append("mileage", newCarData.mileage);
      formData.append("status", newCarData.status);
      formData.append("sold", newCarData.sold);
      if (newCarData.centerImage) {
        formData.append("centerImage", newCarData.centerImage);
      }
      if (newCarData.leftImage) {
        formData.append("leftImage", newCarData.leftImage);
      }

      await axios.post("http://localhost:4000/api/car", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Car added successfully!");
      setNewCarData({
        title: "",
        year: "",
        mileage: "",
        status: "",
        sold: false,
        centerImage: null,
        leftImage: null,
      });
      fetchCars();
    } catch (err) {
      console.error("Error creating car:", err);
      alert(
        `Error creating car: ${err.response?.data?.message || err.message}`
      );
    }
  };
  const handleDeleteCar = async (carId) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/car/${carId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Car deleted successfully!");
      fetchCars();
    } catch (err) {
      console.error("Error deleting car:", err);
      alert(
        `Error deleting car: ${err.response?.data?.message || err.message}`
      );
    }
  };

  const handleCreateLogo = async (e) => {
    alert("Creating logo..."); // Alert when the function is called
    alert("Logo data before submission: " + JSON.stringify(newLogoData)); // Alert the logo data
    console.log("Creating logo..."); // Log when the function is called
    console.log("Logo data before submission:", newLogoData); // Log the logo data
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newLogoData.title);
      formData.append("content", newLogoData.content);
      if (newLogoData.logoImage) {
        formData.append("logoImage", newLogoData.logoImage);
      }

      await axios.post("http://localhost:4000/api/admin/logos", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Logo created successfully!");
      setNewLogoData({ title: "", content: "", logoImage: null });
      fetchLogos(); // Refresh logos after creation
    } catch (err) {
      console.error("Error creating logo:", err);
      alert(
        `Error creating logo: ${err.response?.data?.message || err.message}`
      );
    }
  };

  const handleDeleteLogo = async (logoId) => {
    if (!window.confirm("Are you sure you want to delete this logo?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/admin/logos/${logoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Logo deleted successfully!");
      fetchLogos(); // Refresh logos after deletion
    } catch (err) {
      console.error("Error deleting logo:", err);
      alert(
        `Error deleting logo: ${err.response?.data?.message || err.message}`
      );
    }
  };
  const handleDeleteCenterImage = async (carId) => {
    if (!window.confirm("Are you sure you want to delete the center image?"))
      return;

    try {
      await axios.delete(`http://localhost:4000/api/car/${carId}/centerImage`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Center image deleted successfully!");
      fetchCars();
    } catch (err) {
      console.error("Error deleting center image:", err);
      alert(
        `Error deleting center image: ${
          err.response?.data?.message || err.message
        }`
      );
    }
  };

  const handleDeleteLeftImage = async (carId) => {
    if (!window.confirm("Are you sure you want to delete the left image?"))
      return;

    try {
      await axios.delete(`http://localhost:4000/api/car/${carId}/leftImage`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Left image deleted successfully!");
      fetchCars();
    } catch (err) {
      console.error("Error deleting left image:", err);
      alert(
        `Error deleting left image: ${
          err.response?.data?.message || err.message
        }`
      );
    }
  };

  const handleDeleteContent = async (carId) => {
    if (!window.confirm("Are you sure you want to delete the content?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/car/${carId}/content`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Content deleted successfully!");
      fetchCars();
    } catch (err) {
      console.error("Error deleting content:", err);
      alert(
        `Error deleting content: ${err.response?.data?.message || err.message}`
      );
    }
  };

  const handleUpdateRole = async (userId) => {
    try {
      await axios.put(
        `http://localhost:4000/api/admin/users/${userId}/role`,
        { role: selectedRole },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Role updated successfully!");
      fetchUsers();
    } catch (err) {
      console.error("Error updating role:", err);
      alert(
        `Error updating role: ${err.response?.data?.message || err.message}`
      );
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("User deleted successfully!");
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
      alert(
        `Error deleting user: ${err.response?.data?.message || err.message}`
      );
    }
  };

  const handleFileChange = (e, field) => {
    setNewCarData({
      ...newCarData,
      [field]: e.target.files[0],
    });
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* New Logo Management Section */}
      <div className="admin-section">
        <h2>Create New Logo</h2>
        <form
          onSubmit={handleCreateLogo}
          className="admin-form"
          aria-label="Create new logo form"
        >
          <div className="form-group">
            <label htmlFor="logo-title">Title:</label>
            <input
              id="logo-title"
              type="text"
              placeholder="Enter logo title"
              value={newLogoData.title}
              onChange={(e) =>
                setNewLogoData({ ...newLogoData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="logo-content">Content:</label>
            <input
              id="logo-content"
              type="text"
              placeholder="Enter logo content"
              value={newLogoData.content}
              onChange={(e) =>
                setNewLogoData({ ...newLogoData, content: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="logo-image">Logo Image:</label>
            <input
              id="logo-image"
              type="file"
              onChange={(e) =>
                setNewLogoData({ ...newLogoData, logoImage: e.target.files[0] })
              }
              accept="image/*"
              required
            />
          </div>
          <button type="submit" className="btn-create">
            Create Logo
          </button>
        </form>
      </div>

      {/* Manage Logos Section */}
      <div className="admin-section">
        <h2>Manage Logos</h2>
        <div className="logos-list">
          {logos.length === 0 ? (
            <p>No logos found.</p>
          ) : (
            <div className="cards">
              {logos.map((logo) => (
                <div className="card" key={logo._id}>
                  <div className="logo">
                    <img
                      src={`http://localhost:4000${logo.logoImage}`}
                      alt={logo.title}
                    />
                  </div>
                  <div className="contents">
                    <span className="name">{logo.title}</span>
                    <span className="content">{logo.content}</span>
                    <button onClick={() => handleDeleteLogo(logo._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="admin-container">
        <h1>Admin Dashboard</h1>

        <div className="admin-section">
          <h2>Create New Admin</h2>
          <p className="section-description">
            Use this form to create a new administrator account with full
            privileges.
          </p>
          <form
            onSubmit={handleCreateAdmin}
            className="admin-form"
            aria-label="Create new admin form"
          >
            <div className="form-group">
              <label htmlFor="admin-name">Name:</label>
              <input
                id="admin-name"
                type="text"
                placeholder="Enter full name"
                aria-label="Admin name"
                value={newAdminData.name}
                onChange={(e) =>
                  setNewAdminData({ ...newAdminData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="admin-email">Email:</label>
              <input
                id="admin-email"
                type="email"
                placeholder="Enter email address"
                aria-label="Admin email"
                value={newAdminData.email}
                onChange={(e) =>
                  setNewAdminData({ ...newAdminData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="admin-password">Password:</label>
              <input
                id="admin-password"
                type="password"
                placeholder="Enter password"
                aria-label="Admin password"
                value={newAdminData.password}
                onChange={(e) =>
                  setNewAdminData({ ...newAdminData, password: e.target.value })
                }
                required
              />
            </div>
            <button
              type="submit"
              className="btn-create"
              aria-label="Create admin"
            >
              Create Admin
            </button>
          </form>
        </div>

        <div className="admin-section">
          <h2>Add New Car</h2>
          <p className="section-description">
            Fill out the details below to add a new car to the inventory,
            including images.
          </p>
          <form
            onSubmit={handleCreateCar}
            className="admin-form"
            aria-label="Add new car form"
          >
            <div className="form-group">
              <label htmlFor="car-title">Title:</label>
              <input
                id="car-title"
                type="text"
                placeholder="Enter car title"
                aria-label="Car title"
                value={newCarData.title}
                onChange={(e) =>
                  setNewCarData({ ...newCarData, title: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="car-year">Year:</label>
              <input
                id="car-year"
                type="text"
                placeholder="Enter manufacturing year"
                aria-label="Car year"
                value={newCarData.year}
                onChange={(e) =>
                  setNewCarData({ ...newCarData, year: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="car-mileage">Mileage:</label>
              <input
                id="car-mileage"
                type="text"
                placeholder="Enter mileage"
                aria-label="Car mileage"
                value={newCarData.mileage}
                onChange={(e) =>
                  setNewCarData({ ...newCarData, mileage: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="car-status">Status:</label>
              <input
                id="car-status"
                type="text"
                placeholder="Enter status (e.g., Available, Sold)"
                aria-label="Car status"
                value={newCarData.status}
                onChange={(e) =>
                  setNewCarData({ ...newCarData, status: e.target.value })
                }
                required
              />
            </div>
            <div className="checkbox-label">
              <label htmlFor="car-sold">Sold:</label>
              <input
                id="car-sold"
                type="checkbox"
                checked={newCarData.sold}
                onChange={(e) =>
                  setNewCarData({ ...newCarData, sold: e.target.checked })
                }
                aria-label="Car sold status"
              />
            </div>
            <div className="form-group">
              <label htmlFor="car-centerImage">Center Image:</label>
              <input
                id="car-centerImage"
                type="file"
                onChange={(e) => handleFileChange(e, "centerImage")}
                accept="image/*"
                required
                aria-label="Upload center image"
              />
            </div>
            <div className="form-group">
              <label htmlFor="car-leftImage">Left Image:</label>
              <input
                id="car-leftImage"
                type="file"
                onChange={(e) => handleFileChange(e, "leftImage")}
                accept="image/*"
                required
                aria-label="Upload left image"
              />
            </div>
            <button type="submit" className="btn-create" aria-label="Add car">
              Add Car
            </button>
          </form>
        </div>

        <div className="admin-section">
          <h2>Manage Cars</h2>
          <p className="section-description">
            View and manage the list of cars. You can delete cars or their
            images and content.
          </p>
          <div className="users-list">
            {cars.length === 0 ? (
              <p>No cars found.</p>
            ) : (
              <table className="users-table" aria-label="Manage cars table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((car) => (
                    <tr key={car._id}>
                      <td>{car.title}</td>
                      <td>{car.year}</td>
                      <td>{car.status}</td>
                      <td className="actions">
                        <button
                          onClick={() => handleDeleteCar(car._id)}
                          className="btn-delete"
                          aria-label={`Delete car ${car.title}`}
                        >
                          Delete Car
                        </button>
                        <button
                          onClick={() => handleDeleteCenterImage(car._id)}
                          className="btn-delete"
                          aria-label={`Delete center image of car ${car.title}`}
                        >
                          Delete Center Image
                        </button>
                        <button
                          onClick={() => handleDeleteLeftImage(car._id)}
                          className="btn-delete"
                          aria-label={`Delete left image of car ${car.title}`}
                        >
                          Delete Left Image
                        </button>
                        <button
                          onClick={() => handleDeleteContent(car._id)}
                          className="btn-delete"
                          aria-label={`Delete content of car ${car.title}`}
                        >
                          Delete Content
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className="admin-section">
          <h2>Manage Users</h2>
          <p className="section-description">
            View and manage registered users. You can update roles or delete
            users.
          </p>
          <div className="users-list">
            {users.length === 0 ? (
              <p>No users found.</p>
            ) : (
              <table className="users-table" aria-label="Manage users table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Verified</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.isAccountVerified ? "Yes" : "No"}</td>
                      <td className="actions">
                        <select
                          value={
                            selectedUserId === user._id
                              ? selectedRole
                              : user.role
                          }
                          onChange={(e) => {
                            setSelectedUserId(user._id);
                            setSelectedRole(e.target.value);
                          }}
                          aria-label={`Select role for user ${user.name}`}
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                        <button
                          onClick={() => handleUpdateRole(user._id)}
                          className="btn-update"
                          disabled={selectedUserId !== user._id}
                          aria-label={`Update role for user ${user.name}`}
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user._id)}
                          className="btn-delete"
                          disabled={user.role === "admin"}
                          aria-label={`Delete user ${user.name}`}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
