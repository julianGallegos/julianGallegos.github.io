//=============================models =================================



function SlotMachine(){
	this.reel1 = ["coffee maker", "tea pot", "espresso machine"]
	this.reel2 = ["coffee filter", "tea strainer", "espresso tamper"]
	this.reel3 = ["coffee grounds", "loose tea", "ground espresso beans"]
}



//============================view========================

function View(){
	this.spinButton = ('.spinButton')
}

View.prototype.addIdElements = function(reel1, reel2, reel3){
// use this code below to add id to each list item 
	

	// $( ".slot_image_reel1" ).attr({
 //  	id: reel1[0]
	// });	
	$('.slot_image_reel1').each(function addIdToDom(index, element){
		$(element).attr({id: reel1[index]})
	})

	$('.slot_image_reel2').each(function addIdToDom(index, element){
		$(element).attr({id: reel2[index]})
	})

	$('.slot_image_reel3').each(function addIdToDom(index, element){
		$(element).attr({id: reel3[index]})
	})
	
}

View.prototype.checkWinner = function(numbers){
	var spinResults = []
	console.log("These are the numbers:", arguments);
	for (var i = 0; i < $('.slot').length; i ++){
		
      spinResults.push(($($('.slot')[i]).css('top')))
      
	}
	spinResults.toString()
	
	if (spinResults == "0px,0px,0px"){
		console.log("You win coffee")
		$('.results').text("You win coffee")
		$('.image_result').append('<img class="winning_image" src="http://www.likefun.me/wp-content/uploads/2013/05/coffee-art_hello-kitty.jpg">')
	} else if (spinResults == "-20px,-20px,-20px"){
		$('.results').text("You get tea!")
		$('.image_result').append('<img class="winning_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUZkQxMaLo_XnRYBtOD4ObX60-O13n6KRKo_xwnlEDYAycVu8">')
	} else if (spinResults == "-40px,-40px,-40px"){
		$('.results').text("You get espresso!")
		$('.image_result').append('<img class="winning_image" src="http://media-cache-ec0.pinimg.com/736x/5f/f5/6f/5ff56f829b2d7176aecab4da5167ca85.jpg">')
	} else {
		$('.results').text('Sorry, please try again')
	}

}

// view method to spin slot machine on view

	
	

 //=============================controller==================

 function Controller(model, view){
 	this.model = model
 	this.view = view
 };

 Controller.prototype.spinTheSlotMachine = function(reel1, reel2, reel3){
 	console.log('spinning the controller')
 	this.view.addIdElements(this.model.reel1, this.model.reel2, this.model.reel3)
 	
 	this.view.checkWinner();
 }

 Controller.prototype.bindEventHandlers = function(){
 	$(this.view.spinButton).on('click', this.spinTheSlotMachine.bind(this));

 }

$(document).ready(function(){
	var mySlotMachine = new Controller(new SlotMachine(), new View())
	mySlotMachine.bindEventHandlers();
	 $('.slot').jSlots({
        spinner : '#playNormal',
        winnerNumber : 3,
        onEnd: mySlotMachine.view.checkWinner
    });
	console.log($.jSlots.defaultOptions);
})