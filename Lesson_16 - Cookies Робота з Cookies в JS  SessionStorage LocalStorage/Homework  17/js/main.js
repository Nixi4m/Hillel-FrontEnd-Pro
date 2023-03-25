function UserTable({ form, content, userInfo, addButton }) {
    this.init = function () {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                form.elements['name'].value,
                form.elements['phone'].value,
                form.elements['age'].value
            )
        })
        addButton.addEventListener('click', function () {
            form.reset();
            form.classList.add('open');
        })
        this.loadUsers();
    }
    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }
        this.userTemplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers))
    }
    this.loadUsers = function () {
        content.innerHTML = '';
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
          users.forEach(user => this.userTemplate(user))
        }
      };

    this.deleteUser = function (userId) {
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = currentUsers.filter((user) => user.id !== userId);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        this.loadUsers();
      };
    
      this.userTemplate = function (user) {
        content.insertAdjacentHTML(
          'beforeend',
          `<tr>` +
            `<td>${user.id}</td>` +
            `<td>${user.name}</td>` +
            `<td>${user.phone}</td>` +
            `<td>${user.age}</td>` +
            `<td><button class="btn">View</button><button class="btn js--btn__edit">Edit</button><button class="btn js--btn__delete" data-user-id="${user.id}">Delete</button></td>` +
            `</tr>`
        );
    
        const deleteButtons = content.querySelectorAll('.js--btn__delete');
        deleteButtons.forEach((button) => {
          button.addEventListener('click', (event) => {
            const userId = parseInt(event.target.getAttribute('data-user-id'));
            this.deleteUser(userId);
            event.target.closest('tr').remove();
          });
        });
      };
}

(new UserTable({
    form: document.querySelector('.js--form'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();
