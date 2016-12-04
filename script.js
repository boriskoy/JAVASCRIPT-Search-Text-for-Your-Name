/*jshint multistr:true */
var text = "Boris is a great Boris.\nYou don\'t know that?";
var myName = "Boris";
var hits = [];

for(i = 0; i < text.length; i++) {
    if(text[i] ==='B'){
        for(var j = i; j < (i + myName.length); j++) {
            hits.push(text[j]);
        };
    };
};

if (hits.length === 0) {
    console.log("Your name wasn't found!")
} else {
    console.log(hits);
}
