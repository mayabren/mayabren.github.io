const main = document.getElementById("main");

function getClasses(){
    
    let classId =  document.getElementsByTagName('input'); // Your code here

    if(typeof classId !== "undefined" & classId !== ""){ 
        let classURL =  fetch('https://api.umd.io/v0/courses/'+ classId); // Your code here
        let data = classURL.json();
        console.log(data)
    }
    else{
        main.innerHTML = "No value provided";
    }
}