const filtrarPares = (value) => {
  const numerosPares = value.filter((numeros) => numeros % 2 === 0);

  return numerosPares;
};

const numeros = [1, 2, 40, 5, 15, 3];

console.log(numerosPares(numeros));
