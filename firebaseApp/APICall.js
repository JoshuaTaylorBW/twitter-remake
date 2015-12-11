var comet = $.ajax({
  type: "GET",
  url: "https://lit-fortress-6467.herokuapp.com/object",
  dataType: "json",
})

comet.done(function (ajaxResults) {
  console.log(ajaxResults["results"]);
  var album = (Math.floor((Math.random() * ajaxResults["results"].length)))
  var arr = threeRandoms();
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    $(".random-albums").append("<img class='album' src='images/"+ajaxResults['results'][arr[i]]["cover_art"]+"'></img>")

  }
})

function threeRandoms() {
  var arr = []
  while(arr.length < 3){
    var randomnumber=Math.floor(Math.random()*5)
    var found=false;
    for(var i=0;i<arr.length;i++){
      if(arr[i]==randomnumber){
        found=true;break
      }
    }
    if(!found)arr[arr.length]=randomnumber;
  }
  return arr;
}
