import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardButton from "../../atoms/Buttons/CardButton";

const Card = ({ children }) => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
        <motion.div
          ref={ref}
          className="relative flex flex-col justify-between w-38 bg-black/10 backdrop-blur-xl rounded-xl border"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {children}
        </motion.div>
    </>
  );
};

const Top = ({ image, title, desc }) => {
  return (
    <div className="">
      <figure className="p-2 flex justify-center items-center bg-white/20">
        <img
          src={image}
          alt="Seblak Image"
          className="w-28 h-28 drop-shadow-[20px_20px_30px_rgba(0,0,0,0.58)]"
        />
      </figure>
      <div className="px-2 md:px-4 pt-2">
        <h2 className="font-londrina tracking-wider">{title}</h2>
        <p className="font-montserrat text-sm line-clamp-1 mb-1">{desc}</p>
      </div>
    </div>
  );
};

const Bottom = ({ price }) => {
  return (
    <div>
      <div className="flex flex-col items-start px-2 md:px-4 mb-2">
        <p className="font-montserrat font-bold">{price}</p>
      </div>
      <div className="flex flex-col justify-center items-center px-2 pb-3">
        <CardButton>Detail</CardButton>
      </div>
    </div>
  );
};

const Ranks = () => {
  return (
    <div className="absolute -top-4 -right-2 w-10 h-10 rounded-full bg-tertiary border flex justify-center items-center">
      <p className="font-rocksalt">{id}</p>
    </div>
  );
};

Card.Top = Top;
Card.Bottom = Bottom;
Card.Ranks = Ranks;

export default Card;