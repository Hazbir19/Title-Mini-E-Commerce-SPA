import React, { useContext, useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { MainContent } from "../context/ContextApi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const { toggleCart } = useContext(MainContent);
  return (
    <nav className="bg-primary text-white font-title shadow-primary-light">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold">
          🛒 MyShop
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-primary-light transition">Home</Link>
          <button onClick={toggleCart} className="relative">
            <ShoppingCart />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-light px-4 py-2 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <button onClick={() => { toggleCart(); setIsOpen(false); }} className="block">
            View Cart
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
