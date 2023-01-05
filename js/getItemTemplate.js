// 1. Генерируем шаблон заметки

export const getItemTemplate = ({ text, isDone }) => {
  return `  <li class="todo-item">
              <div>
                <input class="input-checkbox" type="checkbox"  ${isDone ? 'checked' : ''} />
                <span>${text}</span>
              </div>
              <button class="btn-del-item" type="button">X</button>
            </li>`;
};
