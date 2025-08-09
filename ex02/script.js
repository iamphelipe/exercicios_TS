let tarefas = [];
// 2 - Crie uma função adicionarTarefa que receba os dados de uma tarefa e adicione em uma lista.
let academia = {
    titulo: "Academia",
    descricao: "treinar na SmartFit",
    dataCriacao: new Date,
    status: "em progesso",
};
let estudos = {
    titulo: "Estudar",
    descricao: "Estudar para concurso",
    dataCriacao: new Date,
    status: "pendente",
};
let ingles = {
    titulo: "Estudar",
    descricao: "Entra em um curso de inglês",
    dataCriacao: new Date,
    status: "pendente"
};
let futebol = {
    titulo: "Futebol",
    descricao: "Voltar a jogar futebol",
    dataCriacao: new Date,
    status: "concluida"
};
function adicionarTarefa(tarefa, tarefas) {
    const newTask = {
        id: tarefas.length + 1,
        ...tarefa
    };
    tarefas.push(newTask);
    return [...tarefas];
}
console.log(adicionarTarefa(academia, tarefas));
console.log(adicionarTarefa(estudos, tarefas));
console.log(adicionarTarefa(ingles, tarefas));
console.log(adicionarTarefa(futebol, tarefas));
// 3 - Crie uma função removerTarefa que remova uma tarefa pela id ou título.
function removerTarefa(tarefas, idTask) {
    const newListTaks = tarefas.filter(task => task.id !== idTask);
    return newListTaks;
}
tarefas = removerTarefa(tarefas, 3);
console.log(tarefas);
// 4 - Crie uma função listarTarefas que exibe todas as tarefas.
function listarTarefas(tarefas) {
    const listTask = tarefas.map(task => task);
    return listTask;
}
console.log(listarTarefas(tarefas));
// 5 - Crie uma função filtrarTarefasPorStatus que filtre as tarefas por status (pendente, concluída, etc).
function filtrarTarefasPorStatus(tarefas, status) {
    const taskFiltered = tarefas.filter(task => task.status === status);
    return taskFiltered;
}
let taskFilter = filtrarTarefasPorStatus(tarefas, "em progesso");
console.log(taskFilter);
// 6 - Crie uma função alterarStatusTarefa que mude o status de uma tarefa.
function alterarStatusTarefa(tarefa, status) {
    tarefa.status = status;
    return tarefa;
}
const newTaskStatus = alterarStatusTarefa(academia, "concluida");
console.log(newTaskStatus);
export {};
