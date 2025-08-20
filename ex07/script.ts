let dateInicio = document.querySelector<HTMLInputElement>(".dateInicio")
let dateFinal = document.querySelector<HTMLInputElement>(".dateFinal")
let result = document.querySelector<HTMLDivElement>("div")


interface Venda {
   id: string;
   nome: string;
   preco: string;
   status: string;
}

async function fetchAPI(url: string) {
   const response = await fetch(url)
   const data = await response.json()

   return data
}


async function displaySreen() {
   if(dateInicio && dateFinal && result) {
      if(dateInicio.value === "" || dateFinal.value === "") return

      let inicio = dateInicio.value
      let final = dateFinal.value
      
      let data : Venda[] = await fetchAPI(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)

      console.log(data);

      data.map(d => {
         result.innerHTML += `
         
         `
      })

   }
   
}

displaySreen()

if(dateInicio && dateFinal){
   dateInicio.addEventListener("input", displaySreen)
   dateFinal.addEventListener("input", displaySreen)
}