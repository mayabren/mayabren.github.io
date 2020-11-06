// Get saved data from sessionStorage
let title = route.title; // Your code here
let lat_max = route.lat_max ;
let lat_min = route.lat_min;
let lon_max = route.lon_max;
let lon_min = route.lon_min;

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
const route_id = document.getElementById('title');
const latMax = document.getElementById('lat_max');
const latMin = document.getElementById('lat_min');
const lonMax = document.getElementById('lon_max');
const lonMin = document.getElementById('lon_min');

route_id.innerHTML = title;
latMax.innerHTML =lat_max;
latMin.innerHTML = lat_min;
lonMax.innerHTML = lon_max;
lonMin.innerHTML = lon_min;