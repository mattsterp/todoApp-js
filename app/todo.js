let todoInput = document.getElementById('todo');
let todoList = document.getElementById('todos');

let todoApp = {
	addTodo: function() {
		let todo = todoInput.value;
		let newTodo = {
			id: state.todos.length + 1, // This should come from the database
			task: todo,
			status: false
		};

		//state.todos.push(newTodo);
		state.todos = [ ...state.todos, newTodo ];
		this.render();
	},

	toggleTodos: function(el) {
		let todoId = el.parentNode.id;

		let todos = state.todos.map((todo) => {
			if (todo.id == todoId) {
				todo.status = !todo.status;
			}
			return todo;
		});

		state.todos = [ ...todos ];
		this.render();
	},

	removeTodo: function(el) {
		let todoId = el.parentNode.id;
		let todos = state.todos.filter((todo) => {
			return todo.id != todoId;
		});

		state.todos = [ ...todos ];

		this.render();
	},

	render: function() {
		let html = '';

		if (state.todos.length === 0) {
			todoList.innerHTML = 'No Todo items created';
			return;
		}

		let btnText = 'complete';
		let bntUndoRedo = '';
		let btnDelete = `
          <button type='button' 
              onclick='todoApp.removeTodo(this)' 
              class='btn'>remove
          </button>
      `;

		for (let i = 0; i < state.todos.length; i++) {
			let todo = state.todos[i];
			let todoItemStyle = '';
			let buttonUndoRedoText = 'complete';

			if (todo.status === true) {
				todoItemStyle = 'todo-completed';
				buttonUndoRedoText = 'undo';
			}

			// Use Backtick
			btnUndoRedo = `
              <button type='button' onclick='todoApp.toggleTodos(this)' 
                   class='btn'>${buttonUndoRedoText}</button>`;

			html += `
              <li id=${todo.id} class=${todoItemStyle}>
                  ${state.todos[i].task}${btnUndoRedo}${btnDelete}
               </li>
           `;
		}
		todoList.innerHTML = html;
	}
};

todoApp.render();
