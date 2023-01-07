const getItemTemplate = text => {
  return `     <li class="todo-item">
              <div>
                <input class="input-checkbox" type="checkbox" name="" />
                <span>${text}</span>
              </div>
              <button type="button">del</button>
            </li>`;
};

const items = ['item1', 'item2', 'item3'];

const list = items.map(item => getItemTemplate(item));
console.log(list);
