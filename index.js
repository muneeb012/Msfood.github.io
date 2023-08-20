function pizza() {
    document.getElementById("burg").style.display = "none"
    document.getElementById("pizz").style.display = "inline"
    document.getElementById("fri").style.display = "none"
document.getElementById("v3").style.background="#222831"
document.getElementById("v3").style.color="white"
document.getElementById("v2").style.background="white"
document.getElementById("v2").style.color="black"
document.getElementById("v4").style.background="white"
document.getElementById("v4").style.color="black"
document.getElementById("v5").style.background="white"
document.getElementById("v5").style.color="black"
document.getElementById("v1").style.background="white"
document.getElementById("v1").style.color="black"
}
function burger() {
    document.getElementById("burg").style.display = "inline"
    document.getElementById("pizz").style.display = "none"
    document.getElementById("fri").style.display = "none"
    document.getElementById("v2").style.background="#222831"
    document.getElementById("v2").style.color="white"
    document.getElementById("v3").style.background="white"
    document.getElementById("v3").style.color="black"
    document.getElementById("v4").style.background="white"
    document.getElementById("v4").style.color="black"
    document.getElementById("v5").style.background="white"
    document.getElementById("v5").style.color="black"
    document.getElementById("v1").style.background="white"
    document.getElementById("v1").style.color="black"

}

function passta() {
    document.getElementById("pass").style.display = "inline"
    document.getElementById("pizz").style.display = "none"
    document.getElementById("burg").style.display = "none"
    document.getElementById("fri").style.display = "none"
    document.getElementById("v4").style.background="#222831"
    document.getElementById("v4").style.color="white"
    document.getElementById("v2").style.background="white"
    document.getElementById("v2").style.color="black"
    document.getElementById("v3").style.background="white"
    document.getElementById("v3").style.color="black"
    document.getElementById("v5").style.background="white"
    document.getElementById("v5").style.color="black"
    document.getElementById("v1").style.background="white"
    document.getElementById("v1").style.color="black"
}
function fries() {
    document.getElementById("fri").style.display = "inline"
    document.getElementById("pizz").style.display = "none"
    document.getElementById("burg").style.display = "none"
    document.getElementById("pass").style.display = "none"
    document.getElementById("v5").style.background="#222831"
    document.getElementById("v5").style.color="white"
    document.getElementById("v2").style.background="white"
    document.getElementById("v2").style.color="black"
    document.getElementById("v3").style.background="white"
    document.getElementById("v3").style.color="black"
    document.getElementById("v4").style.background="white"
    document.getElementById("v4").style.color="black"
    document.getElementById("v1").style.background="white"
    document.getElementById("v1").style.color="black"

}
function show() {
    document.getElementById("fri").style.display = "inline"
    document.getElementById("pizz").style.display = "inline"
    document.getElementById("burg").style.display = "inline"
    document.getElementById("pass").style.display = "inline"
    document.getElementById("v1").style.background="#222831"
    document.getElementById("v1").style.color="white"
    document.getElementById("v2").style.background="white"
    document.getElementById("v2").style.color="black"
    document.getElementById("v3").style.background="white"
    document.getElementById("v3").style.color="black"
    document.getElementById("v4").style.background="white"
    document.getElementById("v4").style.color="black"
    document.getElementById("v5").style.background="white"
    document.getElementById("v5").style.color="black"
}
function responsive(){
 let a = document.getElementById("exit")
 if (a.style.display === "none") {
    a.style.display = "block";
} 

  else {

    a.style.display = "none";
  }
 
}


