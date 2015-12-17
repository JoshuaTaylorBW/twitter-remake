var subjects = ["They","Kate","I","Hoe","Tess", "bitch"];
var verbs = ["like","find","tithe","need", "love","drink","murder","rob","shoot","blow","spit","call","chase","check","cut","fuck", "suck"];
var objects = ["dick", "shit","whips", "nips", "clips", "trees", "keys", "bees", "bling", "bitches", "payper"];
var beings = ["is", "aint"]
var nouns = ["hurt","sad","on","rich","broke","dumb","dead","down"];
var legacies = ["pray my dick get big as the eye full tao er","I never fucked wayne I never fucked drake","bitch don't kill my vibe ah","ello G I C","My anaconda don't want none unless you got buns hun","i go zero to a hunnid real quick","started from the bah tum now we here","me and my friends we got ma ney to spend","im in love with these tum blur girls","i got ninety nine problems but a bitch ain't one","ain't nobody fucking with my click","life is a beach, i'm just playing in the sand","mama I'm in love with a hot girl","look at you, now look at us, all my niggas look rich as fuck","you used to call me on my cellphone","bitch better have my ma ney","I'm a fuck ing walking paradox","I can't feel my face when I am with you","Im slim shady yes im the real shady all you other slim shadys are just imitating","I never sleep cause sleep is the cousin of death","Go shawty, it’s your birthday We gon party like it’s your birthday","If you having girl prah lems I feel bad for you son","my Y M C M B","Y M C M B bitch","Y M C M","Hell yeah fucking right","They see me rollin' they hatin","I’m out for dead fuck ing presidents to represent me","dey go ing back to back","Fuck The Po leash","We got a real jam goin down, welcome to the Space Jam","Kool Aid and frozed pizza, its a work of art i aint talking mona lisa ","Straight Out of Compton","first let me hop out the mother fuck ing porsche","got so much wood i could build me a fort","Crush a bit, li til bit, roll it up, take a hit","toilet seat ass ni ga man i swear you getting peed on"]

var fullRap = "";

var usedSubject = "Bitch";
var usedVerb = "";
var usedObject = "";
var usedBeing = "";
var usedNoun = "";

var LINES_AMOUNT = 12;

makeRap();

function makeRap(){
	fullRap = "";
	for(var i = 0; i < LINES_AMOUNT; i++){
		var whatLine = Math.floor((Math.random() * 15));
		if(whatLine < 8){
			makeSVOSentence();
		}else if(whatLine >= 8 && whatLine < 14){
			makeSBNSentence();
		}else{
			LINES_AMOUNT -= 2;
			makeLegacyLine();
		}
	}
	setRap(fullRap);
}

function reuseSubject(){
	var reuse = Math.floor((Math.random() * 3)+1);
	return reuse <= 2;
}
function checkDat(){
	if(usedSubject === "bitch" || usedSubject === "Hoe"){
		var dat = Math.floor((Math.random() * 10)+1);
		console.log(dat);
		if(dat <= 6){
			usedSubject = "dat " + usedSubject;
		}
	}
}
function makeSVOSentence () {
	var whichSubject = Math.floor((Math.random() * subjects.length));
	var whichVerb = Math.floor((Math.random() * verbs.length));
	var whichObject = Math.floor((Math.random() * objects.length));

	if(!reuseSubject()){
		usedSubject = subjects[whichSubject];
	}else{
		if (usedSubject.substring(0, 4) == "dat ") {
			usedSubject = usedSubject.slice(4, usedSubject.length);
		}
		checkDat();
	}
	usedVerb = verbs[whichVerb];
	usedObject = objects[whichObject];


	if(usedSubject !== "They" && usedSubject !== "I"){
		var addS = Math.floor((Math.random() * 3)+1);
		if(addS >= 2){
			usedVerb += "s";
		}
	}
	if (usedSubject.substring(0, 4) == "dat ") {
		fullRap += usedSubject + " " + usedVerb + " " + usedObject + " ";
	}else{
		fullRap += usedSubject + " " + usedVerb + " " + usedObject + " pause ";
	}
}

function makeSVSentence () {
	var whichSubject = Math.floor((Math.random() * subjects.length));
	var whichVerb = Math.floor((Math.random() * verbs.length));

	if(!reuseSubject()){
		usedSubject = subjects[whichSubject];
	}else{
		if (usedSubject.substring(0, 4) == "dat ") {
			usedSubject = usedSubject.slice(4, usedSubject.length);
		}
		checkDat();
	}
	usedVerb = verbs[whichVerb];


	if(usedSubject !== "They" && usedSubject !== "I"){
			usedVerb += "s";
	}

	fullRap += usedSubject + " " + usedVerb  + " ";
}
function makeSBNSentence(){
	var whichSubject = Math.floor((Math.random() * subjects.length));
	var whichBeing = Math.floor((Math.random() * beings.length));
	var whichNoun = Math.floor((Math.random() * nouns.length));

	if(!reuseSubject()){
		usedSubject = subjects[whichSubject];
	}else{
		if (usedSubject.substring(0, 4) == "dat ") {
			usedSubject = usedSubject.slice(4, usedSubject.length);
		}
		checkDat();
	}
	usedBeing = beings[whichBeing];

	usedNoun = nouns[whichNoun];

	if (usedSubject.substring(0, 4) == "dat ") {
		fullRap += usedSubject + " " + usedVerb + " " + usedObject + " ";
	}else{
		fullRap += usedSubject + " " + usedVerb + " " + usedObject + " pause ";
	}

}
function makeLegacyLine(){
	var whichLine = Math.floor((Math.random() * subjects.length));

	fullRap += legacies[whichLine] + " "

}
