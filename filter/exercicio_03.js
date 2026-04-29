const usuariosAtivos = (lista) => {
  const ativos = lista.filter((at) => at.status === "ativo" && at.idade >= 18);

  return ativos.map((usuarioAtual) => usuarioAtual.nome);
};

const lista = [
  {
    nome: "Ana",
    idade: 18,
    status: "ativo",
  },
  {
    nome: "Fernando",
    idade: 22,
    status: "ativo",
  },
  {
    nome: "Mateus",
    idade: 35,
    status: "inativo",
  },
  {
    nome: "Luis",
    idade: 32,
    status: "ativo",
  },
];

console.log(usuariosAtivos(lista));
