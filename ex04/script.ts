// Desafio: Sistema de Gestão de Biblioteca

// Objetivo: Criar um programa em TypeScript que gerencie empréstimos de livros em uma biblioteca.

interface Livro {
   id: number;
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


// Funcionalidades obrigatórias:

// Adicionar livros à biblioteca.

// Cadastrar usuários.

// Emprestar livro para um usuário (apenas se o livro estiver disponível).

// Devolver livro.

// Listar livros disponíveis.

// Listar livros emprestados de um usuário.

// Regras extras:
// Um usuário pode ter no máximo 3 livros emprestados ao mesmo tempo.

// Ao emprestar um livro, o campo disponivel deve mudar para false.

// Ao devolver, disponivel deve voltar para true.