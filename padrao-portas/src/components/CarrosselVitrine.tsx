import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./CarrosselVitrine.css";

const imagens = [
  "img/porta1.jpg",
  "img/porta2.jpg",
  "img/porta3.jpg",
  "img/porta4.jpg",
  "img/porta5.jpg",
];

const CarrosselVitrine: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 0.5; // velocidade suave
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="vitrine">
      <div className="vitrine-line top-line"></div>
      <div ref={carouselRef} className="carousel-container">
        {imagens.map((src, index) => (
          <motion.div
            key={index}
            className="carousel-card"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
          >
            <div className="img-wrapper">
              <img src={src} alt={`Porta ${index + 1}`} />
            </div>
          </motion.div>
        ))}
        {/* Repetindo para loop contínuo */}
        {imagens.map((src, index) => (
          <motion.div
            key={index + imagens.length}
            className="carousel-card"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
          >
            <div className="img-wrapper">
              <img src={src} alt={`Porta ${index + 1}`} />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="vitrine-line bottom-line"></div>
    </section>
  );
};

export default CarrosselVitrine;
