$(document).ready(function(argument) {
	///JQUERY 
	var playing;
	$(".audios").hide();
	$(".player").click(
		function(e) {
		$(".audios").hide();
		if(playing){
			$("#"+playing)[0].pause();
			$("#"+playing)[0].currentTime = 0;
		}
		// css
		$(".player").removeClass("playing");
		$(this).addClass("playing");
		// css

		///
		$("#"+$(this).attr('name')).show();
		$("#"+$(this).attr('name'))[0].play();
		
		playing = $(this).attr('name');

	});
});