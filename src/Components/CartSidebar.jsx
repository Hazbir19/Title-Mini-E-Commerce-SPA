import React, { useContext, useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import { MainContent } from "../context/ContextApi";
import toast from "react-hot-toast";

const CartSidebar = () => {
    const { isOpen, onClose, cartItems, increaseQty, decreaseQty, total } = useContext(MainContent);
    
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  toast.success("✅ Order placed successfully!");(`Order placed!\nName: ${form.name}\nEmail: ${form.email}`);
    setForm({ name: "", email: "", address: "" });
    setShowModal(false);
    onClose(); // optionally close cart too
  };
    
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b font-title bg-primary text-white">
          <h2 className="text-lg">Your Cart</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {cartItems?.length === 0 ? (
            <p className="text-gray-500 text-center">Cart is empty</p>
          ) : (
            cartItems?.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>${(parseFloat(item.price.toFixed(2)))}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQty(item?.id)}>
                    <Minus size={18} />
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item?.id)}>
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${total?.toFixed(2)}</span>
          </div>
          <button
            className="w-full mt-4 bg-primary-light text-white py-2 rounded font-title"
           onClick={() => setShowModal(true)}
          >
            Checkout
          </button>
        </div>
      </div>
        {/* Checkout Modal */}
        {showModal && (
  <>
    {/* Modal Overlay */}
    <div
      className="fixed inset-0 bg-black/40 z-50"
      onClick={() => setShowModal(false)}
    ></div>

    {/* Modal Content */}
    <div className="fixed z-50 top-1/2 left-1/2 w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg font-title">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Checkout</h3>
        <button onClick={() => setShowModal(false)}>
          <X />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded outline-none"
        />
        <textarea
          name="address"
          placeholder="Address"
          required
          value={form.address}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded outline-none resize-none"
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary-light"
        >
          Place Order
        </button>
      </form>
    </div>
  </>
)}

    </>
  );
};

export default CartSidebar;
