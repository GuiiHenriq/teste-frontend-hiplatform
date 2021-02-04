import axios from "axios";

const api = axios.create({
  baseURL: "https://gist.githubusercontent.com",
});

export default api;
