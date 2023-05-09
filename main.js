const navbar = document.getElementById('navbar');
const hideBtn = document.getElementById('hide-btn');

hideBtn.addEventListener('click', function() {
  navbar.classList.add('hidden');
});