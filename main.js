const input = document.querySelector('.input');
const addBtn = document.querySelector('.add');
const list = document.querySelector('.list');

addBtn.addEventListener('click', addTodo);

function addTodo() {
    const todo = input.value;
    if (todo) {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';


        deleteBtn.classList.add('delete');
        li.textContent = todo;
        list.appendChild(li);
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', deleteTodo);
        
        function deleteTodo() {
            li.remove();
        };
        input.value = '';
    }

};
