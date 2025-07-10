import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white font-title">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Qtec Shop</h2>
          <p className="text-sm text-white/80">
            A simple and elegant e-commerce demo built with React and Tailwind CSS.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +880 1313-000000000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@qtecsolution.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com/QtecSolution" target="_blank" rel="noreferrer">
              <Facebook className="hover:text-primary-light transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="hover:text-primary-light transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 text-sm border-t border-white/10 py-4">
        &copy; {new Date().getFullYear()} Qtec Solution Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
