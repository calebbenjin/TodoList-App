const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const filter = document.querySelector('.search input');

const generateList = (todo) => {
    const html = `
      <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `
    list.innerHTML += html;
    
}


addForm.addEventListener('submit', e => {

    const todo = addForm.add.value.trim();
    
    if(todo.length){
      generateList(todo);
      addForm.reset();
    }


    e.preventDefault();
})


// Delete todos
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// filter function
const filterTodos = (search) => {


  Array.from(list.children)
    .filter((todo) =>  !todo.textContent.includes(search))
    .forEach((todo) => todo.classList.add('filtered'))


    Array.from(list.children)
    .filter((todo) =>  todo.textContent.includes(search))
    .forEach((todo) => todo.classList.remove('filtered'))
}

// Keyup event
filter.addEventListener('keyup', e => {
  const search = filter.value.trim();

  filterTodos(search);
})