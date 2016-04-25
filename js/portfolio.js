
window.onload = function () {

	//About
	var wholesite = document.getElementById("sitewrapper");
	var contact = document.getElementById("contact");
	var contactpage = document.getElementById("menu");
	var close = document.getElementById("close")
	// about_section.style.opacity = '0';
	contact.addEventListener('click', function () {
		contactpage.style.display = "flex";
		wholesite.style.display = "none";
	});
	
	close.addEventListener('click', function () {
		contactpage.style.display = "none";
		wholesite.style.display = "block";
	});

}