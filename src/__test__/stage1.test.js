import add from '../modules/addToDo.js';

describe('adding', () => {
  document.body.innerHTML = `<div class="form-field">
  <form class="form" id="form-section" action="submit">
      <input type="text" id="input-task" class="input-task" placeholder="Add your task here..." autocomplete="off">
      <input type="button" id="addBtn" value="+">
  </form>
</div>
<div class="ul-container">
  <ul class="toDoList" id="toDoList">

  </ul>`;
  test('Should add one element when is called', () => {
    add('Hello');
    const list = document.querySelectorAll('textarea');
    expect(list).toHaveLength(1);
  });
  test('Should remove one element when is called', () => {
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.click();
    const listElement = document.querySelectorAll('textarea');
    expect(listElement.length).toBe(0);
  });
});