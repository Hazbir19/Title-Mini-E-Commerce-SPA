import React, { useContext } from "react";
import { MainContent } from "../context/ContextApi";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    
  return (
    <div className="w-[200px] bg-white rounded-xl shadow-primary-light p-4 hover:shadow-lg transition-all font-title flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-36 object-cover rounded-md mb-3"
      />

      <h3 className="text-sm font-semibold text-primary mb-1">{product.title}</h3>

      <p className="text-primary-light font-bold text-base mb-2">${product.price.toFixed(2)}</p>

      <Link to={`/products/${product._id}`}
        className="mt-auto bg-primary-light text-white text-sm py-2 rounded hover:bg-primary text-center transition"
      >
        Add to Cart
      </Link>
    </div>
  );
};

export default ProductCard;
