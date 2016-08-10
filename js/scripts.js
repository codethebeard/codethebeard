/**
 * Haha, thought you would see jQuery here. Nah.
 * I mean, it has it's uses, but damn. I REALLY don't need it here...
 */

window.addEventListener('load', function(){
	var siteNav = document.querySelectorAll('.site__nav');
	var siteHeader = document.querySelectorAll('.site__header');
	var navToggle = document.getElementById('nav-toggle');
	var pageLink = document.querySelectorAll('.page-link');

	window.setTimeout(function(){
		siteHeader[0].classList.toggle('loaded');
	}, 1000);

	for (var i = 0; i < pageLink.length; i++) {
		pageLink[i].addEventListener('click', preventClick, false);
	}

	function preventClick(event){
		event.preventDefault();
		console.log(event);
		siteHeader[0].classList.toggle('loaded');
		navToggle.classList.remove('active');
		siteNav[0].classList.remove('active');
		siteHeader[0].classList.remove('active');

		window.setTimeout(function(){
			var newLocation = event.srcElement.href;
			console.log(newLocation);
			if( newLocation != undefined ){
				window.location.assign(newLocation);
			} else {
				newLocation = location.protocol + "//" + location.host;
				window.location.assign(newLocation);
			}
		}, 1000);
		return false;
	}


	navToggle.addEventListener('click', function(){
		this.classList.toggle('active');
		siteNav[0].classList.toggle('active');
		siteHeader[0].classList.toggle('active');
	});
});
