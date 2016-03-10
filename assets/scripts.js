/*
*@author:	jpStearns
*@since:	March 09 2014, 2016
*@email:	jstearns@ccri.edu
*			https://www.gitHub.com/jpStearns

Statistics Calculator javaScript source code
*/
console.log("Hello world from the controller");
var title;
var imageValue;
var image;
var description;

function postProfile(){
	title = document.getElementById("profile-title").value;
	image = document.getElementById("profile-image");
	imageValue = image.options[image.selectedIndex].value;
	console.log(imageValue);
	description = document.getElementById("profile-description").value;

	document.getElementById("profile-wizard").style.display = "none";
	document.getElementById("title").innerHTML = title;
	document.getElementById("description").innerHTML = description;
	document.getElementById("image").style.display ="block";
}

function reset(){
	document.getElementById("profile-form").reset();
}

function postLink(){
	console.log("whats up fag");

}

function updateStatus(){
	console.log("You a bitch");
}
function clear(){
	document.getElementById("content-form").reset();
}