import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbBrandShopee } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/10 text-white py-12 shadow-[0px_-4.0px_20px_rgba(0,0,0,0.38)]">
      <div className="flex flex-col md:flex-row justify-between px-6 gap-6">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <Link to="/">
              <figure className="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOxvrdbUOP745_5x99XUXXYWgmFmRRKtepgeMFmhYuGkzftppBRKD9xBeHn8TYE8RfWU&usqp=CAU"
                  alt="Logo"
                  className="w-20 md:w-28 h-20 md:h-28 rounded-lg"
                />
              </figure>
            </Link>

            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-londrina tracking-wider">
                Kedai Seblak YN
              </h2>
              <p className="text-sm w-[15rem]">
                Srigading, Timur Pom Plosokandang, Kec. Kedungwaru, Kab.
                Tulungagung, Jawa Timur, 66229.
              </p>

              <div className="flex space-x-2 mt-2">
                <a
                  href="https://www.instagram.com/kedaiseblak.yn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 hover:text-gray-400" />
                </a>
                <a
                  href="https://shopee.co.id/kedaiseblakyn29"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandShopee className="w-5 h-5 hover:text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <p className="text-sm">
            Kedai Seblak YN adalah sebuah kedai yang menyediakan makanan khas Indonesia seperti Seblak, Baso Aci dan Mie Bumbu Seblak.
          </p> */}

        {/* Navigation Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-londrina tracking-wider mb-2">
            Navigasi
          </h3>
          <nav className="flex flex-col md:flex-row gap-2 md:gap-4">
            <Link to="/" className="text-sm hover:text-gray-400">
              Beranda
            </Link>
            <Link to="/product" className="text-sm hover:text-gray-400">
              Menu
            </Link>
            <Link to="/about" className="text-sm hover:text-gray-400">
              Tentang
            </Link>
            <Link to="/contact" className="text-sm hover:text-gray-400">
              Kontak
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-londrina tracking-wider mb-2">
            Web Developer
          </h3>
          <p className="text-sm mb-2">
            Website dibuat oleh{" "}
            <span className="font-londrina tracking-wider">
              Dimas Pamungkas Mursidi
            </span>
          </p>
          <div className="flex space-x-2">
            <a
              href="https://www.instagram.com/dmspamungkass/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5 hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/dimas-pamungkas-mursidi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-5 h-5 hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
