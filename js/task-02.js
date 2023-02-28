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

const elements = ingredients.map((element)=>{
  const listEl = document.createElement(`li`);
  listEl.textContent = `${element}`;
  listEl.classList.add(`item`);
  list.appendChild(listEl);
});


// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients
