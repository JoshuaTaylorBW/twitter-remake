
// var input = document.getElementById("inputt");
// var output = document.getElementById("output");

$('#go').click(function () {
  console.log("Something");
    var inputArr = $('#inputt').val().split("");
    var answer = "";
    if(inputArr.length % 2 === 0){
      inputArr.forEach(function (element, i) {
        if(i % 2 !== 0){
          answer += element;
        }
      })
    }else{
      inputArr.forEach(function (element, i) {
        if(i % 2 === 0){
          answer += element;
        }
      })
    }
    // output.innerHTML =  answer;
    $('#output').html = answer;
});
