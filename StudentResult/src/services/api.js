import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const calculateResult = (payload) =>
  API.post("/calculate-result", payload);
