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
   status: "em progesso",
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


// 3 - Crie uma função removerTarefa que remova uma tarefa pela id ou título.

// 4 - Crie uma função listarTarefas que exibe todas as tarefas.

// 5 - Crie uma função filtrarTarefasPorStatus que filtre as tarefas por status (pendente, concluída, etc).

// 6 - Crie uma função alterarStatusTarefa que mude o status de uma tarefa.



