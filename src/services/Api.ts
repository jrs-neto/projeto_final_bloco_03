import axios from "axios";

const api = axios.create({
  baseURL: "https://farmacia-nest.onrender.com",
});

export default api;
