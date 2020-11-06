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
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
