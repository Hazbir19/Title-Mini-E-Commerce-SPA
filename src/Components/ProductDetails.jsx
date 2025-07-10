import React, { useContext, useEffect, useState } from "react";
import { MainContent } from "../context/ContextApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const { handleAddToCart } = useContext(MainContent);

  useEffect(() => {
    async function HandleProduct(){
    const foundbyID = await fetch(`https://mini-e-commerce-spa-backend.vercel.app/products/${id}`)
      const found = await foundbyID.json();

    setProduct(found);

  }
  HandleProduct();
}, [id]);

return (
  <div>
      <div className="min-h-screen bg-background px-4 py-10 font-title">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 bg-white p-6 rounded-xl shadow-md">
          <div className="w-full md:w-1/2">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold text-primary">{product?.title}</h1>
            <p className="text-gray-700">{product?.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Brand:</span> {product?.brand}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product?.category}
              </p>
              <p>
                <span className="font-semibold">Stock:</span> {product?.stock}
              </p>
              <p>
                <span className="font-semibold">Rating:</span> ⭐{" "}
                {product?.rating}
              </p>
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-700">
              {product?.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="text-xl text-primary-light font-bold">
              ${product?.price.toFixed(2)}
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-primary-light text-white px-6 py-2 rounded hover:bg-primary transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
