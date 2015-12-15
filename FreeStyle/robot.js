var speakInput;
var btnSpeak;
var wordList;

var words = [];
var iterator = 0;

var timer = 0;

var rap = "you and me we just dont get a long at all any more"
$(document).ready(function(){
  speakInput = $("#here");
  btnSpeak = $("#submitty");
  wordList = $("#wordlist");
});


function saySomething(evt) {
  iterator = 0;
  var toSay = rap;
  console.log(toSay);
  words = toSay.split(" ");
  

  speakNumber(words);      
     
}

function speakNumber(num){
  if(iterator < num.length){
    chrome.tts.speak(num[iterator], {'lang': 'en-US'});
    console.log(iterator);
    iterator++;
    setTimeout(function(){speakNumber2(num)}, 880);
  }
}
function speakNumber2(num){
  if(iterator < num.length){
    chrome.tts.speak(num[iterator], {'lang': 'en-US'});
    console.log(iterator);
    iterator++;
    setTimeout(function(){speakNumber(num)}, 880);
  }
}

function beginRapping(BPM) {
  console.log("The BPM is " + BPM);

}

function stopwatch(){
    timer++;
}