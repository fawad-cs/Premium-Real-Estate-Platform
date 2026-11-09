import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Admin from "./pages/Admin/Admin";
import { WishlistProvider } from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist/Wishlist";
import Sell from "./pages/Sell/Sell";
function App() {
  return (
    <BrowserRouter>
     <WishlistProvider>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/properties" element={<Properties />} />
         <Route path="/properties/:id" element={<PropertyDetails />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/sell" element={<Sell />} />
       </Routes>
      <Footer />
    </WishlistProvider>
    </BrowserRouter>
  );
}

export default App;