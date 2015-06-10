"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here
function changeElementText(element, answer) {
    $(element).text(answer);
}

function fixTranslation(hindi,urdu,english) {
    var hindiText = "";
    for(var i = 0; i < hindi.length; i++) {
        hindiText = hindiText + " " + hindi[i];
    }
    changeElementText("#incorrectText1", hindiText);

    var urduText = "";
    for(var i = 0; i < urdu.length; i++) {
            urduText = urduText + " " + urdu[i];
    }
    changeElementText("#incorrectText2", urduText);

    var englishText = "";
    for(var i = 0; i < english.length; i++) {
        englishText = englishText + " " + english[i];
    }
    changeElementText("#incorrectText3", englishText);

    var newText = "";
    var totalCount = 0;
    for(var i = 0; i < hindi.length; i++) {
            totalCount++;
            newText = newText + " " + hindi[i];
    }
    newText = newText + " \n";

    for(var i = urdu.length-1; i >= 0; i--) {
       console.log(i);
       totalCount++;
       newText = newText + " " + urdu[i];
    }

    newText = newText + " \n";
    console.log(newText);
    for(var i = 0; i < english.length; i++) {
            totalCount++;
            newText = newText + " " + english[i];
    }
    changeElementText("#correctText", newText);
    changeElementText("#totalTextCount", totalCount);

}

