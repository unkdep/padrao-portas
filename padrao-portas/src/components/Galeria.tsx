import "./Galeria.css";

const imagens = [
  "/img/porta1.jpg",
  "/img/porta2.jpg",
  "/img/porta3.jpg",
  "/img/porta4.jpg",
  "/img/porta5.jpg",
];

export default function Galeria() {
  // Duplicar as imagens para criar efeito de loop infinito
  const imagensDuplicadas = [...imagens, ...imagens];

  return (
    <section className="galeria" aria-label="Galeria de portas">
      <div className="galeria-container">
        {imagensDuplicadas.map((src, i) => (
          <div className="galeria-item" key={i}>
            <img src={src} alt={`Porta ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
