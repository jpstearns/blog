/*
*@author:	jpStearns
*@since:	March 09 2016
*@email:	jstearns@getcybercare.com
*			https://www.gitHub.com/jpStearns

Blog: javaScript source code
*/

"use strict";

/*****Functions****/
/**
 * A function that will take the user input in the 
 * profile form and post it to the DOM
 * @ no params
 */
function postProfile(){

	//variable declaration
	var title = document.getElementById("profile-title").value;
	var image = document.getElementById("profile-image");
	var imageValue = image.options[image.selectedIndex].value;
	var description = document.getElementById("profile-description").value;

	//turning off profile form and showing the profile
	document.getElementById("profile-wizard").style.display = "none";
	document.getElementById("wrapper").style.display="inline-block";
	document.getElementById("title").innerHTML = title;
	document.getElementById("description").innerHTML = description;
	document.getElementById("image").style.display ="block";
	
	//set the image to display
	switch (imageValue) {
	    case "1":
	        document.getElementById("image").innerHTML= '<img src="imageOne.jpg" alt="Profile Pic" style="max-width:100%; ">';
	        break;
	    case "2":
	    	document.getElementById("image").innerHTML= '<img src="imageTwo.jpg" alt="Profile Pic" style="max-width:100%; ">';
	        break;
	    case "3":
	    	document.getElementById("image").innerHTML= '<img src="imageThree.jpg" alt="Profile Pic" style="max-width:100%; ">';
	        break;
	    case "4":
	    	document.getElementById("image").innerHTML= '<img src="imageFour.jpg" alt="Profile Pic" style="max-width:100%; ">';
	        break;
    }
}

/**
 * A function that will clear the user input in the 
 * profile form and reset the form to its original state
 * @ no params
 */
function reset(){
	//reset the profile form
	document.getElementById("profile-form").reset();
}

/**
 * A function that will take the user input in the 
 * links form and post it to the DOM and then reset the links form
 * @ no params
 */
function postLink(){
	//variable declaration
	var link = document.getElementById("url").value;
	var linkTypes = document.getElementById("link-types");
	var linkType = linkTypes.options[linkTypes.selectedIndex].value;
	var htmlStart = "<li><a href='";
	var htmlEnd = "</a></li>";
	var htmlString = htmlStart+link+"'>"+link+htmlEnd;

	//set the link type
	switch(linkType){
		case "html":
			document.getElementById("html").innerHTML += htmlString;
			break;
		case "css":
			document.getElementById("css").innerHTML += htmlString;
			break;
		case "javascript":
			document.getElementById("javascript").innerHTML += htmlString;
			break;
		default:
			alert("You did not selecet a link type");
	}

	//reset the links form
	document.getElementById("links-form").reset();

}

/**
 * A function that will take the user input in the 
 * profile form and post it to the DOM
 * @ no params
 */
function updateStatus(){

	//variable declaration
	var content = document.getElementById("content-status").value;
	var rad0 = document.getElementById("content-rad0");
	var rad1 = document.getElementById("content-rad1");
	var rad2 = document.getElementById("content-rad2");
	var statusText;
	var statusImage;
	var statusLink;

	//get today's date and make it pretty
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();

	//make date pretty
	if(dd<10){
		dd = "0"+dd;
	}
	if(mm<10){
		mm = "0"+mm;
	}
	var date = mm+"/"+dd+"/"+yyyy;

	//start building DOM output
	var statusHtml = "<div class='posting'><header><h3>"+date+"</h3></header>";

	//listen to the radio buttons and set content
	if(rad0.checked){
		statusText = content;
		statusHtml +="<article><p>"+statusText+"</p></article></div>";
		document.getElementById("content-postings").innerHTML += statusHtml;
	}else if(rad1.checked){
		statusImage = "<img src='"+content+".jpg' alt='blog-image' style='max-width: 100%;'>";
		statusHtml += "<article>"+statusImage+"</article></div>";
		document.getElementById("content-postings").innerHTML += statusHtml;
	}else{
		statusLink = "<a href='"+content+"'>"+content+"</a>";
		statusHtml += "<article>"+statusLink+"</article></div>";
		document.getElementById("content-postings").innerHTML += statusHtml;
	}

	//reset the content form
	document.getElementById("content-form").reset();
}