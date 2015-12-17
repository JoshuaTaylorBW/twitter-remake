
var speakInput;
var btnSpeak;
var wordList;

var words = [];
var iterator = 0;

var timer = 0;

var millisecondsBetween = 0;

var rap = "sheep in who dees and a snap back or may be just a pack of rats ask ing for res pect"
$(document).ready(function(){
  speakInput = $("#here");
  btnSpeak = $("#submitty");
  wordList = $("#wordlist");
});

function setRap(newRap){
  rap = newRap; 
  console.log(rap);
}
function saySomething(bpms) {
  iterator = 0;
  var toSay = rap;
  console.log(toSay);
  words = toSay.split(" ");
  console.log(bpms);
  
  millisecondsBetween = (60 / bpms) * 1000;
  console.log(millisecondsBetween + "the millisecondsBetween");

  speakNumber(words);      
     
}

function speakNumber(num){
  if(iterator < num.length){
    chrome.tts.speak(num[iterator], {'lang': 'en-US'});
    console.log(iterator);
    iterator++;
    setTimeout(function(){speakNumber2(num)}, millisecondsBetween);
  }
}
function speakNumber2(num){
  if(iterator < num.length){
    chrome.tts.speak(num[iterator], {'lang': 'en-US'});
    console.log(iterator);
    iterator++;
    setTimeout(function(){speakNumber(num)}, millisecondsBetween);
  }
}

function beginRapping(BPM) {
  console.log("The BPM is " + BPM);

}

function stopwatch(){
    timer++;
}