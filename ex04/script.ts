// Desafio: Sistema de Gestão de Biblioteca

// Objetivo: Criar um programa em TypeScript que gerencie empréstimos de livros em uma biblioteca.

interface Livro {
   id?: number;
   titulo: string;
   autor: string;
   anoPublicacao: number;
   disponivel: boolean
}

interface Usuario {
   id: number;
   nome: string;
   livrosEmprestados: Livro[]
}

let biblioteca : Livro[] = [
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
]

console.log(biblioteca);

// Funcionalidades obrigatórias:

// Adicionar livros à biblioteca.

function adicionarLivro(biblioteca: Livro[], livro: Livro) {
   
   const newBook = {
      id: biblioteca.length + 1,
      ...livro
   }

   biblioteca.push(newBook)

   return biblioteca
}

let reiLeao: Livro = {
   titulo: "O Rei Leão",
   autor: "Chris Sanders",
   anoPublicacao: 1994,
   disponivel: false
}

biblioteca = adicionarLivro(biblioteca, reiLeao)

// Cadastrar usuários.

// Emprestar livro para um usuário (apenas se o livro estiver disponível).

// Devolver livro.

// Listar livros disponíveis.

// Listar livros emprestados de um usuário.

// Regras extras:
// Um usuário pode ter no máximo 3 livros emprestados ao mesmo tempo.

// Ao emprestar um livro, o campo disponivel deve mudar para false.

// Ao devolver, disponivel deve voltar para true.