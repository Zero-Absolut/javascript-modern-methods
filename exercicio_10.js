const extrairNomes = (arrayNomes) => arrayNomes.map((nome) => nome.nome);

const nomes = [{ nome: "Ana" }, { nome: "Bruno" }, { nome: "Camila" }];

const nomesRetirados = extrairNomes(nomes);
