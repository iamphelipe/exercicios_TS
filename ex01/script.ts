const resultEl = document.querySelector(".result") as HTMLSpanElement;
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const igual = document.querySelector(".igual") as HTMLSpanElement;
const clear = document.querySelector(".clearAll") as HTMLSpanElement;
const ce = document.querySelector(".clear-first") as HTMLSpanElement;
const apagar = document.querySelector(".clear-num") as HTMLSpanElement;
const virgula = document.querySelector(".virgula") as HTMLSpanElement;
const inverter = document.querySelector(".operator:nth-child(1)") as HTMLSpanElement;

let valorAtual = "";
let valorAnterior = "";
let operador: Operacao | "" = "";


type Operacao = "soma" | "subtracao" | "multiplicacao" | "divisao";

interface Calculadora {
   a: number;
   b: number;
   operacao: Operacao;
}

function calculadora({ a, b, operacao }: Calculadora): number {
   switch (operacao) {
      case "soma":
         return a + b;
      case "subtracao":
         return a - b;
      case "multiplicacao":
         return a * b;
      case "divisao":
         return a / b;
      default:
         throw new Error("Operação inválida!");
   }
}


nums.forEach((num) => {
  num.addEventListener("click", () => {
    valorAtual += num.textContent!;
    atualizarDisplay();
  });
});

virgula.addEventListener("click", () => {
  if (!valorAtual.includes(",")) {
    valorAtual += ",";
    atualizarDisplay();
  }
});

inverter.addEventListener("click", () => {
  if (valorAtual) {
    valorAtual = String(parseFloat(valorAtual.replace(",", ".")) * -1).replace(".", ",");
    atualizarDisplay();
  }
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (valorAtual === "") return;
    valorAnterior = valorAtual.replace(",", ".");
    valorAtual = "";
    const opSimbolo = op.textContent;
    switch (opSimbolo) {
      case "+":
        operador = "soma";
        break;
      case "-":
        operador = "subtracao";
        break;
      case "X":
        operador = "multiplicacao";
        break;
      case "/":
        operador = "divisao";
        break;
    }
  });
});

igual.addEventListener("click", () => {
  if (valorAnterior && valorAtual && operador) {
    const resultado = calculadora({
      a: parseFloat(valorAnterior),
      b: parseFloat(valorAtual.replace(",", ".")),
      operacao: operador,
    });
    valorAtual = String(resultado).replace(".", ",");
    valorAnterior = "";
    operador = "";
    atualizarDisplay();
  }
});

clear.addEventListener("click", () => {
  valorAtual = "";
  valorAnterior = "";
  operador = "";
  atualizarDisplay();
});

ce.addEventListener("click", () => {
  valorAtual = "";
  atualizarDisplay();
});

apagar.addEventListener("click", () => {
  valorAtual = valorAtual.slice(0, -1);
  atualizarDisplay();
});

function atualizarDisplay() {
  resultEl.textContent = valorAtual || "0";
}