import { Route, Routes } from "react-router-dom";
import Session from "../pages/Session";
import Homepage from "../pages/homePage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import RecoveryPassword from "../pages/RecoveryPassword";

const Routed = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/session" element={<Session />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/recovery" element={<RecoveryPassword />} />
  </Routes>
);
export default Routed;
