jQuery(function($){
	"use strict";
	// Author Code Here
	
/* ========================================================================= */
/*	Call To Action scrolldown
/* ========================================================================= */
	 
	$('.ancla').click(function(e){
      var link    = $(this);
      var anchor  = link.attr('href');
      $('html, body').stop().animate({
          scrollTop: jQuery(anchor).offset().top
      }, 1700);
      e.preventDefault();
      return false;
  });


/* ========================================================================= */
/*	Menu item highlighting
/* ========================================================================= */


	$("#navigation").sticky({
		topSpacing : 0
	});
	
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

/* ========================================================================= */
/*	On scroll fade/bounce fffect
/* ========================================================================= */

	

/* ========================================================================= */
/*   Contact Form Validating
/* ========================================================================= */
	

	// $('#contact-submit').click(function (e) {

	// 	//stop the form from being submitted
	// 	e.preventDefault();

	// 	/* declare the variables, var error is the variable that we use on the end
	// 	to determine if there was an error or not */
	// 	var error = false;
	// 	var name = $('#empresa').val();
	// 	var name = $('#persona').val();
	// 	var name = $('#cargo').val();
	// 	var email = $('#email').val();
	// 	var name = $('#telefono').val();
	// 	var subject = $('#servici').val();
	// 	var name = $('#empleados').val();
	// 	var message = $('#mensaje').val();

	// 	/* in the next section we do the checking by using VARIABLE.length
	// 	where VARIABLE is the variable we are checking (like name, email),
	// 	length is a JavaScript function to get the number of characters.
	// 	And as you can see if the num of characters is 0 we set the error
	// 	variable to true and show the name_error div with the fadeIn effect. 
	// 	if it's not 0 then we fadeOut the div( that's if the div is shown and
	// 	the error is fixed it fadesOut. 
		
	// 	The only difference from these checks is the email checking, we have
	// 	email.indexOf('@') which checks if there is @ in the email input field.
	// 	This JavaScript function will return -1 if no occurrence have been found.*/
	// 	if (name.length == 0) {
	// 		var error = true;
	// 		$('#empresa').css("border-color", "#D8000C");
	// 	} else {
	// 		$('#empresa').css("border-color", "#666");
	// 	}
	// 	if (persona.length == 0) {
	// 		var error = true;
	// 		$('#persona').css("border-color", "#D8000C");
	// 	} else {
	// 		$('#persona').css("border-color", "#666");
	// 	}
	// 	if (cargo.length == 0) {
	// 		var error = true;
	// 		$('#cargo').css("border-color", "#D8000C");
	// 	} else {
	// 		$('#cargo').css("border-color", "#666");
	// 	}
	// 	if (email.length == 0 || email.indexOf('@') == '-1') {
	// 		var error = true;
	// 		$('#email').css("border-color", "#D8000C");
	// 	} else {
	// 		$('#email').css("border-color", "#666");
	// 	}
	// 	if (telefono.length == 0) {
	// 		var error = true;
	// 		$('#telefono').css("border-color", "#D8000C");
	// 	} else {
	// 		$('#telefono').css("border-color", "#666");
	// 	}
	// 	if (servicio.length == 0) {
	// 		var error = true;
	// 		$('#servici').css("border-color", "#D8000C");
	// 	} else {
	// 		$('#servici').css("border-color", "#666");
	// 	}
	// 	if (empleados.length == 0) {
	// 		var error = true;
	// 		$('#empleados').css("border-color", "#D8000C");
	// 	} else {
	// 		$('#empleados').css("border-color", "#666");
	// 	}
	// 	if (message.length == 0) {
	// 		var error = true;
	// 		$('#mensaje').css("border-color", "#D8000C");
	// 	} else {
	// 		$('#mensaje').css("border-color", "#666");
	// 	}

	// 	//now when the validation is done we check if the error variable is false (no errors)
	// 	if (error == false) {
	// 		//disable the submit button to avoid spamming
	// 		//and change the button text to Sending...
	// 		$('#contact-submit').attr({
	// 			'disabled': 'false',
	// 			'value': 'Sending...'
	// 		});

	// 		/* using the jquery's post(ajax) function and a lifesaver
	// 		function serialize() which gets all the data from the form
	// 		we submit it to send_email.php */
	// 		$.post("enviarmail.php", $("#contact-form").serialize(), function (result) {
	// 			//and after the ajax request ends we check the text returned
	// 			if (result == 'sent') {
	// 				//if the mail is sent remove the submit paragraph
	// 				$('#cf-submit').remove();
	// 				//and show the mail success div with fadeIn
	// 				$('#mail-success').fadeIn(500);
	// 			} else {
	// 				//show the mail failed div
	// 				$('#mail-fail').fadeIn(500);
	// 				//re enable the submit button by removing attribute disabled and change the text back to Send The Message
	// 				$('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
	// 			}
	// 		});
	// 	}
	// });





});