import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Homepage from '../pages/homePage';

const Routed = () => (
  <Routes>
    <Route
      path="/"
      element={<Login />}
    />
    <Route
      path="/homepage"
      element={<Homepage />}
    />
  </Routes>
);
export default Routed;
