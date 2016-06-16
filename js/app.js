var questions = [
	    '1. Do ye like yer drinks strong?',
	    '2. Do ye like it with a salty tang?',
	    '3. Are ye a lubber who likes it bitter?',
	    '4. Would ye like a bit of sweetness with yer poison?',
	    '5. Are ye one for a fruity finish?',
	]


	var ingredients = {
	    strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
	    salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
	    bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
	    sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
	    fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
	}




	var Drink = function(ingredients) {
	    console.log(ingredients);
	    this.strong = ingredients.strong;
	    this.salty = ingredients.salty;
	    this.bitter = ingredients.bitter;
	    this.sweet = ingredients.sweet;
	    this.fruity = ingredients.fruity;
	};



	var randomNumber = function() {
	    var newNumber = Math.floor((Math.random() * 3) + 0);
	    return newNumber


	};


	$(document).ready(function(){


	 
	    var bartendingQuestions = "";
	    for (var i = 0; i < questions.length; i++) {
	        bartendingQuestions += '<p>' + questions[i] + '<br> Yarr! <input name=' + i + '   value="true" type=radio> <br> No!! <input name=' + i + ' type=radio value="false"></p>';
	    }
	    
	    $('#drinkQuestions').append("<div>" + bartendingQuestions + "</div>");
	  
	    $('#bartender').submit(function(event) {
	    	event.preventDefault();
	    
	    var currentUserChoice = $('form').serializeArray();
	    	console.log(currentUserChoice);

	    var userIngredients = {};
		Object.keys(ingredients).forEach(function(key,index) {
			console.log(currentUserChoice[index].value);
		if(currentUserChoice[index].value == "true"){
		userIngredients[key] = ingredients[key][randomNumber()];
		} else {
		userIngredients[key] = ''
		}
		});

		var userDrink = new Drink(userIngredients);

		var drink = "";
		var count = 0;
		Object.keys(userDrink).forEach(function(key,index){
		  if(userDrink[key] != ""){
		    count++;
		    if(count != 1){
		      drink += " with ";
		    }
		    drink += userDrink[key];
		  }
		});
		console.log(drink);
	});


	});

