import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Test from './pages/Test.jsx';
import Navbar from './components/organisms/Header/Navbar';
import CartModal from './components/organisms/Modal/CartModal';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.spicinessLevel === item.spicinessLevel
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.spicinessLevel === item.spicinessLevel
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id, spicinessLevel) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (cartItem) => !(cartItem.id === id && cartItem.spicinessLevel === spicinessLevel)
      )
    );
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} toggleCartModal={toggleCartModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <CartModal
        show={showCartModal}
        onClose={toggleCartModal}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </Router>
  );
};

export default App;
