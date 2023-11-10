let x;
let y;
let z;
let add1;
let add2;

document.getElementById("rollbtn").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlbl").innerHTML = x;
    document.getElementById("ylbl").innerHTML = y;


    document.getElementById("zlbl").innerHTML = x+y;

}
