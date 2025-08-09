// Desafio: Sistema de Controle de Estoque
// Objetivo: Criar um programa em TypeScript que gerencie um pequeno estoque de produtos.
// Criar uma lista inicial com pelo menos 3 produtos.
let estoque = [
    {
        id: 1,
        nome: "Celular Iphone 13",
        preco: 4200,
        quantidade: 4
    },
    {
        id: 2,
        nome: "Notebook Nitro 5 Acer",
        preco: 4999,
        quantidade: 7
    },
    {
        id: 3,
        nome: "Televisão Samsung 60 polegadas",
        preco: 4200,
        quantidade: 2
    }
];
console.log(estoque);
const mouse = {
    nome: "Mouse Gamer Sem Fio G Pro X",
    preco: 599,
    quantidade: 3
};
// Criar funções para:
// Adicionar um novo produto no estoque.
function addProductEstoque(estoque, produto) {
    const newProduct = {
        id: estoque.length + 1,
        ...produto
    };
    estoque.push(newProduct);
    return estoque;
}
estoque = addProductEstoque(estoque, mouse);
console.log(estoque);
// Remover um produto pelo id.
function removerProduct(estoque, id) {
    const newEstoque = estoque.filter(p => p.id !== id);
    return newEstoque;
}
estoque = removerProduct(estoque, 3);
console.log(estoque);
// Atualizar a quantidade de um produto.
function updateQtdProduct(estoque, produto, quantidade) {
    let produtoFiltered = estoque.filter((p) => p.nome === produto.nome &&
        p.preco === produto.preco);
    produtoFiltered.map(p => p.quantidade = quantidade);
    return estoque;
}
estoque = updateQtdProduct(estoque, mouse, 6);
console.log(estoque);
// Listar todos os produtos.
function listarProduct(estoque) {
    return estoque;
}
listarProduct(estoque);
console.table(listarProduct(estoque));
// Calcular o valor total do estoque.
function calcularValorEstoque(estoque) {
    let total = 0;
    for (const item of estoque) {
        total += item.preco * item.quantidade;
    }
    return total;
}
console.log(estoque);
console.log("Valor do Estoque: R$" + calcularValorEstoque(estoque));
export {};
