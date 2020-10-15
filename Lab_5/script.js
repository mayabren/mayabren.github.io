const body = document.querySelector('body');

//create header//
let header = document.createElement('h1');
header.innerText = "Maya's List Of Countries";

body.appendChild(header);

//create div//
let div = document.createElement('div');
div.setAttribute('class','content');
body.appendChild(div);

//button//
let button = document.createElement('button');
button.innerText = 'Add Country';
div.appendChild(button);
const btn = document.querySelector('button');




function RandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

  //creates new list//
  let list = document.createElement('ol');
  let item = document.getElementById('ol')
  list.setAttribute('class', 'countries');
  body.appendChild(list);

function createList() {
  let ol = document.querySelector("ol");
  ol.innerHTML = "";

  let min = 0;
  let max = 25;
  let i;
  for (i=1; i<26; i++) {
  
    let a = countries[RandomInt(min,max)];
    let ele = document.createElement('li');
    ele.innerHTML = '<b>' + a.code + '</b>, ' + a.name;
    list.appendChild(ele);
    const randomItem = countries.splice(a, 1);
  }
  console.log(countries);
}


btn.onclick = createList;


