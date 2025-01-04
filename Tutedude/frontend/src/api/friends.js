import axios from "axios";

// Correct baseURL to reflect the `/users` endpoint
const API = axios.create({
  baseURL: "http://localhost:5000/api/users",
}); // Corrected here

// Add token to the Authorization header if it exists in localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
