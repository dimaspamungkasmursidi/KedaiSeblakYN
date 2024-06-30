import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const CartModal = ({ cartItems, setCartItems, show, onClose, removeFromCart }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      // Convert price string to numeric value with regex
      const numericPrice = parseFloat(item.price.replace(/[^0-9,-]+/g, "").replace(",", "."));
      return total + numericPrice * item.quantity;
    }, 0);

    // Format total price as Indonesian Rupiah
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(totalPrice);
  };

  // Function to generate WhatsApp message content
  const generateWhatsAppMessage = () => {
    let message = "Pesanan saya:\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.title} (Level: ${item.spicinessLevel}) - Jumlah: ${item.quantity}\n`;
    });
    message += `\nTotal Barang: ${calculateTotalItems()}\nTotal Harga: ${calculateTotalPrice()}`;
    return message;
  };

  // Function to calculate total items
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Function to handle Order Now button click
  const handleOrderNow = () => {
    const phoneNumber = "6288297894942";
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  // Effect to update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
        <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2>
        {cartItems.length === 0 ? (
          <p className="text-lg">Keranjang belanja kosong.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.price}</p>
                  <p>Tingkat Kepedasan: {item.spicinessLevel}</p>
                  <p>Jumlah: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.spicinessLevel)}
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Total Harga: {calculateTotalPrice()}</h3>
            <h3 className="text-lg font-bold">Total Barang: {calculateTotalItems()}</h3>
            <button
              onClick={handleOrderNow}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Order Now
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CartModal;
