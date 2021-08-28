burger = document.querySelector('.burger');
navBar = document.querySelector('.navBar');
leftNav = document.querySelector('.leftNav')
sear = document.querySelector('.sear')
sBtn = document.querySelector('.sBtn')

burger.addEventListener('click', () =>{
    navBar.classList.toggle('hNav');
    leftNav.classList.toggle('dNone');
    sear.classList.toggle('dNone');
    sBtn.classList.toggle('dNone');

})