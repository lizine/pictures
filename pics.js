
//var ul = document.getElementById("kissalista");
var kuvat = ["http://wac.450f.edgecastcdn.net/80450F/hudsonvalleycountry.com/files/2015/01/cat4.jpg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmzHD1yQR-cxyJsQGVk7-TEZc60fkTq2DuI6o16yM1ZRZwkR1P","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYXNLuN8M8-f0TZUM9DIiMD3bNN6B8hyvlyttFrUdN423bn7ZD","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuwWbUXC-lgzQHp-j1iw56PIgl_2eALrEENUP-ld72gq3s8cVo","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOFCn9IQhAS3zI4AQcHNJTZ_VuDX03JI0p2IiD_APV_98HD6SUA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR4FsHFORXZ0Wc4P5d49U-twNUN5v0qN6j1V280BcysPkeicb"];
var tekstit = ["First kittens text 1","Second kittens text 2","Third kittens text 3","Fourth kittens text 4","Fifth kittens text 5","Sixth kittens text 6"];


$("#mainpic" ).append('<img src="' + kuvat[0] + '"/>');
$("#text" ).append(tekstit[0]);

for(var i=0; i<kuvat.length; i++){
	
 $("#pictures").append('<img class="thumb" id="' + i + '" src="' + kuvat[i] + '"/>');
 if((i+1)%3==0){
 	$("#pictures").append('<br/>');
 }


}


 
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}
 
var pics = document.getElementById('pictures');
pics.onclick = function(event) {
    var target = getEventTarget(event);
   
    if(target.id == "pictures"){
    	return;
    }

    $("#mainpic" ).empty();
    $("#mainpic" ).append('<img src="' + kuvat[target.id] + '"/>');
    $("#text" ).empty();
    $("#text" ).append(tekstit[target.id]);
 
};