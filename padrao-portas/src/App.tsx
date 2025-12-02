import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./CarrosselVitrine.css";

interface Produto {
  nome: string;
  img: string;
}

interface CarrosselVitrineProps {
  produtos: Produto[];
}

const CarrosselVitrine: React.FC<CarrosselVitrineProps> = ({ produtos }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 0.5; // velocidade da rolagem
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0; // reinicia o loop
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
        {produtos.map((p, index) => (
          <motion.div
            key={index}
            className="carousel-card"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <div className="img-wrapper">
              <img src={p.img} alt={p.nome} />
            </div>
            <p className="nome-produto">{p.nome}</p>
          </motion.div>
        ))}

        {/* Duplicação para rolagem infinita suave */}
        {produtos.map((p, index) => (
          <motion.div
            key={index + produtos.length}
            className="carousel-card"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <div className="img-wrapper">
              <img src={p.img} alt={p.nome} />
            </div>
            <p className="nome-produto">{p.nome}</p>
          </motion.div>
        ))}
      </div>

      <div className="vitrine-line bottom-line"></div>
    </section>
  );
};

export default CarrosselVitrine;
