import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/dashboard/Orders";
import Users from "./pages/dashboard/Users";

import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/profile" element={<Profile />} />

          {/* Nested Routing */}

          <Route path="/dashboard" element={<Dashboard />}>

            <Route path="orders" element={<Orders />} />

            <Route path="users" element={<Users />} />

          </Route>

        </Routes>

        <Footer />

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;