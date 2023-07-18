$('.navbar-toggler').removeAttr('data-toggle'); 
$('.navbar-toggler').removeAttr('data-target'); 
let overlay = $('<div>').addClass('navbar-overlay');

// Add overlay on body
$('body').append(overlay);
// Click handlers 
$('#bx-menu').click(function() { 
	// Open sidebar 
	$('#navbarNav').addClass('show'); 
	// Hide menu button 

	//show overlay
	$('.navbar-overlay').show();

	$('#bx-menu').hide(); 
	// Show close button 
	$('#bx-x').show(); }); 
	
	$('#bx-x').click(function() { 
		$('.navbar-overlay').hide();
		// Close sidebar 
		$('#navbarNav').removeClass('show'); 
		// Hide close button 
		$('#bx-x').hide(); 
		// Show menu button 
		$('#bx-menu').show(); });
