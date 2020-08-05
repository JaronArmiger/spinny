import './styles/style.css';
const wheel = document.querySelector('#wheel');
const spokes = document.querySelectorAll('.spoke');

wheel.addEventListener('click', function(e) {
  wheel.classList.toggle('rotate');
  //wheel.classList.toggle('shrink');
  spokes.forEach(spoke => {
    const index = spoke.dataset.index;
    spoke.classList.toggle(`spoke-${index}`);
  });
})