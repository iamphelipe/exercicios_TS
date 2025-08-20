let dateInicio = document.querySelector(".dateInicio");
let dateFinal = document.querySelector(".dateFinal");
let result = document.querySelector("div");
async function fetchAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function displaySreen() {
    if (dateInicio && dateFinal && result) {
        result.innerHTML = "";
        if (dateInicio.value === "" || dateFinal.value === "")
            return;
        let inicio = dateInicio.value;
        let final = dateFinal.value;
        let data = await fetchAPI(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`);
        console.log(data);
        data.map(d => {
            result.innerHTML += `
         <ul>
            <li>Nome: ${d.nome} | Preço: ${d.preco} | ${d.status}</li>
         </ul>
         `;
        });
    }
}
displaySreen();
if (dateInicio && dateFinal) {
    dateInicio.addEventListener("input", displaySreen);
    dateFinal.addEventListener("input", displaySreen);
}
export {};
