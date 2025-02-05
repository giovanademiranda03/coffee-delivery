export interface ProductProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  value: number;
  quantity: number;
}

export const DataProducts: ProductProps[] = [
  {
    id: 1,
    title: "Café Pele",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["Tradicional"],
    image: "/imgs/coffeePele.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 2,
    title: "Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["Tradicional"],
    image: "/imgs/coffeeAmericano.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 3,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["Tradicional", "Com Leite"],
    image: "/imgs/coffeeCappuccino.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 4,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["Tradicional", "Com Leite"],
    image: "/imgs/coffeeLatte.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 5,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["Tradicional", "Com Leite"],
    image: "/imgs/coffeeMacchiato.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 6,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["Tradicional"],
    image: "/imgs/coffeeExpressoCremoso.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 7,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["Tradicional", "Gelado"],
    image: "/imgs/coffeeCafeGelado.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 8,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["Tradicional", "Com Leite"],
    image: "/imgs/coffeeCafeComLeite.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 9,
    title: "Mochaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["Tradicional", "Com Leite"],
    image: "/imgs/coffeeMochaccino.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 10,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["Especial", "Com Leite"],
    image: "/imgs/coffeeChocolateQuente.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 11,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["Especial", "Alcoólico", "Gelado"],
    image: "/imgs/coffeeCubano.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 12,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["Tradicional", "Com Leite"],
    image: "/imgs/coffeeMacchiato.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 13,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["Especial"],
    image: "/imgs/coffeeHavaiano.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 14,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["Especial"],
    image: "/imgs/coffeeArabe.svg",
    value: 9.9,
    quantity: 0,
  },
  {
    id: 15,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["Especial", "Alcoólico"],
    image: "/imgs/coffeeIrlandes.svg",
    value: 9.9,
    quantity: 0,
  },
];
export const getProductById = (id: number): ProductProps | undefined => {
  return DataProducts.find((p) => p.id === id);
};

export const getAllProducts = (): ProductProps[] => DataProducts;
