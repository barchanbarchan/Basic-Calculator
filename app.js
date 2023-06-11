const firstNum = document.querySelector('.js-num-a');
const secondNum = document.querySelector('.js-num-b');
const selectOperation = document.querySelector('.js-select-operation');
const btn = document.querySelector('.js-btn-resl');
const output = document.querySelector('.js-output');

btn.addEventListener('click', () => {
  const a = Number(firstNum.value);
  const b = Number(secondNum.value);
  const operation = selectOperation.value;

  const result = calc({
    a,
    b,
    operation
   })

   output.innerHTML = result;
})