import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import ProductPage from '../pages/ProductPage'

const Routed = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/product" element={<ProductPage />} />
  </Routes>
)
export default Routed
