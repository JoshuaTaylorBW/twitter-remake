var comet = $.ajax({
  type: "GET",
  url: "https://lit-fortress-6467.herokuapp.com/object",
  dataType: "json",
})

comet.done(function (ajaxResults) {
  console.log(ajaxResults["results"]);
  var album = (Math.floor((Math.random() * ajaxResults["results"].length)))
  var arr = ajaxResults["results"];
  for(var i = 0; i < arr.length; i++){
    $(".all-albums").append("<img class='album' id='"+arr[i]["id"]
    + "' onclick='"+getOnClick(ajaxResults, i)+"' src=images/"+arr[i]["cover_art"]+"></img>");
  }
});

function getOnClick(allResults, which) {
  var x = allResults["results"][which]["artist"] + ":" +  allResults['results'][which]["title"];
  return "$(\".albums-picked\").append(\"" + x + " <br>\")"
}

document.getElementById("clear-button").addEventListener("click", function () {
  console.log("fuck");
  document.getElementById("albums-picked").innerHTML = "";
});

document.getElementById("submit-button").addEventListener("click", sendPost);

function sendPost() {
  var comet = $.ajax({
    type: "POST",

    url: "https://lit-fortress-6467.herokuapp.com/post"  })
  comet.done(function (postResults) {
    console.log(postResults);
  })
  comet.fail(function (postResults) {
    console.log("failure");
    console.log(postResults)
  })
}
