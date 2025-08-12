// Desafio: Sistema de Gestão de Biblioteca
let biblioteca = [
    {
        id: 1,
        titulo: "A Branca de Neve",
        autor: "Jakob Grimm",
        anoPublicacao: 1812,
        disponivel: true
    },
    {
        id: 2,
        titulo: "Pinóquio",
        autor: "Carlo Collodi",
        anoPublicacao: 1940,
        disponivel: false
    },
    {
        id: 3,
        titulo: "O Garoto do Pijama Listrado",
        autor: "John Boyne",
        anoPublicacao: 2006,
        disponivel: true
    },
    {
        id: 4,
        titulo: "Crepúsculo",
        autor: "Stephenie Meyer",
        anoPublicacao: 2008,
        disponivel: false
    }
];
let users = [
    {
        id: 1,
        nome: "Phelipe",
        livrosEmprestados: []
    },
    {
        id: 2,
        nome: "José Martinho",
        livrosEmprestados: []
    },
    {
        id: 3,
        nome: "Dina",
        livrosEmprestados: []
    },
    {
        id: 4,
        nome: "Isadora",
        livrosEmprestados: []
    }
];
console.log(biblioteca);
console.log(users);
// Funcionalidades obrigatórias:
// Adicionar livros à biblioteca.
function adicionarLivro(biblioteca, livro) {
    const newBook = {
        id: biblioteca.length + 1,
        ...livro
    };
    biblioteca.push(newBook);
    return biblioteca;
}
let reiLeao = {
    titulo: "O Rei Leão",
    autor: "Chris Sanders",
    anoPublicacao: 1994,
    disponivel: false
};
biblioteca = adicionarLivro(biblioteca, reiLeao);
console.log(biblioteca);
// Cadastrar usuários.
function cadastrarUsuario(users, usuario) {
    const newUser = {
        id: users.length + 1,
        ...usuario
    };
    users.push(newUser);
    return users;
}
users = cadastrarUsuario(users, { nome: "Dudu", livrosEmprestados: [] });
console.log(users);
export {};
// Emprestar livro para um usuário (apenas se o livro estiver disponível).
// Devolver livro.
// Listar livros disponíveis.
// Listar livros emprestados de um usuário.
// Regras extras:
// Um usuário pode ter no máximo 3 livros emprestados ao mesmo tempo.
// Ao emprestar um livro, o campo disponivel deve mudar para false.
// Ao devolver, disponivel deve voltar para true.
