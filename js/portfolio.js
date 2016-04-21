
window.onload = function () {

	//About
	var contact = document.getElementById("contact");
	var contactpage = document.getElementById("menu");
	var close = document.getElementById("close")
	// about_section.style.opacity = '0';
	contact.addEventListener('click', function () {
		contactpage.style.display = "block";
	});
	
	close.addEventListener('click', function () {
		contactpage.style.display = "none";
	});

}