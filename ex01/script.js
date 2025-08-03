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
            throw new Error("Dados inválidos!");
    }
}
let resultado = calculadora({ a: 9, b: 10, operacao: "subtracao" });
console.log(resultado);
export {};
