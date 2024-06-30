import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Button from "../../atoms/Buttons/Button";

const Modal = ({ show, onClose, menu, addToCart }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const [spicinessLevel, setSpicinessLevel] = useState(1);

  const handleAddToCart = () => {
    if (menu.category !== "Minuman") {
      addToCart({ ...menu, spicinessLevel });
    } else {
      addToCart({ ...menu });
    }
    onClose(); // Close modal after adding to cart
  };

  const generateWhatsAppMessage = () => {
    const message = `Atas Nama:\nPesanan Saya:\n1. ${menu.title} ${
      menu.category !== "Minuman" ? `(Level: ${spicinessLevel})` : ""
    } - Jumlah: 1\n\nTotal Barang: 1\nTotal Harga: ${menu.price}\n\nAlamat:\nNote: Kirimkan juga Sharelok nya`;
    return message;
  };

  const handleOrderNow = () => {
    const phoneNumber = "6288297894942";
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const handleOrderInstant = () => {
    const phoneNumber = "6285755035870";
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

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
        className="bg-white/20 backdrop-blur-md rounded-lg p-6 w-full max-w-md border"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-gray-700"
        >
          <IoClose className="w-8 h-8" />
        </button>

        {/* Modal Content */}
        <figure className="p-2 flex justify-center items-center mb-4">
          <img
            src={menu.image}
            alt={menu.title}
            className="w-36 md:w-52 h-36 md:h-52 drop-shadow-[20px_20px_30px_rgba(0,0,0,0.58)]"
          />
        </figure>
        <h2 className="text-xl font-bold mb-2">{menu.title}</h2>
        <p className="mb-2">{menu.desc}</p>
        <p className="text-lg font-semibold mb-2">{menu.price}</p>

        {menu.category !== "Minuman" && (
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
            <p className="text-sm mt-2">Note: <br /> Level 4 + Rp.1000 & Level 5 + Rp.2000</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center items-center mt-8 gap-3 mb-4 md:mt-4 md:mb-0">
          <Button onClick={handleOrderNow} size="p-2">
            Order
          </Button>

          <Button
            onClick={handleOrderInstant}
            color="bg-tertiary text-white rounded hover:bg-secondary hover:text-red-600"
          >
            Order Instant
          </Button>

          <Button
            onClick={handleAddToCart}
            color="bg-red-500 text-white px-4 py-2 rounded hover:bg-secondary hover:text-red-600"
            size="p-2"
          >
            <BsCart2 size={20} />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
