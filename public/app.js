//sticky nav 
(function stickyNavInit() {

    var navbar = document.querySelector('.navbar-container');
    var navTop = navbar.scrollTop;
    
    window.addEventListener('scroll', stickyNav);

    function stickyNav(){

        if (window.scrollY > navTop) {
            document.body.classList.add('sticky-nav');
            document.body.style.paddingTop = 0;
        } else {
            document.body.classList.remove('sticky-nav');
            document.body.style.paddingTop = 0;
        }
    }

}());

//menu-burger

(function menuBurgerInit(){

    var menuBurger = document.querySelector('.menu-one');
    var lineOne = document.querySelector('.line-one');
    var navBar = document.querySelector('.navbar-container');

    menuBurger.addEventListener('click', function(){
        lineOne.classList.toggle('line-two');
        navBar.classList.toggle('active-navbar');
    });
}());

//card section animation

(function scroll(){

    var card = document.querySelector('.card-container--flex');
    var yposition = window.pageYOffset;
    window.addEventListener('scroll', scroll);
    
        if (yposition > 1050) {
            card.classList.add('card-container-active');
        } else if (yposition < 1049) {
            card.classList.remove('card-container-active');
        }
    
}());