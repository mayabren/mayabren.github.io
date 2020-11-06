const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementsByTagName('input')[0].value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = 'https://api.umd.io/v0/bus/routes/' + String(busRoute); // Your code here


    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        console.log(route);
        sessionStorage.setItem('title', route.title);
        sessionStorage.setItem('lat_max', route.lat_max);
        sessionStorage.setItem('lat_min', route.lat_min);
        sessionStorage.setItem('lon_max', route.lon_max);
        sessionStorage.setItem('lon_min', route.lon_min);
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
