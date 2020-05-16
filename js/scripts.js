let todoItems = [];

//função para adicionar o TO-DK
function addTodo (text) {
    const todo = {
        text, 
        checked: false,
        id: Date.now(), //mostra o número de milisegundos desde 1.1.1970, então, esse valor sempre mudar 
        
    }
    todoItems.push(todo);
    console.log('LISTA -', todoItems); 

    //Referencia UL no HTML
    const list = document.querySelector('.js-todo-list'); 
    //element.insertAdjacentHTML serve para inserir um texto HTML dentro do JS
    //beforeend adiciona o texto no final do elemento
    //data-key serve como um idenficador único do elemento, assim cada tarefa tem um id
    list.insertAdjacentHTML('beforeend', 
    `<li class="todo-item" data-key="${todo.id}"> 
        <input id="${todo.id}" type="checkbox" /> 
        <label for="${todo.id}" class="tick js-tick"> </label>
        <span>${todo.text}</span> 
        <button class="delete-todo js-delete-todo">
            <svg>
                <use href="#delete-icon"> </use> 
            </svg>
        </button> 

    </li>`)
}

//função para checar o to-do 
function checkTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;

    const item = document.querySelector(`[data-key='${key}']`);
    if(todoItems[index].checked){
        item.classList.add('done');
    }else {
        item.classList.remove('done');
    }
}

//verifica o evento forumlário e o valor input
const form = document.querySelector('.js-form'); 
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input')

    //trim ignora os espaços e só le os textos
    var text = input.value.trim(); 
    if(text !== '') {
        addTodo(text); 
        input.value = ''; 
        input.focus(); 
    }

})

//verifica o click e item da lista para checar


const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
    //target pega todas as ações que o usuário clica 
    //contains é para achar uma classe
    if(event.target.classList.contains('js-tick')){
        const itemKey = event.target.parentElement.dataset.key; 
        checkTodo(itemKey);
    }
})






