import React, { useState } from "react";
import {
  DoorOpen,
  Monitor,
  KeyRound,
  Search,
  ShoppingCart,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";

import "./HeaderHero.css";

interface HeaderHeroProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function HeaderHero({ search, setSearch }: HeaderHeroProps) {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState<number | null>(null);
  const [menuMobileAtivo, setMenuMobileAtivo] = useState(false);
  const [menuFixMobileAtivo, setMenuFixMobileAtivo] = useState<string>("inicio");

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuMobileAtivo(false); // fecha menu mobile fullscreen se aberto
      setMenuAtivo(false);
      setMenuFixMobileAtivo(id); // atualiza botão ativo do menu fixo mobile
    }
  }

  const navItems = [
    {
      titulo: "Portas de Alumínio",
      icone: <DoorOpen size={18} />,
      subItens: [
        "Portas Balcão",
        "Portas Camarão",
        "Portas de Abrir",
        "Portas Pivotantes",
      ],
    },
    {
      titulo: "Portas de Madeira",
      icone: <DoorOpen size={18} />,
      subItens: [
        "Folhas de Porta",
        "Kit Porta Pronta",
        "Portas Balcão",
        "Portas Camarão",
        "Portas de Correr",
        "Portas Especiais",
        "Portas Internas",
        "Portas Maciças",
        "Portas Pivotantes",
      ],
    },
    {
      titulo: "Janelas de Madeira",
      icone: <Monitor size={18} />,
      subItens: ["Maxim-Ar", "Venezianas", "Vitrôs"],
    },
    {
      titulo: "Portas de Vidro",
      icone: <DoorOpen size={18} />,
      subItens: ["Basculantes e Maxim-Ar", "Venezianas", "Vitrô de Correr"],
    },
    {
      titulo: "Acessórios",
      icone: <KeyRound size={18} />,
      subItens: [
        "Batentes de Madeira",
        "Dobradiças",
        "Fechaduras",
        "Guarnições",
        "Kit e Trilhos",
        "Puxadores",
      ],
    },
  ];

  return (
    <header className="header-hero">
      <div className="top-header">
        <div className="logo-container">
          <img src="/img/logopadraoportas.png" alt="Padrão Portas" />
        </div>
      </div>

      <nav className="nav">
        {/* Menu desktop: botões fixos */}
        <ul className="menu">
          <li>
            <button
              className={menuFixMobileAtivo === "inicio" ? "active" : ""}
              onClick={() => scrollToSection("inicio")}
            >
              Início
            </button>
          </li>
          <li>
            <button
              className={menuFixMobileAtivo === "produtos" ? "active" : ""}
              onClick={() => scrollToSection("produtos")}
            >
              Produtos
            </button>
          </li>
          <li>
            <button
              className={menuFixMobileAtivo === "contato" ? "active" : ""}
              onClick={() => scrollToSection("contato")}
            >
              Contato
            </button>
          </li>
        </ul>

        {/* Ícones desktop */}
        <div className="header-icons">
          <button className="iconBtn">
            <Instagram size={22} />
          </button>
          <button className="iconBtn">
            <Facebook size={22} />
          </button>
          <button className="iconBtn">
            <ShoppingCart size={24} />
          </button>
        </div>

        {/* Botão hamburguer mobile */}
        <div
          className={`hamburger ${menuAtivo ? "active" : ""}`}
          onClick={() => setMenuAtivo(!menuAtivo)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Menu fullscreen mobile */}
      <div className={`menu-overlay ${menuAtivo ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuAtivo(false)}
          aria-label="Fechar menu"
        >
          ×
        </button>

        {navItems.map((item, idx) => (
          <div key={idx} className="menu-overlay-item">
            <button
              type="button"
              onClick={() =>
                setSubmenuAberto(submenuAberto === idx ? null : idx)
              }
              className="menu-overlay-button"
            >
              {item.titulo}
            </button>
            {submenuAberto === idx && (
              <div className="submenu-overlay">
                {item.subItens.map((sub, i) => (
                  <div key={i} className="submenu-overlay-item">
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <a href="#contato" className="menu-overlay-button">
          Contato
        </a>

        {/* Ícones social/carrinho overlay */}
        <div className="header-icons-overlay">
          <button>
            <Instagram size={22} />
          </button>
          <button>
            <Facebook size={22} />
          </button>
          <button>
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>

      {/* Menu fixo mobile inferior com botões */}
      <ul className="menu-mobile-fixed">
        <li>
          <button
            className={menuFixMobileAtivo === "inicio" ? "active" : ""}
            onClick={() => scrollToSection("inicio")}
          >
            Início
          </button>
        </li>
        <li>
          <button
            className={menuFixMobileAtivo === "produtos" ? "active" : ""}
            onClick={() => scrollToSection("produtos")}
          >
            Produtos
          </button>
        </li>
        <li>
          <button
            className={menuFixMobileAtivo === "contato" ? "active" : ""}
            onClick={() => scrollToSection("contato")}
          >
            Contato
          </button>
        </li>
      </ul>

      {/* Hero Text */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>
          Transforme sua casa com <span>estilo e qualidade</span>
        </h2>
        <p>Portas e acessórios que fazem a diferença no seu lar</p>
      </motion.div>

      {/* Barra de pesquisa desktop */}
      <div className="hero-search">
        <Search size={22} />
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
