let x;
let y;

document.getElementById("rollbtn").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlbl").innerHTML = x;
    document.getElementById("ylbl").innerHTML = x;

}
