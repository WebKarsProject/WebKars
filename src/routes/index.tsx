import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Homepage from "../pages/homePage";
import ProductPage from "../pages/ProductPage";
import Register from "../pages/register";

const Routed = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/product" element={<ProductPage />} />
  </Routes>
);
export default Routed;
