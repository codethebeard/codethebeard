/**
 * Haha, thought you would see jQuery here. Nah.
 * I mean, it has it's uses, but damn. I REALLY don't need it here...
 */

window.addEventListener('load', function(){
	var siteNav = document.querySelectorAll('.site__nav');
	var siteHeader = document.querySelectorAll('.site__header');
	var navToggle = document.getElementById('nav-toggle');

	// Handles Navigation and active states.
	navToggle.addEventListener('click', function(){
		this.classList.toggle('active');
		siteNav[0].classList.toggle('active');
		siteHeader[0].classList.toggle('active');
	});
});
