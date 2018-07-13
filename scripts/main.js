var myImage = document.querySelector('img');


myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1469803389370976657.jpg') {
        myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
        myImage.setAttribute('src', 'images/1469803389370976657.jpg');
    }
}

var myButton = document.querySelector('buton');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('name', myName);
    myHeading.textContent = 'Toads rules, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Toads rule, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}