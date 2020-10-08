let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
let myname = 'Maya Brenner-Letich';
const contentHeader = document.getElementsByClassName('header');
contentHeader[0].innerHTML = 'Maya Brenner-Letich';
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

let p1 = document.createElement('p');
p1.setAttribute('class', 'content1');

let p2 = document.createElement('p');
p2.setAttribute('class', 'content2');

document.getElementsByClassName('content')[0].appendChild(p1);
document.getElementsByClassName('content')[0].appendChild(p2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let withoutSpace = myname.replace(/ /g,"");
let len = withoutSpace.length;
let nameLen = 'My name has ' + len + ' characters';

p1.textContent =nameLen

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

let third = withoutSpace[2].toUpperCase();
p2.innerText= third;

// 6 Add a new line to your second paragraph
p2.insertAdjacentHTML("beforeend", "<br>")

// 7 Return the final three characters of your last name to that new line
let lThr = 'The last three letters of my name are: ' + withoutSpace.substring(len-3);
p2.insertAdjacentText('beforeend', lThr);

// 8 Substring your first and last name into two separate variables
let first = withoutSpace.substring(0, 4);
let last =  withoutSpace.substring(4);

// 9 Add the total length of your first and last names together
let total = first.length + last.length

// 10 Display that total next to your name in your header
contentHeader[0].insertAdjacentText('beforeend',' ' + total);