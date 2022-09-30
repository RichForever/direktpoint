const NavbarSwitcher = () => {

    const navBurger = document.getElementById('hamburger')
    const navList = document.querySelector('.header__menu')

    navBurger.addEventListener('click', (e) =>{
       e.currentTarget.classList.toggle("is-active")
       navList.classList.toggle('is-active')
    });

};

module.exports = NavbarSwitcher;