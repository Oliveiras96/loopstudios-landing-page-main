document.addEventListener('DOMContentLoaded', (event) => {
    console.log('ok');
    const buttonOpenToggle = document.querySelector('.menu-icon');
    const buttonCloseToggle = document.querySelector('.close-menu-icon');



    buttonOpenToggle.addEventListener('click', () => {
        const toggleMenu = document.querySelector('.header-menu');
        const isAreaHidden = toggleMenu.getAttribute('aria-hidden');

        toggleMenu.setAttribute('aria-hidden', 
                                 isAreaHidden === false ? 'true' : false);
        console.log('clicked');
    });

    buttonCloseToggle.addEventListener('click', () => {
        const toggleMenu = document.querySelector('.header-menu');
        const isAreaHidden = toggleMenu.getAttribute('aria-hidden');

        toggleMenu.setAttribute('aria-hidden', 
                                 isAreaHidden === 'false' ? 'true' : 'false');
        console.log('clicked');
    });

});

