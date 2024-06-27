import React from "react";
import { CiStar } from "react-icons/ci";

const TextLine = () => {
  return (
    <section className="mt-4 mb-12">
      <div className="flex items-center justify-center py-4 gap-2 lg:gap-8 bg-tertiary">
        <h2 className="text-xl md:text-2xl font-londrina tracking-wider">Seblak Enak</h2>
        <CiStar className="text-primary w-6 h-6" />
        <h2 className="text-xl md:text-2xl font-londrina tracking-wider">Mengatasi Mood Swing</h2>
        <CiStar className="hidden md:block text-primary w-6 h-6" />
        <h2 className="hidden md:block text-xl md:text-2xl font-londrina tracking-wider">Menambah Nafsu Makan</h2>
        <CiStar className="hidden lg:block text-primary w-6 h-6" />
        <h2 className="hidden lg:block text-xl md:text-2xl font-londrina tracking-wider">Mengurangi Stres</h2>
      </div>
    </section>
  );
};

export default TextLine;
