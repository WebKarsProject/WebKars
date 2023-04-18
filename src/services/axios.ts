import axios from "axios";

export const Instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

export const kenzieKars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 1000,
});
