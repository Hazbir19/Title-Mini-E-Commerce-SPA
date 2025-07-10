import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const MainContent = createContext();
const ContextApi = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://mini-e-commerce-spa-backend.vercel.app/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  // ✅ Add product to cart
  const handleAddToCart = (product) => {
toast.success("🛒 Added to cart");
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };
  // ✅ Toggle cart sidebar
  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };
  const onClose = () => setIsOpen(false);
const total = cartItems?.reduce((sum, item) => {
  console.log("Calculating total for item:", item);
  const price = parseFloat(item?.price) || 0;
  const qty = parseInt(item?.qty) || 0;
  return sum + price * qty;
}, 0);
// Round to 2 decimal places
  console.log("Total:", total);
  const items = {
    products,
    increaseQty,
    decreaseQty,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    total,
    onClose,
    toggleCart,
    handleAddToCart,
    isOpen,
    setIsOpen,
  };
  return <MainContent.Provider value={items}>
    {children}
     <Toaster position="top-right" toastOptions={{ className: "font-title" }} />
    </MainContent.Provider>;
};
export default ContextApi;
