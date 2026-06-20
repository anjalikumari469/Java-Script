let todoList = [
  {
    item: 'Revise Array in JS',
    dueDate: '09/06/2026'
  },
  {
    item: 'Complete CSS',
    dueDate: '04/06/2026'
  },
  {
    item: 'Create Myntra Clone',
    dueDate: '16/06/2026'
  },
  {
    item: 'Solve LeetCode Two Sum',
    dueDate: '19/06/2026'
  },
  {
    item: 'Add edit feature to Todo App',
    dueDate: '18/06/2026'
  },

];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
 

}

