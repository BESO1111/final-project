function feriscvlileba(){

var  xxx=document.getElementById("img").src;
console.log(xxx)
if(xxx=="file:///C:/Users/user/Desktop/final%20project/img/toggle-off.png"){
document.getElementById("img").src="../img/toggle-onn.png"

document.getElementById("ferisshecvla").style.backgroundColor="rgb(138, 149, 120";

}
else{
    document.getElementById("img").src="../img/toggle-off.png"
   
    document.getElementById("ferisshecvla").style.backgroundColor="rgb(108, 129, 140";
}
}