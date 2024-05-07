
var navElement = document.querySelector('nav');


var textAndIcons = document.querySelectorAll('nav a, nav i');


window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {

        navElement.style.backgroundColor = 'rgb(47, 6, 69)';
    } else {

        navElement.style.backgroundColor = 'rgb(255, 255, 255)';
    }
});

var textAndIcons = document.querySelectorAll('nav a, nav i');


window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {

        textAndIcons.forEach(function (element) {
            element.style.color = 'white';
        });
    } else {

        textAndIcons.forEach(function (element) {
            element.style.color = '';
        });
    }
});



textAndIcons.forEach(function (element) {
    element.addEventListener('mouseenter', function () {

        element.style.color = 'red';
    });
    element.addEventListener('mouseleave', function () {

        element.style.color = '';
    });
});







