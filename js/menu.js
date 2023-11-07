var inicio = document.getElementById("inicio");
var servicios = document.getElementById("servicios");
var precios = document.getElementById("precios");
var contacto = document.getElementById("contacto");
var inicio1 = document.getElementById("inicio1");
var servicios1 = document.getElementById("servicios1");
var precios1 = document.getElementById("precios1");

inicio.addEventListener('click', function(){
    document.documentElement.scrollTop = 600;
});
servicios.addEventListener('click', function(){
    document.documentElement.scrollTop = 1100;
});
precios.addEventListener('click', function(){
    document.documentElement.scrollTop = 1650;
});
contacto.addEventListener('click', function(){
    document.documentElement.scrollTop = 20000;
});
inicio1.addEventListener('click', function(){
    document.documentElement.scrollTop = 600;
});
servicios1.addEventListener('click', function(){
    document.documentElement.scrollTop = 1100;
});
precios1.addEventListener('click', function(){
    document.documentElement.scrollTop = 1650;
});

(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
})();
