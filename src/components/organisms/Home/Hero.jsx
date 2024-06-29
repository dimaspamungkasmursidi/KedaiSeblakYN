import React from "react";
import { Link } from "react-router-dom";
import Marquee from "../../atoms/Text/Marquee";
import Button from "../../atoms/Buttons/Button";

const Hero = () => {
  return (
    <>
      <section className="py-12 px-8 mb-4 md:mb-0 flex flex-col justify-center items-center gap-6 lg:flex-row-reverse md:gap-x-40">
        <figure>
          <img
            src="/images/seblak.png"
            alt="hero image"
            className="w-full h-full md:w-[25rem] drop-shadow-[20px_20px_30px_rgba(0,0,0,0.68)]"
          />
        </figure>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1
            className="text-5xl font-rocksalt font-bold md:text-6xl"
            style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Kedai <br /> Seblak YN
          </h1>
          <p className="hidden md:block w-[30rem] text-lg font-londrina tracking-wider mt-4">
            Menyediakan seblak dengan berbagai pilihan topping favorit dan
            tingkat kepedasan yang bisa disesuaikan. Enak dan bikin ketagihan
          </p>
          <div className="mt-6 md:mt-4">
            <Link to="/product">
            <Button>Lihat Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      <Marquee>
        Menyediakan seblak dengan berbagai pilihan topping favorit dan tingkat
        kepedasan yang bisa disesuaikan. Enak dan bikin ketagihan.
      </Marquee>
    </>
  );
};

export default Hero;
