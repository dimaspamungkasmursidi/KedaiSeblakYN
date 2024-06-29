// CartModal.jsx

import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const CartModal = ({ cartItems, onClose, removeFromCart, clearCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
      <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2>
        {cartItems.length === 0 ? (
          <p className="text-lg">Keranjang belanja kosong.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                    <p className="text-lg font-semibold">{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  <BsFillTrashFill className="w-6 h-6" />
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-end mt-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600"
          >
            Kosongkan Keranjang
          </button>
          <button
            onClick={onClose}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
