async function fetchAPI() {
    const response = await fetch("https://data.origamid.dev/vendas");
    const data = await response.json();
    console.log(data);
}
fetchAPI();
export {};
