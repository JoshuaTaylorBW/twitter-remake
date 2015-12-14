spotifyRequest();
function spotifyRequest  () {
	var request = $.ajax({
	    url: "https://api.spotify.com/v1/search?type=track&q=started%20from%20the%20bottom",
	    method: "GET",
	    dataType: "json",
	});
	request.done(function(response) {
	    console.log(response);
 	 });
  request.fail(function () {
    console.log("going");
  });
}
