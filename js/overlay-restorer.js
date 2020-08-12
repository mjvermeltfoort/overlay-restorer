(function($) {
	var clickCounter = 0;
	window.overlayRestorerOptions = {
		clickTrigger: 10,
		autoRefreshAfter: 30
	};
	
	// Check if overlay exists every .5 seconds
	var intervalId = setInterval(function() {
		if ($('#overlay').length === 0) {
			$('body').append($('<div id="overlay"></div>'));
			
			// Reset the click counter
			clickCounter = 0;
			$(document).trigger('overlay-removed');
		}
	}, 500);
	
	$(document).on('mousedown', '#overlay', function (){
		clickCounter ++;
		
		console.log(clickCounter);
		
		if (clickCounter === window.overlayRestorerOptions.clickTrigger) {
			var name;
			
			while(!(name = prompt('Hi, what is your name?'))) {
				
			}
			
			alert('Oh hi ' + name);
			
			while (!confirm('Tell me '+name+', do you want to edit the amount of the bank account?')) {
				alert('Just be honest!')
			}
			
			alert('Alright I will enable the edit mode for this page, good luck!');
			
			clearInterval(intervalId);
			
			// Enables edit mode in Chrome
			document.body.contentEditable = true;
			
			$('#overlay').remove();
			
			// Also add a meta refresh tag to reload the page after a few seconds
			$('head').append('<meta http-equiv="refresh" content="'+window.overlayRestorerOptions.autoRefreshAfter+'">');
		}
	});
})(jQuery);