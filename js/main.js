// 1. Генерируем шаблон заметки

import { getItemTemplate } from './getItemTemplate.js';

// 2. Создаем модель данных
import { items } from './data-items.js';

// 1.2 Выбираем элементы DOM
import { refs } from './refs.js';

// Собітие на form

refs.form.addEventListener('submit', additem);

// 3. Функция Рендер item

function renderToDoEl() {
  refs.list.innerHTML = '';
  const lis = items.map(getItemTemplate);
  refs.list.insertAdjacentHTML('beforeend', lis.join(' '));
}

function additem(e) {
  e.preventDefault();
  const { value } = e.target.elements.input;

  const payload = {
    isDone: false,
    text: value,
  };
  refs.form.reset();

  items.push(payload);
  renderToDoEl();
}

renderToDoEl();
