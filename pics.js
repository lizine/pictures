
//var ul = document.getElementById("kissalista");
//var kuvat = ["img/cat1.jpg","img/cat2.jpg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYXNLuN8M8-f0TZUM9DIiMD3bNN6B8hyvlyttFrUdN423bn7ZD","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuwWbUXC-lgzQHp-j1iw56PIgl_2eALrEENUP-ld72gq3s8cVo","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOFCn9IQhAS3zI4AQcHNJTZ_VuDX03JI0p2IiD_APV_98HD6SUA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR4FsHFORXZ0Wc4P5d49U-twNUN5v0qN6j1V280BcysPkeicb"];
//var tekstit = ["First kittens text 1","Second kittens text 2","Third kittens text 3","Fourth kittens text 4","Fifth kittens text 5","Sixth kittens text 6"];

// lets put json data into cats, variable
var cats = {images: [{url : "img/cat1.jpg", text : "kitten text 1"}, {url : "img/cat2.jpg", text: "kitten text 2"},
{url: "img/cat3.jpg", text:"kitten text 3"}, {url: "img/cat4.jpg", text:"kitten text 4"},{url: "img/cat5.jpg", text:"kitten text 5"},{url: "img/cat6.jpg", text:"kitten text 6"} ]}

// initial cat picture, cat number 0
$("#mainpic" ).append('<img src="' + cats.images[0].url + '"/>');
$("#text" ).append(cats.images[0].text);

// iterating trought cats, adding new img-element with cats picture and appendig those elements to pictures-div
for(var i=0; i<6; i++){
	
 $("#pictures").append('<img class="thumb" id="' + i + '" src="' + cats.images[i].url + '"/>');
 if((i+1)%3==0){
 	$("#pictures").append('<br/>');
 }


}


 
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}
 
// finding out wich div-element was cliked via eventtarget attribute
var pics = document.getElementById('pictures');
pics.onclick = function(event) {
    var target = getEventTarget(event);
   
    if(target.id == "pictures"){
    	return;
    }

    $("#mainpic" ).empty();
    $("#mainpic" ).append('<img src="' + cats.images[target.id].url + '"/>');
    $("#text" ).empty();
    $("#text" ).append(cats.images[target.id].text);
 
};