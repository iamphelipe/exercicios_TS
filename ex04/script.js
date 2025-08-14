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
    },
    {
        id: 5,
        titulo: "Turma da Mônica Jovem",
        autor: "Maurício de Souza",
        anoPublicacao: 1989,
        disponivel: true
    },
    {
        id: 6,
        titulo: "Diário de Um Banana",
        autor: "Jeff Kinney",
        anoPublicacao: 2007,
        disponivel: true
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
    },
    {
        id: 5,
        nome: "Renato",
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
// Emprestar livro para um usuário (apenas se o livro estiver disponível).
function bookToUser(user, livro) {
    if (livro && user) {
        if (livro.disponivel === false)
            return console.log("Livro indisponível!");
        user.livrosEmprestados.push(livro);
        livro.disponivel = false;
    }
    return {
        ...user
    };
}
bookToUser(users[2], biblioteca[0]);
bookToUser(users[5], biblioteca[4]);
bookToUser(users[5], biblioteca[2]);
bookToUser(users[5], biblioteca[5]);
console.log(biblioteca);
console.log(users);
// Devolver livro.
function bookToLibrary(user, livro) {
    if (user && livro) {
        if (user.livrosEmprestados.length === 0)
            return console.log("Usuário não possui livros!");
        livro.disponivel = true;
        let newBooksFiltered = user.livrosEmprestados.filter(b => b.id !== livro.id);
        user.livrosEmprestados = newBooksFiltered;
        console.log(livro);
        return user;
    }
}
bookToLibrary(users[5], biblioteca[4]);
console.log(users);
console.log(biblioteca);
export {};
// Listar livros disponíveis.
// Listar livros emprestados de um usuário.
// Regras extras:
// Um usuário pode ter no máximo 3 livros emprestados ao mesmo tempo.
// Ao emprestar um livro, o campo disponivel deve mudar para false.
// Ao devolver, disponivel deve voltar para true.
