const maiorCem = (valores) => {
  const maior = valores.filter((val) => {
    if (val.preco > 100) {
      return true;
    }
    return false;
  });

  return maior.map((produto) => {
    return {
      nome: produto.nome,
      preco: produto.preco,
    };
  });
};
const lista = [
  {
    nome: "banana",
    preco: 20,
  },
  {
    nome: "Notebook",
    preco: 1200,
  },
  {
    nome: "Televisão",
    preco: 1600,
  },
];
console.log(maiorCem(lista));
