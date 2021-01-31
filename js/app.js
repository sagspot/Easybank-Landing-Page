const nav = document.querySelector('.nav');
const modal = document.querySelector('.modal');
const btnToggle = document.getElementById('mobToggle');

btnToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  modal.classList.toggle('open');
  document.body.classList.toggle('open');
});
