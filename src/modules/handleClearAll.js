import renderData from './addToMarkup.js';
import saveResourceToLocalStorage from './saveResourceToLocalStorage.js';

const todoListWrapper = document.querySelector('[data-list-wrapper]');

const handleClearAll = (todos) => {
  const updatedTodos = todos.filter((todo) => !todo.isCompleted);
  updatedTodos.forEach((todo, index) => {
    todo.index = index + 1;
  });
  saveResourceToLocalStorage('todos', updatedTodos);
  renderData(updatedTodos, todoListWrapper);
  window.location.reload();
};

export default handleClearAll;