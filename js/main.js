const navToggleCheckbox = document.querySelector('#navigation-toggle');
const navBtn = document.querySelector('.navigation__button');

navBtn.addEventListener('click', ()=> {
    console.log('clicked')
    if (navToggleCheckbox.checked) {
        navToggleCheckbox.setChecked = false;
    } else {
        navToggleCheckbox.setChecked = true;
    }
});


