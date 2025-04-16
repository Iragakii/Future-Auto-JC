import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null); // Start with null
  const [loading, setLoading] = useState(true); // Add loading state

  console.log("userData", userData);

  // Add axios interceptor to add Authorization header automatically
  // Move interceptor setup inside useEffect to avoid multiple registrations
  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        console.log("Axios interceptor token:", token);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth");

      if (data.success) {
        setIsLoggedin(true);
        await getUserData(); // Ensure getUserData is awaited
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token"); // Remove token if unauthorized
      } else {
        toast.error(error.message);
      }
      setIsLoggedin(false);
      setUserData(null);
    } finally {
      setLoading(false); // Set loading to false once the check is complete
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + `/api/user/data`);

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
        setUserData(null); // Reset userData in case of failure
      }
    } catch (error) {
      toast.error(error.message);
      setUserData(null);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
    loading, // Provide loading state to components
  };

  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
};
