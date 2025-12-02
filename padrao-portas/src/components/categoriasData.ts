export interface Produto {
  nome: string;
  imagem: string; // placeholder por enquanto
  descricao?: string;
  preco?: number;
  subcategoria?: string;
}

export interface Subcategoria {
  nome: string;
  produtos: Produto[];
}

export interface Categoria {
  nome: string;
  subcategorias: Subcategoria[];
}

export const categoriasData: Categoria[] = [
  {
    nome: "Portas de Alumínio",
    subcategorias: [
      {
        nome: "Portas Balcão",
        produtos: [
          { nome: "Porta Balcão 1", imagem: "", preco: 200 },
          { nome: "Porta Balcão 2", imagem: "", preco: 205 },
          { nome: "Porta Balcão 3", imagem: "", preco: 210 },
          { nome: "Porta Balcão 4", imagem: "", preco: 215 },
        ]
      },
      {
        nome: "Portas Camarão",
        produtos: [
          { nome: "Porta Camarão 1", imagem: "", preco: 220 },
          { nome: "Porta Camarão 2", imagem: "", preco: 225 },
          { nome: "Porta Camarão 3", imagem: "", preco: 230 },
          { nome: "Porta Camarão 4", imagem: "", preco: 235 },
        ]
      },
      {
        nome: "Portas de Abrir",
        produtos: [
          { nome: "Porta Abrir 1", imagem: "", preco: 240 },
          { nome: "Porta Abrir 2", imagem: "", preco: 245 },
          { nome: "Porta Abrir 3", imagem: "", preco: 250 },
          { nome: "Porta Abrir 4", imagem: "", preco: 255 },
        ]
      },
      {
        nome: "Portas Pivotantes",
        produtos: [
          { nome: "Porta Pivotante 1", imagem: "", preco: 260 },
          { nome: "Porta Pivotante 2", imagem: "", preco: 265 },
          { nome: "Porta Pivotante 3", imagem: "", preco: 270 },
          { nome: "Porta Pivotante 4", imagem: "", preco: 275 },
        ]
      },
    ]
  },
  {
    nome: "Portas de Madeira",
    subcategorias: [
      {
        nome: "Folhas de Porta",
        produtos: [
          { nome: "Folha Porta 1", imagem: "", preco: 150 },
          { nome: "Folha Porta 2", imagem: "", preco: 155 },
          { nome: "Folha Porta 3", imagem: "", preco: 160 },
          { nome: "Folha Porta 4", imagem: "", preco: 165 },
        ]
      },
      {
        nome: "Kit Porta Pronta",
        produtos: [
          { nome: "Kit Porta 1", imagem: "", preco: 170 },
          { nome: "Kit Porta 2", imagem: "", preco: 175 },
          { nome: "Kit Porta 3", imagem: "", preco: 180 },
          { nome: "Kit Porta 4", imagem: "", preco: 185 },
        ]
      },
      {
        nome: "Portas Balcão",
        produtos: [
          { nome: "Porta Balcão 1", imagem: "", preco: 190 },
          { nome: "Porta Balcão 2", imagem: "", preco: 195 },
          { nome: "Porta Balcão 3", imagem: "", preco: 200 },
          { nome: "Porta Balcão 4", imagem: "", preco: 205 },
        ]
      },
      {
        nome: "Portas Camarão",
        produtos: [
          { nome: "Porta Camarão 1", imagem: "", preco: 210 },
          { nome: "Porta Camarão 2", imagem: "", preco: 215 },
          { nome: "Porta Camarão 3", imagem: "", preco: 220 },
          { nome: "Porta Camarão 4", imagem: "", preco: 225 },
        ]
      },
      {
        nome: "Portas de Correr",
        produtos: [
          { nome: "Porta Correr 1", imagem: "", preco: 230 },
          { nome: "Porta Correr 2", imagem: "", preco: 235 },
          { nome: "Porta Correr 3", imagem: "", preco: 240 },
          { nome: "Porta Correr 4", imagem: "", preco: 245 },
        ]
      },
      {
        nome: "Portas Especiais",
        produtos: [
          { nome: "Porta Especial 1", imagem: "", preco: 250 },
          { nome: "Porta Especial 2", imagem: "", preco: 255 },
          { nome: "Porta Especial 3", imagem: "", preco: 260 },
          { nome: "Porta Especial 4", imagem: "", preco: 265 },
        ]
      },
      {
        nome: "Portas Internas",
        produtos: [
          { nome: "Porta Interna 1", imagem: "", preco: 270 },
          { nome: "Porta Interna 2", imagem: "", preco: 275 },
          { nome: "Porta Interna 3", imagem: "", preco: 280 },
          { nome: "Porta Interna 4", imagem: "", preco: 285 },
        ]
      },
      {
        nome: "Portas Maciças",
        produtos: [
          { nome: "Porta Maciça 1", imagem: "", preco: 290 },
          { nome: "Porta Maciça 2", imagem: "", preco: 295 },
          { nome: "Porta Maciça 3", imagem: "", preco: 300 },
          { nome: "Porta Maciça 4", imagem: "", preco: 305 },
        ]
      },
      {
        nome: "Portas Pivotantes",
        produtos: [
          { nome: "Porta Pivotante 1", imagem: "", preco: 310 },
          { nome: "Porta Pivotante 2", imagem: "", preco: 315 },
          { nome: "Porta Pivotante 3", imagem: "", preco: 320 },
          { nome: "Porta Pivotante 4", imagem: "", preco: 325 },
        ]
      },
    ]
  },
  {
    nome: "Janelas de Madeira",
    subcategorias: [
      {
        nome: "Maxim-Ar",
        produtos: [
          { nome: "Janela Maxim-Ar 1", imagem: "", preco: 180 },
          { nome: "Janela Maxim-Ar 2", imagem: "", preco: 185 },
          { nome: "Janela Maxim-Ar 3", imagem: "", preco: 190 },
          { nome: "Janela Maxim-Ar 4", imagem: "", preco: 195 },
        ]
      },
      {
        nome: "Venezianas",
        produtos: [
          { nome: "Janela Veneziana 1", imagem: "", preco: 200 },
          { nome: "Janela Veneziana 2", imagem: "", preco: 205 },
          { nome: "Janela Veneziana 3", imagem: "", preco: 210 },
          { nome: "Janela Veneziana 4", imagem: "", preco: 215 },
        ]
      },
      {
        nome: "Vitrôs",
        produtos: [
          { nome: "Janela Vitrô 1", imagem: "", preco: 220 },
          { nome: "Janela Vitrô 2", imagem: "", preco: 225 },
          { nome: "Janela Vitrô 3", imagem: "", preco: 230 },
          { nome: "Janela Vitrô 4", imagem: "", preco: 235 },
        ]
      },
    ]
  },
  {
    nome: "Janelas de Alumínio",
    subcategorias: [
      {
        nome: "Basculantes",
        produtos: [
          { nome: "Janela Basculante 1", imagem: "", preco: 190 },
          { nome: "Janela Basculante 2", imagem: "", preco: 195 },
          { nome: "Janela Basculante 3", imagem: "", preco: 200 },
          { nome: "Janela Basculante 4", imagem: "", preco: 205 },
        ]
      },
      {
        nome: "Venezianas",
        produtos: [
          { nome: "Janela Veneziana Alumínio 1", imagem: "", preco: 210 },
          { nome: "Janela Veneziana Alumínio 2", imagem: "", preco: 215 },
          { nome: "Janela Veneziana Alumínio 3", imagem: "", preco: 220 },
          { nome: "Janela Veneziana Alumínio 4", imagem: "", preco: 225 },
        ]
      },
      {
        nome: "Vitrô de Correr",
        produtos: [
          { nome: "Janela Vitrô Correr 1", imagem: "", preco: 230 },
          { nome: "Janela Vitrô Correr 2", imagem: "", preco: 235 },
          { nome: "Janela Vitrô Correr 3", imagem: "", preco: 240 },
          { nome: "Janela Vitrô Correr 4", imagem: "", preco: 245 },
        ]
      },
    ]
  },
  {
    nome: "Acessórios",
    subcategorias: [
      {
        nome: "Batentes de Madeira",
        produtos: [
          { nome: "Batente 1", imagem: "", preco: 50 },
          { nome: "Batente 2", imagem: "", preco: 55 },
          { nome: "Batente 3", imagem: "", preco: 60 },
          { nome: "Batente 4", imagem: "", preco: 65 },
        ]
      },
      {
        nome: "Dobradiças",
        produtos: [
          { nome: "Dobradiça 1", imagem: "", preco: 70 },
          { nome: "Dobradiça 2", imagem: "", preco: 75 },
          { nome: "Dobradiça 3", imagem: "", preco: 80 },
          { nome: "Dobradiça 4", imagem: "", preco: 85 },
        ]
      },
      {
        nome: "Fechaduras",
        produtos: [
          { nome: "Fechadura 1", imagem: "", preco: 90 },
          { nome: "Fechadura 2", imagem: "", preco: 95 },
          { nome: "Fechadura 3", imagem: "", preco: 100 },
          { nome: "Fechadura 4", imagem: "", preco: 105 },
        ]
      },
      {
        nome: "Guarnições",
        produtos: [
          { nome: "Guarnição 1", imagem: "", preco: 110 },
          { nome: "Guarnição 2", imagem: "", preco: 115 },
          { nome: "Guarnição 3", imagem: "", preco: 120 },
          { nome: "Guarnição 4", imagem: "", preco: 125 },
        ]
      },
      {
        nome: "Kit e Trilhos",
        produtos: [
          { nome: "Kit e Trilho 1", imagem: "", preco: 130 },
          { nome: "Kit e Trilho 2", imagem: "", preco: 135 },
          { nome: "Kit e Trilho 3", imagem: "", preco: 140 },
          { nome: "Kit e Trilho 4", imagem: "", preco: 145 },
        ]
      },
      {
        nome: "Puxadores",
        produtos: [
          { nome: "Puxador 1", imagem: "", preco: 150 },
          { nome: "Puxador 2", imagem: "", preco: 155 },
          { nome: "Puxador 3", imagem: "", preco: 160 },
          { nome: "Puxador 4", imagem: "", preco: 165 },
        ]
      },
    ]
  },
];
