// Seleção de elementos
// QuerySelector - getElementBy...
const addForm = document.querySelector('#form')

const inputTask = document.getElementById('input-task')
const listTask = document.querySelector('#list-tasks')
const editForm = document.getElementById('edit-form')
const editInput = document.getElementById('edit-input')
const cancelEditBtn = document.getElementById('cancel-edit-btn')
const searchInput = document.getElementById('search-input')
const eraseBtn = document.getElementById('erase-button')
const filterBtn = document.getElementById('filter-select')

// Variabel para armazenar o valor antigo da tarefa
let oldInputValue;

// Funções
// Função para salvar a tarefa na lista de tarefa
const saveTask = (text) => {
    // Criar um novo elemento HTML
    const task = document.createElement("div")
    // Adicionar uma calss nesse elemento
    task.classList.add("task")
    // Criar o título (H3) que é a descrição da tarefa
    const taskTitle = document.createElement("h3");
    taskTitle.innerText = text
    // Tornar esse título um filho do elemento pai "div"
    task.appendChild(taskTitle)

    // Criar os botões
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-task")
    // Adiciona um componente HTML ao nosso elemento doneBtn
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    task.appendChild(doneBtn)

    // Botão de editar
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-task")
    // Adiciona um componente HTML ao nosso elemento editBtn
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    task.appendChild(editBtn)

    // Botão de apagar
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-task")
    // Adiciona um componente HTML ao nosso elemento deleteBtn
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    task.appendChild(deleteBtn)

    // Adicionar a tarefa inteira na lista de tarefas
    listTask.appendChild(task)

    // Limpar campo de entrada da tarefa
    inputTask.value=""
}



// Eventos
// Trabalhar com o formulário de adição e o evento submit (enviar formulário)
addForm.addEventListener("submit", (elem)=>{
    elem.preventDefault()
    const inputValue = inputTask.value
    // Debug -> console.log("O valor digitado foi: " + inputValue)
    if(inputValue){
        saveTask(inputValue)
    }
})