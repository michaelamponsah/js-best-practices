import getResourceFromLocalStorage from './getResourceFromLocalStorage.js';
import renderData from './addToMarkup.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todos = getResourceFromLocalStorage('todos');
const todoListWrapper = document.querySelector('[data-list-wrapper]');

const updateTodo = (updatedTodo) => {
  todos[updatedTodo.index].description = updatedTodo.description;

  saveResourceToLocalStorage('todos', todos);
  renderData(todos, todoListWrapper);
};

export default updateTodo;