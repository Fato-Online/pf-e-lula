$(document).ready(function(){
	$('.home h1').animate({
		marginTop:10,
		opacity:1
	}, "slow",function(){
		$('#img-home').animate({
			opacity:1,
			marginTop:0
		}, "slow")
	})

	$("#btn-baixo").click(function() {
		$('body,html').animate({
			scrollTop: $(".time-line").offset().top}, "slow");
	});


});
