import { useContext } from "react";
import ProductCard from "./ProductCard ";
import { MainContent } from "../context/ContextApi";

const ProductGrid = () => {
const { products } = useContext(MainContent);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center px-4 py-10 min-h-screen">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
             product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
