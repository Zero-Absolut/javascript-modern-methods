const retornaNome = (objeto) => {
  const nomes = objeto.map((objeto) => objeto.nome);

  return nomes;
};

const pessoas = [
  { nome: "Mateus", idade: 20 },
  { nome: "Ana", idade: 25 },
];

console.log(retornaNome(pessoas));
