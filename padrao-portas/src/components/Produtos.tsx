import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { DoorOpen, Monitor, KeyRound, ShoppingCart } from "lucide-react";
import styles from "./Produtos.module.css";

interface Produto {
  nome: string;
  imagem?: string;
  descricao?: string;
  preco?: number;
  subcategoria?: string;
}

interface Subcategoria {
  nome: string;
  produtos: Produto[];
}

interface Categoria {
  nome: string;
  subcategorias: Subcategoria[];
}

interface ProdutosProps {
  categorias: Categoria[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  categoriaFiltro: string;
  setCategoriaFiltro: Dispatch<SetStateAction<string>>;
}

const navItems = [
  {
    titulo: "Portas de Alumínio",
    icone: <DoorOpen size={20} />,
    subItens: ["Portas Balcão", "Portas Camarão", "Portas de Abrir", "Portas Pivotantes"],
  },
  {
    titulo: "Portas de Madeira",
    icone: <DoorOpen size={20} />,
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
  { titulo: "Janelas de Madeira", icone: <Monitor size={20} />, subItens: ["Maxim-Ar", "Venezianas", "Vitrôs"] },
  {
    titulo: "Janelas de Alumínio",
    icone: <Monitor size={20} />,
    subItens: ["Basculantes", "Venezianas", "Vitrô de Correr"],
  },
  {
    titulo: "Acessórios",
    icone: <KeyRound size={20} />,
    subItens: ["Batentes de Madeira", "Dobradiças", "Fechaduras", "Guarnições", "Kit e Trilhos", "Puxadores"],
  },
];

export default function Produtos({
  categorias,
  search,
  setSearch,
  categoriaFiltro,
  setCategoriaFiltro,
}: ProdutosProps) {
  const [subItemAtivo, setSubItemAtivo] = useState<string | null>(null);
  const [mostrarMais, setMostrarMais] = useState(false);

  const categoriaAtual = categorias.find((c) => c.nome === categoriaFiltro);

  let produtosParaMostrar: Produto[] = [];
  if (categoriaAtual) {
    if (subItemAtivo) {
      const subcat = categoriaAtual.subcategorias.find((s) => s.nome === subItemAtivo);
      if (subcat) {
        produtosParaMostrar = subcat.produtos
          .filter((p) => p.nome.toLowerCase().includes(search.toLowerCase()))
          .slice(0, mostrarMais ? undefined : 4);
      }
    } else {
      produtosParaMostrar = categoriaAtual.subcategorias.flatMap((sub) =>
        sub.produtos.filter((p) => p.nome.toLowerCase().includes(search.toLowerCase()))
      );
      if (!mostrarMais) produtosParaMostrar = produtosParaMostrar.slice(0, 8);
    }
  }

  const toggleSubItem = (subItem: string) => {
    setMostrarMais(false);
    setSubItemAtivo((prev) => (prev === subItem ? null : subItem));
  };

  const formatarPreco = (preco?: number) =>
    preco !== undefined ? preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "";

  return (
    <section className={styles.produtosContainer}>
      {/* Menu categorias */}
      <nav className={styles.menuCategorias}>
        {navItems.map((item) => (
          <button
            key={item.titulo}
            type="button"
            className={`${styles.categoriaBtn} ${categoriaFiltro === item.titulo ? styles.categoriaAtiva : ""}`}
            onClick={() => {
              setCategoriaFiltro(item.titulo);
              setSubItemAtivo(null);
              setMostrarMais(false);
            }}
            aria-pressed={categoriaFiltro === item.titulo}
          >
            {item.icone} {item.titulo}
          </button>
        ))}
      </nav>

      {/* Submenu subcategorias */}
      <div className={styles.submenuSubcategorias}>
        {categoriaAtual &&
          navItems.find((item) => item.titulo === categoriaFiltro)?.subItens.map((sub) => (
            <button
              key={sub}
              type="button"
              className={`${styles.subcategoriaBtn} ${subItemAtivo === sub ? styles.subcategoriaAtiva : ""}`}
              onClick={() => toggleSubItem(sub)}
              aria-pressed={subItemAtivo === sub}
            >
              {sub}
            </button>
          ))}
      </div>

      {/* Busca */}
      <div className={styles.buscaWrapper}>
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.buscaInput}
          aria-label="Buscar produto"
        />
      </div>

      {/* Produtos grid */}
      <div className={styles.gridProdutos}>
        {produtosParaMostrar.length > 0 ? (
          produtosParaMostrar.map((produto, i) => (
            <motion.div
              key={`${produto.nome}-${i}`}
              className={styles.cardProduto}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.04, boxShadow: "0 10px 20px rgba(192, 57, 43, 0.2)" }}
              title={produto.nome}
            >
              <div className={styles.imagemWrapper}>
                <img
                  src={produto.imagem || "https://via.placeholder.com/300x300"}
                  alt={produto.nome}
                  className={styles.imagemProduto}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.nomeProduto}>{produto.nome}</h3>
              {produto.descricao && <p className={styles.descricaoProduto}>{produto.descricao}</p>}
              <div className={styles.footerCard}>
                <span className={styles.precoProduto}>{formatarPreco(produto.preco)}</span>
                <button className={styles.botaoCarrinho} aria-label={`Adicionar ${produto.nome} ao carrinho`}>
                  <ShoppingCart size={18} />
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className={styles.semResultados}>Nenhum produto encontrado.</p>
        )}
      </div>

      {produtosParaMostrar.length > (subItemAtivo ? 4 : 8) && (
        <button
          className={styles.botaoVerMais}
          onClick={() => setMostrarMais(!mostrarMais)}
          aria-expanded={mostrarMais}
        >
          {mostrarMais ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </section>
  );
}
