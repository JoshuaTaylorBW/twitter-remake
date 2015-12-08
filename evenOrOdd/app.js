
var input = document.getElementById("inputt");
var output = document.getElementById("output");

document.getElementById("go").addEventListener("click", function () {
  var inputArr = input.value.split("");
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
  output.innerHTML =  answer;
})
