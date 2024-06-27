import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <nav className="flex justify-between items-center py-4 px-6 bg-black/10 shadow-[0px_4.0px_20px_rgba(0,0,0,0.38)]">
        {/* LOGO */}
        <div>
          <Link to="/">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOxvrdbUOP745_5x99XUXXYWgmFmRRKtepgeMFmhYuGkzftppBRKD9xBeHn8TYE8RfWU&usqp=CAU"
                alt="Logo Kedai Seblak YN"
                className="w-10 h-10 rounded-md"
              />
            </figure>
          </Link>
        </div>

        {/* NAVIGATION */}
        <section>
          {/* MOBILE NAVIGATION BUTTON */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <motion.svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </motion.svg>
              )}
            </motion.button>
          </div>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden md:flex space-x-8 font-londrina tracking-widest">
            <li className="text-lg transition duration-300 ease-in-out hover:text-tertiary">
              <Link to="/">Beranda</Link>
            </li>
            <li className="text-lg transition duration-300 ease-in-out hover:text-tertiary">
              <Link to="/product">Menu</Link>
            </li>
            <li className="text-lg transition duration-300 ease-in-out hover:text-tertiary">
              <Link to="/about">Tentang</Link>
            </li>
            <li className="text-lg transition duration-300 ease-in-out hover:text-tertiary">
              <Link to="/contact">Kontak</Link>
            </li>
          </ul>
        </section>

        {/* CART */}
        <div className="hidden md:block">
          <BsCart2 className="w-8 h-8" />
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-black/15 overflow-hidden flex flex-col"
      >
        <div>
          <BsCart2 className="w-7 h-7 mt-8 mr-7 float-right" />
        </div>
        <ul className="flex flex-col items-center justify-center pt-4 pb-6 spacing-y-4">
          <li className="my-2 text-lg font-londrina tracking-widest transition duration-300 ease-in-out hover:text-tertiary">
            <Link to="/">Beranda</Link>
          </li>
          <li className="my-2 text-lg font-londrina tracking-widest transition duration-300 ease-in-out hover:text-tertiary">
            <Link to="/product">Menu</Link>
          </li>
          <li className="my-2 text-lg font-londrina tracking-widest transition duration-300 ease-in-out hover:text-tertiary">
            <Link to="/about">Tentang</Link>
          </li>
          <li className="my-2 text-lg font-londrina tracking-widest transition duration-300 ease-in-out hover:text-tertiary">
            <Link to="/contact">Kontak</Link>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Navbar;
