spotifyRequest();
function spotifyRequest  () {
	var searchTerm = $("#query").val();
	var request = $.ajax({
	    url: "https://api.spotify.com/v1/search?type=track&q=" + searchTerm,
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
