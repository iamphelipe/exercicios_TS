const resultEl = document.querySelector(".result");
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const igual = document.querySelector(".igual");
const clear = document.querySelector(".clearAll");
const ce = document.querySelector(".clear-first");
const apagar = document.querySelector(".clear-num");
const virgula = document.querySelector(".virgula");
const inverter = document.querySelector(".operator:nth-child(1)");
let valorAtual = "";
let valorAnterior = "";
let operador = "";
function calculadora({ a, b, operacao }) {
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
        valorAtual += num.textContent;
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
        if (valorAtual === "")
            return;
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
export {};
