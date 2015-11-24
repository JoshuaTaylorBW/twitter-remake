var starAmount = 1;
for(var j = 0; j < 7; j++){
  var stars = "";
  for(var i = 1; i <= starAmount; i++){
    stars += "*";
  }
  console.log(stars);
  starAmount++;
}
