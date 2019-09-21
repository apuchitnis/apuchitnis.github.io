let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
	myImage.setAttribute ('src','images/firefox2.png');
    } else {
	myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName()
}
myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
	return;
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

