const body = document.getElementsByTagName('body')[0];

let f = document.createElement('form');
f.setAttribute('action','https://fierce-taiga-97625.herokuapp.com/lab');
f.setAttribute('method','post');
body.appendChild(f);

const form = document.getElementsByTagName('form')[0];
let label = document.getElementsByTagName('label');

ul = document.createElement('ul');
point = document.createElement('li');
point1 = document.createElement('li');
point2 = document.createElement('li');

ul.appendChild(point);
ul.appendChild(point1);
ul.appendChild(point2);
form.appendChild(ul);

const li = document.getElementsByTagName('li');

let label1 = document.createElement('label');
label1.setAttribute('for','name');
li[0].appendChild(label1);
label[0].innerHTML = 'Name <br>';

let name = document.createElement('input');
name.setAttribute('type','text');
name.setAttribute('id','name');
name.setAttribute('maxlength','140');
name.setAttribute('name','name');
li[0].appendChild(name);

let label2 = document.createElement('label');
label2.setAttribute('for','interests');
li[1].appendChild(label2);
label[1].innerHTML = 'Interests <br>';

let interests = document.createElement('textarea');
interests.setAttribute('id','interests');
interests.setAttribute('rows','5');
interests.setAttribute('cols','33');
interests.setAttribute('name','interests');
li[1].appendChild(interests);

li[2].setAttribute('class','button');
let btn = document.createElement('button');
btn.setAttribute('type','submit');
btn.innerHTML = 'Submit';
li[2].appendChild(btn);