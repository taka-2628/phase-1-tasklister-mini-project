document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addInputInFormAsItemInToDoList(e.target.new_task_description.value);
    form.reset();
  });
  
});

function addInputInFormAsItemInToDoList (todoItem){
  let list = document.createElement('li');
  let select = document.createElement('select');
  let option = document.createElement('option')
  let option1 = document.createElement('option');
  let option2 = document.createElement('option');
  let option3 = document.createElement('option');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteItem);
  btn.textContent = 'DONE!';
  list.textContent = `${todoItem} `;
  list.appendChild(select);
  option.textContent = '-- choose priority'
  option1.textContent = 'DO THIS NOW!'
  option2.textContent = 'Do This Later'
  option3.textContent = 'do this whenever'
  select.appendChild(option);
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  list.appendChild(btn);
  let ul = document.querySelector('#tasks')
  ul.appendChild(list);
  console.log(ul)
}

function deleteItem(e){
  e.target.parentNode.remove()
}


