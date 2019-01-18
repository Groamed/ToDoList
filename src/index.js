const taskInput = document.querySelector('.task-target')
const taskBlock = document.querySelector('.task-block')

function addNewTask() {
    if (taskInput.value) {
        const newTask = document.createElement('div')
        newTask.insertAdjacentHTML('beforeend',
            `<div class="task-elem center-align">
                <span>${taskInput.value}</span>
                <input type="button" value="Выполнено" onclick="compliteTask(event)"><input type="button" value="Удалить" onclick="deleteTask(event)">
            </div>`
        )
        taskBlock.append(newTask)
    }
}

function deleteAll() {
    while (taskBlock.firstChild) {
        taskBlock.firstChild.remove()
    }
}

function compliteTask(event) {
    event.target.nextSibling.remove()
    event.target.remove()
    event.path[1].append('Завершено')
}

function deleteTask(event) {
    event.path[1].remove()
}