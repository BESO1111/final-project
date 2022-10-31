var x=["რაჭველები", "ისტორია","მევენახეობა","კერძები","ტრადიციები","ტბები"];

var z=["index.html","istoria.html","mevenaxeoba.html","kerdzebi.html","tradiciebi.html","tbebi.html"];

var ul="<ul>";

for(i=0;i<x.length;i++){

ul+='<li><a href="'+z[i]+'" >'+x[i]+"</a></li>";


}

ul+="</ul>";
document.getElementById("nav").innerHTML=ul




