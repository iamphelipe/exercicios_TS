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
   id?: number;
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
   },
   {
      id: 7,
      titulo: "Cinderela",
      autor: "Charles Perrault",
      anoPublicacao: 1697,
      disponivel: true
   }
]

let users: Usuario[] = [
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
]

console.log(biblioteca);
console.log(users);


// Funcionalidades obrigatórias:

// Adicionar livros à biblioteca.

function adicionarLivro(biblioteca: Livro[], livro: Livro) : Livro[] {
   
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
console.log(biblioteca);


// Cadastrar usuários.

function cadastrarUsuario(users: Usuario[], usuario: Usuario) {

   const newUser: Usuario = {
      id: users.length + 1,
      ...usuario
   }

   users.push(newUser)
   return users
}

users = cadastrarUsuario(users, {nome: "Dudu", livrosEmprestados:[]}) 

console.log(users);


// Emprestar livro para um usuário (apenas se o livro estiver disponível).

function bookToUser(user: Usuario | undefined, livro: Livro | undefined) {
   if(livro && user){
         if(user.livrosEmprestados.length >= 3) {
          console.log("Usuário já possui o limites de livros!")
          return user
         } 
         if(livro.disponivel === false) {
          console.log("Livro indisponível!");
          return user
         } 
   
   user.livrosEmprestados.push(livro)

   livro.disponivel = false
   }


   return {
      ...user
   }
}

bookToUser(users[2], biblioteca[0])
bookToUser(users[5], biblioteca[4]) // Turma da Monica Jovem
bookToUser(users[5], biblioteca[2]) // O Garoto do Pijama Listrado
bookToUser(users[5], biblioteca[5]) // Diário de Um Banana
console.log("Validação abaixo")
let validation = bookToUser(users[5], biblioteca[6])
console.log(validation) 


console.log(biblioteca);
console.log(users);


// Devolver livro.

function bookToLibrary(user: Usuario | undefined, livro: Livro | undefined ) {

   if(user && livro) {
      if(user.livrosEmprestados.length === 0) return console.log("Usuário não possui livros!")

      livro.disponivel = true
   
      let newBooksFiltered = user.livrosEmprestados.filter(b => b.id !== livro.id)

      user.livrosEmprestados = newBooksFiltered

      console.log(livro);

      return user

   }
   
}

bookToLibrary(users[5], biblioteca[4])
console.log(users);
console.log(biblioteca);



// Listar livros disponíveis.

function listBookAvailable() {
   let listBook = biblioteca.filter(b => b.disponivel === true)

   return listBook

}

let livrosDisponiveis = listBookAvailable()
console.log(livrosDisponiveis);


// Listar livros emprestados de um usuário.

function booksLeanUser(user: Usuario | undefined) {

   if (user) {
     if (user.livrosEmprestados.length === 0) return console.log('Usuário não possui livro disponível!')

     return user.livrosEmprestados.map((b) => b)
   }

}

let livrosEmprestadosUsuario = booksLeanUser(users[2])
console.log(livrosEmprestadosUsuario);



// Regras extras:
// Um usuário pode ter no máximo 3 livros emprestados ao mesmo tempo.

// Ao emprestar um livro, o campo disponivel deve mudar para false.

// Ao devolver, disponivel deve voltar para true.


// SUGESTÕES DE BÔNUS

// Criar funções para buscar livros por título ou autor.

function searchBooks(busca: string) {
   let bookSearched = biblioteca.find(b => b.titulo == busca) || biblioteca.find(b => b.autor == busca)

   if(!bookSearched) return console.log("Livro não encontrado!")
   return bookSearched
}

let book =  searchBooks("Maurício de Souza")
console.log(book);




// Adicionar a data do empréstimo e calcular quantos dias o usuário ficou com o livro