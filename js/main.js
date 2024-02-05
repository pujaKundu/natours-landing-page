const navToggleCheckbox = document.querySelector("#navigation-toggle");
const navBtn = document.querySelector(".navigation__button");

navBtn.addEventListener("click", () => {
  if (navToggleCheckbox.checked) {
    navToggleCheckbox.setChecked = false;
  } else {
    navToggleCheckbox.setChecked = true;
  }
});



document.getElementById('openPopup').addEventListener('click', function(event) {
  
  event.preventDefault();

  var popup = document.getElementById('popup');

  popup.style.opacity = 1;
  popup.style.visibility = 'visible';
  document.body.classList.add('popup-open');
});


document.querySelector('.popup__close').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.style.opacity = 0;
  popup.style.visibility = 'hidden';

  document.body.classList.remove('popup-open');
});