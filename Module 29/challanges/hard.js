const strings = ["molle","qershi","fiq","rrush","dredhz","boronic"];

const randomIndex = Math.floor(Math.random()*strings.length);

const [extractedWord = '', anotherWord='']=[strings[randomIndex], strings[randomIndex+1]];
if(extractedWord){
    console.log("ExtarxtedWord:", extractedWord);
}else {
    console.log("No valid extracted word found.");
}