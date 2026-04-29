const adicionaStatus = (st) => {
  return st.map((pessoa) => {
    let status;

    if (pessoa.idade >= 18) {
      status = "Adulto";
    } else {
      status = "Criança";
    }
    return {
      nome: pessoa.nome,
      idade: pessoa.idade,
      status: status,
    };
  });
};

const pessoas = [
  { nome: "Lucas", idade: 17 },
  { nome: "Marina", idade: 22 },
  { nome: "Carlos", idade: 35 },
  { nome: "Ana", idade: 15 },
];

const resultado = adicionaStatus(pessoas);
