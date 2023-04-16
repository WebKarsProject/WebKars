import { Route, Routes } from "react-router-dom";
import Session from "../pages/Session";
import Homepage from "../pages/homePage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";

const Routed = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/session" element={<Session />} />
    <Route path="/product" element={<ProductPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);
export default Routed;
