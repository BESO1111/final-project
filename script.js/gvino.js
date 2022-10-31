function gvino(){
var usaxe= document.getElementById("gvino").src
console.log(usaxe)
if( usaxe=="file:///C:/Users/user/Desktop/final%20project/img/xvanchkara1.jpg" ){
document.getElementById("gvino").src="../img/xvanchkara.jpg"
document.getElementById("tkbili").innerHTML="ნახევრად მშრალი"
}

else{
    document.getElementById("gvino").src="../img/xvanchkara1.jpg"
    document.getElementById("tkbili").innerHTML="ნახევრად ტკბილი"

}
}