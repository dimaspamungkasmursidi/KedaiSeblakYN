import React from "react";
import { motion } from "framer-motion";
import { BsX } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartModal = ({ isOpen,  }) => {
  // Misalnya, data keranjang yang kosong
  const cartItems = [];

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-2 z-50"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-secondary/20 backdrop-blur-lg rounded-xl p-8 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Keranjang Belanja</h2>
              <button
                className="text-secondary hover:text-gray-600"
              >
                <BsX className="w-6 h-6" />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <div className="flex items-center justify-center h-40">
                <AiOutlineShoppingCart className="text-5xl text-secondary" />
                <p className="ml-4 text-secondary">
                  Keranjang belanja masih kosong.
                </p>
              </div>
            ) : ( 
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-secondary">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 text-right">
              <button className="bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 focus:outline-none">
                Checkout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CartModal;
