const refsO = {
  value: document.querySelector('.value'),
  select: document.querySelector('select'),
  increment: document.querySelector('.btn-increment'),
  decrement: document.querySelector('.btn-decrement'),
  warning: document.querySelector('.warning'),
};
console.log((refsO.value.textContent = 125));

let step = 1;
let count = 0;

console.log(step);

const render = () => {
  refsO.value.textContent = count;
};

const handleIncrementClick = () => {
  count += step;
  if (count >= 100) {
    refsO.value.style.color = 'red';
    refsO.warning.classList.remove('hidden');
  } else {
  }
  render();
};

const handleDecrementClick = () => {
  count -= step;
  if (count < 100) {
    refsO.value.style.color = 'inherit';
    refsO.warning.classList.add('hidden');
  }
  render();
};

const getSelectChange = e => {
  step = Number(e.target.value);
};

refsO.select.addEventListener('change', getSelectChange);

refsO.increment.addEventListener('click', handleIncrementClick);

refsO.decrement.addEventListener('click', handleDecrementClick);

render();
