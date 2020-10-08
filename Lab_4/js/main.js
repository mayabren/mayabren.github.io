const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable = document.querySelector('h1');
alert('hello!');

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','firefox2.png');
    } else {
    myImage.setAttribute('src','firefox-icon.png');
    }
} 


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

myButton.querySelector('button').onclick = function() {
    setUserName();
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');