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

const markup = ingredients.map((element)=>{
  const listEl = document.createElement(`li`);
  listEl.classList.add(`item`);
  listEl.textContent = `${element}`;
  return listEl;
});
list.append(...markup);

// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients
