
// empty object for code to live on
var filterApp = {};
filterApp.dataAttr = ['data-content'];
filterApp.dataName = ['Content'];
filterApp.navSelector  = ['ul.filterNavContent a.filterControl', '.active'];
filterApp.transition = ['hideItemTransition', 'showItemTransition'];

// ------------------------------------

filterApp.init = function() { // this function holds everything to start the app

	// =========== Functions to occur on page load:

		jQuery('.filterResultsCurrent').hide();

		jQuery('.filterableItem').addClass('animated');

	// ============ Function that listens on click & evaluates filterApp.dataAttr[0] (Types)

	jQuery(filterApp.navSelector[0]).on('click',function(event){

		event.preventDefault(); 

		filterApp.userSelection = jQuery(this).text();

		// remove "active" class from any items	
		//$(filterApp.navSelector[0] + filterApp.navSelector[3]).removeClass('active');

		jQuery(".filterNavContent li a").removeClass('active');

		// add active class to user's selection
		jQuery('a.filterControl:contains("' + filterApp.userSelection + '")').addClass('active');

		// displays legend after user clicks on a filter link
		jQuery('.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		jQuery('.filterableItem' + '[' + filterApp.dataAttr[0] + ']').not('[' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"]').addClass(filterApp.transition[0]).hide();

		//finds items matching user's selection and shows them
		jQuery('.filterableItem' + '[' + filterApp.dataAttr[0] + ']').filter('[' + filterApp.dataAttr[0] + '="' + filterApp.userSelection + '"]').addClass(filterApp.transition[1]).show();

		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === 'all') {
			jQuery('.filterResultsCurrent').hide();
			jQuery('.filterableItem').show();
		} else {
			jQuery('.filterResultsCurrent').show();
			jQuery('li span.currentChoice').html(filterApp.dataName[0] + ': ' + filterApp.userSelection);
		}

		//console.log(filterApp.userSelection);

	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[0] (Types)


	// ============ Function that listens on click & evaluates filterApp.dataAttr[1] (Shapes)

	jQuery(filterApp.navSelector[1]).on('click',function(event){


		event.preventDefault(); 

		filterApp.userSelection = $(this).text();

		// remove "active" class from any items	
		jQuery(filterApp.navSelector[1] + filterApp.navSelector[3]).removeClass('active');

		// add active class to user's selection
		jQuery('a.filterControl:contains("' + filterApp.userSelection + '")').addClass('active');

		// displays legend after user clicks on a filter link
		jQuery('.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		jQuery('.filterableItem' + '[' + filterApp.dataAttr[1] + ']').not('[' + filterApp.dataAttr[1] + '="' + filterApp.userSelection + '"]').addClass(filterApp.transition[0]).hide();

		//finds items matching user's selection and shows them
		jQuery('.filterableItem' + '[' + filterApp.dataAttr[1] + ']').filter('[' + filterApp.dataAttr[1] + '="' + filterApp.userSelection + '"]').addClass(filterApp.transition[1]).show();


         console.log(filterApp.userSelection);
		// hides legend if "all" is selected + shows all items when all is selected
		if (filterApp.userSelection === 'all') {

			jQuery('.filterResultsCurrent').hide();
			jQuery('.filterableItem').show();
		} else {
			jQuery('.filterResultsCurrent').show();
			jQuery('li span.currentChoice').html(filterApp.dataName[1] + ': ' + filterApp.userSelection);
		}

		//console.log(filterApp.userSelection);

	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[1] (Shapes)	


	// ============ Function that listens on click & evaluates filterApp.dataAttr[2] (Colors)

	jQuery(filterApp.navSelector[2]).on('click',function(event){

		event.preventDefault(); 

		filterApp.userSelection = $(this).text();


		// remove "active" class from any items	
		jQuery(filterApp.navSelector[2] + filterApp.navSelector[3]).removeClass('active');

		// add active class to user's selection
		jQuery('a.filterControl:contains("' + filterApp.userSelection + '")').addClass('active');

		// displays legend after user clicks on a filter link
		jQuery('section.filterResultsCurrent').show(); 

		// finds items NOT matching user's selection and hides them
		jQuery('.filterableItem' + '[' + filterApp.dataAttr[2] + ']').not('[' + filterApp.dataAttr[2] + '="' + filterApp.userSelection + '"]').addClass(filterApp.transition[0]).hide();

		//finds items matching user's selection and shows them
		jQuery('.filterableItem' + '[' + filterApp.dataAttr[2] + ']').filter('[' + filterApp.dataAttr[2] + '="' + filterApp.userSelection + '"]').addClass(filterApp.transition[1]).show();

		// hides legend if "all" is selected + shows all items when all is selected
	
		if (filterApp.userSelection === 'all') {
            console.log("I am here");
			jQuery('.filterResultsCurrent').hide();
			jQuery('.filterableItem').show();
		} else {
			jQuery('.filterResultsCurrent').show();
			jQuery('li span.currentChoice').html(filterApp.dataName[2] + ': ' + filterApp.userSelection);
		}

		
	});  // ============ End function that listens on click & evaluates filterApp.dataAttr[2] (Colors)

}; // end filterApp.init


/**
*
* Doc Ready = calls all code above
*
**/

jQuery(document).ready(function($){
	filterApp.init();
}); // end doc ready