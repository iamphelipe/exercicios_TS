// 1 - Defina tipos para a tarefa (interface ou type).
type Status = "pendente" | "concluida" | "em progesso"

interface Tarefa {
   id?: number;
   titulo: string;
   descricao: string;
   dataCriacao: Date;
   status: Status;
}

let tarefas: Tarefa[] = []

// 2 - Crie uma função adicionarTarefa que receba os dados de uma tarefa e adicione em uma lista.

let academia: Tarefa = {
   titulo: "Academia",
   descricao: "treinar na SmartFit",
   dataCriacao: new Date,
   status: "em progesso",
}

let estudos: Tarefa = {
   titulo: "Estudar",
   descricao: "Estudar para concurso",
   dataCriacao: new Date,
   status: "pendente",
}

let ingles: Tarefa = {
   titulo: "Estudar",
   descricao: "Entra em um curso de inglês",
   dataCriacao: new Date,
   status: "pendente"
}

let futebol: Tarefa = {
   titulo: "Futebol",
   descricao: "Voltar a jogar futebol",
   dataCriacao: new Date,
   status: "concluida"
}

function adicionarTarefa(tarefa : Tarefa, tarefas: Tarefa[]) : Tarefa[] {

   const newTask = {
      id: tarefas.length + 1,
      ...tarefa
      
   }

    tarefas.push(newTask)

    return [...tarefas]
}

console.log(adicionarTarefa(academia, tarefas));
console.log(adicionarTarefa(estudos, tarefas));
console.log(adicionarTarefa(ingles, tarefas));
console.log(adicionarTarefa(futebol, tarefas));


// 3 - Crie uma função removerTarefa que remova uma tarefa pela id ou título.

function removerTarefa(tarefas: Tarefa[], idTask: number) : Tarefa[] {

   const newListTaks = tarefas.filter(task => task.id !== idTask)
   
   return newListTaks
}

tarefas = removerTarefa(tarefas, 3)

console.log(tarefas)

// 4 - Crie uma função listarTarefas que exibe todas as tarefas.

function listarTarefas(tarefas : Tarefa[]) : Tarefa[] {

   const listTask = tarefas.map(task => task) 

   return listTask
   
}

console.log(listarTarefas(tarefas));

// 5 - Crie uma função filtrarTarefasPorStatus que filtre as tarefas por status (pendente, concluída, etc).

function filtrarTarefasPorStatus(tarefas: Tarefa[], status: Status) : Tarefa[] {

   const taskFiltered = tarefas.filter(task => task.status === status)

   return taskFiltered
}

let taskFilter = filtrarTarefasPorStatus(tarefas, "em progesso")

console.log(taskFilter);


// 6 - Crie uma função alterarStatusTarefa que mude o status de uma tarefa.
