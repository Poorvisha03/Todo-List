const todoList = [
        ];

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
            <div> ${name}</div>
            <div>${dueDate}</div>
            <button class = "delete-btn" onclick = "
            todoList.splice(${index},1);
            renderTodoList();
            ">Delete</button>
            `
            ;
        
        todoListHTML += html
        });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }
        
document.querySelector('.js-add-btn').addEventListener('click' , () => {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date');
    const dueDate = dateInputElement.value;

    if (name === '' || dueDate === '') return;        
    todoList.push({name,dueDate})

    inputElement.value = '';     
    renderTodoList();
    });
