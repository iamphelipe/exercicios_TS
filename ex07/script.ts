let dateInicio = document.querySelector<HTMLInputElement>(".dateInicio")
let dateFinal = document.querySelector<HTMLInputElement>(".dateFinal")

async function fetchAPI(url: string) {
   const response = await fetch(url)
   const data = await response.json()
   // console.log(data)

   return data
}


async function displaySreen() {
   let data = await fetchAPI("https://data.origamid.dev/vendas")
   if(dateInicio) {
            console.log(dateInicio.value);
   }
   
}

displaySreen()

if(dateInicio){
   dateInicio.addEventListener("input", displaySreen)
}