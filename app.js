$(document).ready(function() {


	console.log("Hello");

	var mySplitText = new SplitText(".t_text", {type: "chars"});
	var span = $(".t_text");
	var innerDivs = span.find("div");
	innerDivs.attr("class", "char");

	TweenMax.fromTo('.top_text', 1, {
  			top: -40 // from state
		}, {
  			top: 10 // to end state
	});

	TweenMax.fromTo('#left_text', 1, {
  			left: -40 // from state
		}, {
  			left: 10 // to end state
	});

	TweenMax.fromTo('#bottom_text', 1, {
  			bottom: -40 // from state
		}, {
  			bottom: 10 // to end state
	});

	TweenMax.fromTo('#right_text', 1, {
  			right: -40 // from state
		}, {
  			right: 10 // to end state
	});



	/*var welcomeSplitText = new SplitText(".welcome_span", {type: "words, chars", position:"absolute"});*/

	var welcomeSplitText = new SplitText(".welcome_span", {type:"chars, words",wordsClass:"word word++"}),
    tl = new TimelineLite(),
    numChars = welcomeSplitText.chars.length;

	for(var i = 0; i < numChars; i++){
	  //random value used as position parameter
	  tl.from(welcomeSplitText.chars[i], 2, {opacity:0}, Math.random() * 1);
	}


	/*
	TweenMax.staggerFrom(welcomeSplitText, 0.3, {opacity: 1, x: 0}, 0.1, 'start+=3.5');

	var tl = new TimelineLite, 
    welcomeSplitText = new SplitText(".welcome_span", {type:"words,chars"}), 
    chars = welcomeSplitText.chars; //an array of all the divs that wrap each character

	TweenLite.set(".welcome_span", {perspective:300});

	tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
	*/
	/*
	$(".text").hover(function() {
			console.log("Hovered");
			var inner = $(this).find("div");
			console.log(inner);
			$(inner).attr("class", "char2");
		}, function() {
			$(inner).attr("class", "char");
		}
	); */

});











