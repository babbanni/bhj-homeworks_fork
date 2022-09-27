const taskInput = document.querySelector('.tasks__input');
const btn = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');
let task = document.createElement('div');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    taskList.appendChild(task);

    taskList.lastElementChild.outerHTML = `
    <div class="task">
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`
    let taskRemove = document.querySelectorAll('.task__remove');

    taskRemove.forEach(elem => {
        elem.addEventListener('click', (e) => {
            debugger
            e.preventDefault();
            elem.parentElement.remove();
        });
    });
});