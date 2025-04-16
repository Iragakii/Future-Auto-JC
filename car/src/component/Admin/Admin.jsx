import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newAdminData, setNewAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRole, setSelectedRole] = useState("user");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchUsers();
  }, [token, navigate]);

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

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      <div className="admin-section">
        <h2>Create New Admin</h2>
        <form onSubmit={handleCreateAdmin} className="admin-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={newAdminData.name}
              onChange={(e) =>
                setNewAdminData({ ...newAdminData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={newAdminData.email}
              onChange={(e) =>
                setNewAdminData({ ...newAdminData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={newAdminData.password}
              onChange={(e) =>
                setNewAdminData({ ...newAdminData, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn-create">
            Create Admin
          </button>
        </form>
      </div>

      <div className="admin-section">
        <h2>Manage Users</h2>
        <div className="users-list">
          {users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <table className="users-table">
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
                          selectedUserId === user._id ? selectedRole : user.role
                        }
                        onChange={(e) => {
                          setSelectedUserId(user._id);
                          setSelectedRole(e.target.value);
                        }}
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                      <button
                        onClick={() => handleUpdateRole(user._id)}
                        className="btn-update"
                        disabled={selectedUserId !== user._id}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="btn-delete"
                        disabled={user.role === "admin"}
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
  );
};

export default Admin;
