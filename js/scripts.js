//cool header stuff.
(function() {
	var cx, cy, h1, setOffsets;

	h1 = $('#dope-header');
	cx = cy = 0;

	setOffsets = function() {
		cx = h1.offset().left + h1.width() / 2;
		cy = h1.offset().top + h1.height() / 2;
		return cy;
	};

	$(window).on( 
		{'mousemove': function(e) {
			var dx, dy, mx, my;
			mx = e.clientX;
			my = e.clientY;
			dx = cx - mx;
			dy = cy - my;
			//console.log(mx, my, cx, cy);
			return h1.css('text-shadow', "" + (dx / 50) + "px " + (dy / 50) + "px #111111");
		},
			'load': setOffsets,
			'resize': setOffsets
	});

}).call(this);

jQuery('#tldr-post').hide();
jQuery('#tldr-btn').on('click', function(event){
	jQuery('#tldr-post').slideToggle(500);
	event.preventDefault();
});