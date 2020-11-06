// Get saved data from sessionStorage
let name = data.list.name; // Your code here
let semester = data.list.semester ; // Your code here
let credits =  data.list.credits; // Your code here
let description = data.list.description ; // Your code here 

const na = document.getElementById('name');
const se = document.getElementById('semester');
const cr = document.getElementById('credits');
const de = document.getElementById('description');

na.innerHTML = name;
se.innerHTML = semester;
cr.innerHTML = credits;
de.innerHTML = description;


