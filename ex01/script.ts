type Operacao = "soma" | "subtracao" | "multiplicacao" | "divisao"

interface Calculadora {
   a: number
   b: number
   operacao: Operacao
}

function calculadora({a, b, operacao} : Calculadora ) : number {
   switch (operacao) {
      case "soma":
         return a + b
      case "subtracao":
         return a - b
      case "multiplicacao":
         return a * b
      case "divisao":
         return a / b
      default:
         throw new Error("Dados inválidos!")
   }
}

let resultado = calculadora({a: 9, b: 10, operacao: "subtracao"})
console.log(resultado);
