const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list= document.querySelector(`#ingredients`);
console.log(list);

const elements = ingredients.forEach((element)=>{
  const listEl = document.createElement(`li`);
  listEl.classList.add(`item`);
  listEl.textContent = `${element}`;
  list.appendChild(listEl);
  console.log(listEl);
});




