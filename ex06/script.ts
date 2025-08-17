function parOrImpar(n: number) {

   if(n == undefined) return console.log("Insere um valor")

   if(n % 2 == 0) {
      return console.log(`${n} é par!`);
   } else {
      return console.log(`${n} é ímpar!`);
   }
}

parOrImpar(23)