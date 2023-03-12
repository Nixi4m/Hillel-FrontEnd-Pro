
let inputBtn = document.querySelector('.form__btn')
inputBtn.addEventListener('click', todoList)

function todoList (event) {
    let inputText = document.querySelector('.form__input').value;
    event.preventDefault()
    document.querySelector('.form__input').value = "";

    let todoWrap = document.querySelector('.js--todos-wrapper');

    elemCreate = function(inputText) {
       return `
        <div class='todo-item'>
            <input type="checkbox" class='todo-item__checkbox'>
            <p class='todo-item__description'>${inputText}</p>
            <button class='todo-item__delete'> Удалить </button>
        </div>
        `
    }
    todoWrap.insertAdjacentHTML("beforeend", elemCreate(inputText))

    let deleteBtn = document.querySelectorAll('.todo-item__delete')
    deleteBtn.forEach((delBtn) =>{
        delBtn.addEventListener('click', () => {
            delBtn.parentElement.remove();
        })
    })

    const checkboxes = document.querySelectorAll('.todo-item__checkbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.querySelector('.todo-item__description').classList.add('todo-item--checked');
            } else {
                this.parentElement.querySelector('.todo-item__description').classList.remove('todo-item--checked')
            }
          });
        });
}