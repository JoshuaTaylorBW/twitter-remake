var subjects = ["They","Kate","That","I","That","Hoe","Jess"];
var verbs = ["like","love","drive","drink","suck","tithe","rob","aim","bank","shoot","blow","spit","call","chase","check","clap","cut","fuck","deck","fall","fade","find","fix"];
var objects = ["dick","sex","henny","cash","info","jewels","bling", "shit", "bitches"];

makeSVOSentence();
makeSVOSentence();
makeSVOSentence();

function makeSVOSentence () {
	var whichSubject = Math.floor((Math.random() * subjects.length));
	var whichVerb = Math.floor((Math.random() * verbs.length));
	var whichObject = Math.floor((Math.random() * objects.length));



	console.log("\n" + subjects[whichSubject] + " " + verbs[whichVerb] + " " + objects[whichObject]);
}