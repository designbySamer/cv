/*
Samer Hassinan
*/

//Dark mode 
"use strict";
var darkModeOn = false;
var darkModeButton = document.getElementsByClassName("darkModeBtn")[0];
var productNav = document.getElementsByClassName("productNav")[0];
var main = document.getElementsByClassName("main")[0];
var divForm = document.getElementsByClassName("divForm")[0];
darkModeButton.addEventListener('click', function (event) {
    if (darkModeOn) {
        darkModeOn = false;
        document.body.classList.remove("bodyDarkMode");
        productNav.classList.remove("darkMode");
        main.classList.remove("darkMode");
        divForm.classList.remove("darkMode");
    }
    //Setting the darkmode
    else {
        darkModeOn = true;
        document.body.classList.add("bodyDarkMode");
        productNav.classList.add("darkMode");
        main.classList.add("darkMode");
        divForm.classList.add("darkMode");
    }
});

//Validation
var emailRadioButton = document.getElementById("eButton");
var phoneRadioButton = document.getElementById("pButton");
var emailInput = document.getElementById("eInput");
var phoneInput = document.getElementById("pInput");
//sets e-mail input to required if e-mail button is clicked
emailRadioButton.addEventListener('click', function (event) {
    emailInput.setAttribute("required", "required");
    phoneInput.removeAttribute("required");
});

//sets phone input to required if phone button is clicked
phoneRadioButton.addEventListener('click', function (event) {
    phoneInput.setAttribute("required", "required");
    emailInput.removeAttribute("required");
});

//toggle products
function toggleProduct(elementIdToShow) {
    var vinylLink = document.getElementById('vinylProductDiv');
    var cdLink = document.getElementById('cdProductDiv');
    var tapeLink = document.getElementById('tapeProductDiv');
    var mainText = document.getElementById('mainTextDescription');
    

    mainText.classList.add("hide");
    vinylLink.classList.add("hide");
    cdLink.classList.add("hide");
    tapeLink.classList.add("hide");

    var elementToShow = document.getElementById(elementIdToShow);
    elementToShow.classList.remove("hide");
}