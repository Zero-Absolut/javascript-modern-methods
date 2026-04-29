const mediaNota = (nota) => {
  const media = nota.map((m) => {
    let situacao;

    if (m.nota >= 7) {
      situacao = "aprovado";
    } else {
      situacao = "reprovado";
    }

    return {
      nome: m.nome,
      nota: m.nota,
      situacao: situacao,
    };
  });

  return media;
};

const resultado = mediaNota([
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 7 },
]);
console.log(resultado);
