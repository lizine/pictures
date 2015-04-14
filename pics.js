
// store dom elements in variables, so we don't need to fetch them repeatedly.
var mainpic = $("#mainpic" );
var text = $("#text" );
var pictures = $("#pictures");


// lets put json data into cats variable so we can easily iterate trough it
var cats = {images: [{url : "img/cat1.jpg", text : "Kitten text 1"}, {url : "img/cat2.jpg", text: "Kitten text 2"},
{url: "img/cat3.jpg", text:"Kitten text 3"}, {url: "img/cat4.jpg", text:"Kitten text 4"},{url: "img/cat5.jpg", text:"Kitten text 5"},{url: "img/cat6.jpg", text:"Kitten text 6"} ]}



// initial cat picture, cat number 0
mainpic.append('<img src="' + cats.images[0].url + '"/>');
text.append(cats.images[0].text);

// iterating trought cats, adding new img-element with cats picture and appendig those elements to pictures-div
for(var i=0; i<cats.images.length; i++){
	
   pictures.append('<img class="thumb" id="' + i + '" src="' + cats.images[i].url + '"/>');

      if((i+1)%3==0){
 	    pictures.append('<br/>');
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

    mainpic.empty();
    mainpic.append('<img src="' + cats.images[target.id].url + '"/>');
    text.empty();
    text.append(cats.images[target.id].text);
 
};