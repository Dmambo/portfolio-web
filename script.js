const bars = document.querySelector('.bars');
const headers = document.querySelector('.headers');
const list = document.querySelector('.list-items');

bars.addEventListener('click', () => {
  headers.classList.toggle('active');
});

list.addEventListener('click', () => {
  headers.classList.toggle('active');
});