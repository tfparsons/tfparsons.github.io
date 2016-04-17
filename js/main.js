function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult.');
	} else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase() === "General" && lastName.toLowerCase() !== "Assembly"); {
		console.log('Greetings General!');
	}

	var faveColour = prompt('What is your favouite colour?');
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {
		$('h1').css('color', faveColour);
	}

}

// When the page loads
$(function() {

	$('img').on('click', askQuestions);

	//Hide the content
	$('h3').next().slideUp(100);

	// When the user clicks an h3
	$('h3').on('click', function() {

		var target = $(this).next();

		// toggle the next element
		$(this).next().slideToggle(500);
	
	});

});





