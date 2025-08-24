const MOCK_TASKS = [
    { id: 1, title: 'Изучить паттерн MVC', isDone: false },
    { id: 2, title: 'Подготовить моковые данные', isDone: true },
]

// хранение данных, бизнес-логика
const model = {
    tasks: MOCK_TASKS,
    addTask(title) {
        const newTask = {
            id: new Date().getTime(),
            title: title,
            isDone: false
        }
       this.tasks.push(newTask);
       view.renderTasks(this.tasks);
    },
    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        view.renderTasks(this.tasks);
    },
    toggleTask(taskId) {
        this.tasks = this.tasks.map((task) => {
            if (task.id === taskId) {
                task.isDone = !task.isDone
            }
            return task;
        });
        view.renderTasks(this.tasks);
    },
    clearBtn() {
        this.tasks = this.tasks.filter((task) => {
            if(task.isDone === false) {
                return true;
            } else {
                return false;
            }
        });
        view.renderTasks(this.tasks);
    }
}
 
// отображение данных: рендер списка задач, размещение обработчиков событий
const view = {
    init(){
        this.renderTasks(model.tasks);

        const form = document.querySelector('.form');
        const input = document.querySelector('.input');

        form.addEventListener('submit', function(event){
            event.preventDefault();
            const title = input.value;
            controller.addTask(title);
            input.value = '';
        });

        const list = document.querySelector('.list');
        list.addEventListener('click', function (event) {
            if (event.target.classList.contains('task-title')) {
                const taskId = +event.target.parentElement.id;
                controller.toggleTask(taskId);
            }
            if (event.target.classList.contains('delete-button')) {
                const taskId = +event.target.parentElement.id
                controller.deleteTask(taskId)
            }
        });

        const btn = document.querySelector(".clear-button");
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            controller.clearBtn();
        });
    },
    renderTasks(tasks) {
        const list = document.querySelector('.list');
        let tasksHTML = '';
        tasks.forEach((element) => {
            tasksHTML += `
            <li id="${element.id}" class="${element.isDone ? 'done' : ''}">
                <b class="task-title">${element.title}</b>
                <button class="delete-button" type="button">Удалить 🗑</button>
            </li>
        `
        });
        list.innerHTML = tasksHTML;

        const counter = document.querySelector(".counter");
        counter.textContent = tasks.filter((task) => {
            if(task.isDone === false) {
                return true;
            } else {
                return false;
            }
        }).length;
    },
    
}
 
// обработка действий пользователя, обновление модели
const controller = {
    addTask(title) {
        if(title && title.trim() !== '') {
            model.addTask(title)
        }
    },
    deleteTask(taskId) {
        model.deleteTask(taskId);
    },
    toggleTask(taskId) {
        model.toggleTask(taskId);
    },
    clearBtn() {
        model.clearBtn();
    }
}

view.init();




