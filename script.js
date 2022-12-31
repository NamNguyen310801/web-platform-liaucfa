var swBtn = document.querySelector('.switch-wp label');
var body = document.querySelector('body');
function init() {
  let mode = localStorage.getItem('mode') ? 'dark' : '';
  body.setAttribute('class', mode);
}
init();
swBtn.addEventListener('click', function () {
  body.classList.toggle('dark');
  let mode = body.getAttribute('class') ? 'dark' : '';
  localStorage.setItem('mode', mode);
});
