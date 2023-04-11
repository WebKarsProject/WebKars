import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";

const Routed = () => (
  <Routes>
    <Route path="/" element={<Login />} />
  </Routes>
);
export default Routed;
