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
    list.insertAdjacentHTML('beforeend', `<li class="todo-item" data-key="${todo.id}"> 
        <span>${todo.text}</span> 
        <button class="delete-todo js-delete-todo">
            <svg>
                <use href="#delete-icon"> </use> 
            </svg>
        </button> 

    </li>`)
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





//um array com vários objetos
/*
var array = [
    {
        atividade: "ir ao mercado"
    },
    {
        atividade: "assistir netflix"
    }
]
*/