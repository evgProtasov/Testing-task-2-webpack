'use strict';

function pageWidth() {
    var widthWindow = document.documentElement.clientWidth;   
    var sortForm = document.getElementById("sort-form");
    var buttonFilter = document.getElementById("filter__button");
    
    if (widthWindow < 888) {
        sortForm.classList.add("hidden");
        buttonFilter.classList.remove("hidden");
    } else {
        sortForm.classList.remove("hidden");
        buttonFilter.classList.add("hidden");
    }
}

window.addEventListener('resize', function() {
    pageWidth();
});

var optionLinks = document.querySelectorAll(".options__link");

for ( let optionLink of optionLinks) {
    optionLink.addEventListener('click', function() {
        
        if (optionLink.classList.contains('active')) {
            optionLink.classList.remove('active');
        } else {
            optionLink.classList.add('active');
        }
    });
}


