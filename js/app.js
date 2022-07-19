// Находим нужные элементы на странице

const form = document.querySelector('.task-form')
const input = document.querySelector('.task-input')
const tasksList = document.querySelector('.task-list')
const emptyList = document.querySelector('#empty')
console.log(emptyList);

let tasks = []

// Добавление задачи
form.addEventListener('submit', addTask)

function addTask(event) {
    event .preventDefault()
    const tastText = input.value
    const taskHTML = `
    <li class="task-list__item">
        <span class="task-title">${tastText}</span>
        <div class="task-item__buttons">
            <button type="button" data-action="done" class="btn-action">
                <img src="img/ok.svg" alt="Done" width="18" height="18">
            </button>
            <button type="button" data-action="delete" class="btn-action">
                <img src="img/del.svg" alt="Done" width="18" height="18">
            </button>
        </div>
    </li>
    `
    tasksList.insertAdjacentHTML('beforeend', taskHTML)

    input.value = ''
    
    /* if (tasksList.children.length > 1) { //Почему-то не работает
        emptyList.classList.add('none')
    } */
    if (tasksList.children.length > 1) {
        emptyList.classList.add('none')
    }
}

tasksList.addEventListener('click', deleteTask)

function deleteTask(event) {
    if (event.target.dataset.action === 'delete') {
        const currentNote = event.target.closest('.task-list__item')
        currentNote.remove()
        // После того как удалили все задачи снова надо показать что список дел пуст 
        if (tasksList.children.length === 1) {
            emptyList.classList.remove('none')
        }  
    } 
} 

tasksList.addEventListener('click', doneTask)

function doneTask(event) {
    if (event.target.dataset.action === 'done') {
        // ищем родтителя в котором был клик по кнопке done
        const parentNode = event.target.closest('.task-list__item')
        // ищем span в котором был текст задачи
        const taskTitle = parentNode.querySelector('.task-title')
        // и добовляем ему класс ... , что покажет что задача done
        taskTitle.classList.toggle('task-title--done')
        //console.log(taskTitle);
    }
} 

