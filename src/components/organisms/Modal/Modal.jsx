// src/components/Modal/Modal.jsx
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ show, onClose, menu }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const [spicinessLevel, setSpicinessLevel] = useState(1);

  if (!show) {
    return null;
  }

  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
        className="bg-white/20 backdrop-blur-md rounded-lg p-6 w-full max-w-md"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-gray-700"
        >
          <IoClose className="w-8 h-8" />
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">{menu.title}</h2>
        <img src={menu.image} alt={menu.title} className="mb-4 w-full h-auto" />
        <p className="mb-4">{menu.desc}</p>
        <p className="text-lg font-semibold mb-4">{menu.price}</p>

        {/* Spiciness Level */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">
            Pilih Tingkat Kepedasan:
          </h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                onClick={() => setSpicinessLevel(level)}
                className={`px-3 py-1 rounded ${
                  spicinessLevel === level
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-primary"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Pesan
          </button>
          <BsCart2 className="w-8 h-8 text-gray-700" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
