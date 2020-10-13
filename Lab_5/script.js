const body = document.querySelector('body');

//create header//
let header = document.createElement('h1');
header.innerText = "Maya's List Of Countries";

body.appendChild(header);

//create div and list//
let div = document.createElement('div');
div.setAttribute('class','content');
body.appendChild(div);
let list = document.createElement('ol');
list.setAttribute('class', 'countries');
body.appendChild(list);


//button//
let button = document.createElement('button');
button.innerText = 'Add Country';
body.appendChild(button);
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;


function getBody(content) 
{ 
   var x = content.indexOf("<tbody");
   x = content.indexOf(">", x);    
   var y = content.lastIndexOf("</tbody>"); 
   return content.slice(x + 1, y);
} 