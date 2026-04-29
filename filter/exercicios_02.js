const filtroMaiorIdade = (lista) => {
  const maiorIdade = lista.filter((list) => list.idade >= 18);

  return maiorIdade;
};

const lista = [
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Mateus",
    idade: 35,
  },
  {
    nome: "Gabriel",
    idade: 13,
  },
  {
    nome: "Fernando",
    idade: 15,
  },
];

console.log(filtroMaiorIdade(lista));
