import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../../atoms/Text/Title";

const OurTeam = () => {
  const [section1Ref, section1InView] = useInView({ triggerOnce: true });
  const [section2Ref, section2InView] = useInView({ triggerOnce: true });

  return (
    <section className="py-10 px-6">
      <Title>Tentang Kami</Title>
      <motion.div
        className="mt-8 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section 1 */}
        <motion.div
          ref={section2Ref}
          className="flex flex-col lg:flex-row-reverse items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={
            section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <figure className="lg:min-w-[20rem] h-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyymE7mu1V_Fk2rD-PMeUTCCtFAlBteC-H4w&s"
              alt="About Us Image"
              className="w-full h-full rounded-md shadow-lg"
            />
          </figure>
          <div>
            <h2 className="text-3xl font-londrina tracking-wider">
              Kedai Seblak YN
            </h2>
            <p className="mt-2 text-lg">
              Kedai Seblak YN adalah sebuah kedai yang menyediakan makanan khas
              Indonesia seperti Seblak, Baso Aci, Mie Bumbu Seblak dan Minuman
              yang segar dengan harga yang ramah di kantong. Berlokasi di
              Plosokandang, Tulungagung, Jawa Timur.
            </p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          ref={section1Ref}
          className="flex flex-col lg:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={
            section1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <figure className="relative lg:min-w-[600px] h-full">
            <img
              src="/images/team.png"
              alt="About Us Image"
              className="w-full h-full rounded-md shadow-lg"
            />
            <figcaption className="absolute bottom-0 left-0 bg-primary/70 backdrop-blur-lg text-white py-1 px-4 rounded-tr-md">
              Team Kami
            </figcaption>
          </figure>
          <div>
            <h2 className="text-3xl font-londrina tracking-wider">
              Ikuti kami
            </h2>
            <p className="mt-2 text-lg">
              Ketahui informasi-informasi terbaru tentang kedai kami setiap
              harinya di Instagram{" "}
              <span>
                <a
                  href="https://www.instagram.com/kedaiseblak.yn/"
                  target="_blank"
                  className="text-xl text-blue-400 font-londrina tracking-wider"
                >
                  @kedaiseblak.yn
                </a>
              </span>
              . 
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurTeam;
