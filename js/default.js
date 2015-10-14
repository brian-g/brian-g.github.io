//@codekit-prepend "jquery.parallax-1.1.3.js";

function loadLightBox(lb, figure) {

	var newItem;
	var oldFigure;
	
	lb.data('album', figure);

	oldFigure = lb.find('figure');
	
	newItem = figure.clone(false);
	newItem.css('display','none');
	newItem.find('h4').text(figure.parents('.thumbnail-album').children('h3').text());
	
	lb.find('.lightbox-content').append(newItem);
	
	if (oldFigure.length > 0 && lb.is(':visible')) {
		oldFigure.fadeOut('300ms', function() {
			oldFigure.remove();
		});
		newItem.fadeIn('300ms', function() {
		});
	} else {
		oldFigure.remove();
	}

}

function iterateOnAlbum(lb, dir) {
	var next;
	var cur = lb.data('album');
	
	if (dir === 'next') {
		next = cur.next();
		if (next.length === 0) {
			next = cur.parent().children(':first-child');
		}
	} else {
		next = cur.prev();
		if (next.length === 0) {
			next = cur.parent().children(':last');
		}
	}
	
	if (next.length > 0) {
		loadLightBox(lb, next);
	}
}

$(document).ready(function() {
	$('body').parallax("0", 0.02);		
	
	$('.thumbnails img').on('click',function() {
		var lb = $('#lightbox');
		
		loadLightBox(lb, $(this).parent());
		lb.show();
		$('#lightbox figure').show();
	});
	
	$('.close, #lightbox').on('click', function() {
		$('#lightbox').fadeOut('fast');
	});
	
	$('.next').on('click', function(ev) {
		ev.stopPropagation();
		iterateOnAlbum($('#lightbox'), 'next');
	});
	
	$('.previous').on('click', function(ev) {
		ev.stopPropagation();
		iterateOnAlbum($('#lightbox'), 'prev');		
	});
	
});
