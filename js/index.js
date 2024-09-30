const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);

  const classificacao =
    imc < 18.5
      ? "Abaixo do peso"
      : imc < 24.9
      ? "Peso normal"
      : imc < 29.9
      ? "Sobrepeso"
      : imc < 34.9
      ? "Obesidade Classe I"
      : imc < 39.9
      ? "Obesidade Classe II"
      : "Obesidade Classe III";

  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";
  return { imc: imc.toFixed(2), classificacao };
};

let resultados = [];

const adicionarResultado = (resultado) => {
  resultados.push(resultado);

  return resultados
    .map(
      (resultado, index) =>
        `Resultado ${index + 1}: IMC ${resultado.imc} - ${
          resultado.classificacao
        }`
    )
    .join("\n");
};

const calcularBtn = document.getElementById("calcular-btn");
const resultadoDiv = document.getElementById("resultado");

calcularBtn.addEventListener("click", () => {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (!altura || !peso) {
    resultadoDiv.textContent = "Por favor, insira valores válidos.";
    return;
  }

  const resultado = calcularIMC(peso, altura);

  resultadoDiv.textContent = `Seu IMC é ${resultado.imc} (${resultado.classificacao}).`;
});
