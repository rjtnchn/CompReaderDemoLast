const finalScore1 = document.getElementById("finalScore1");
const finalScore2 = document.getElementById("finalScore2");
const finalScore3 = document.getElementById("finalScore3");
const mostRecentScore1 = localStorage.getItem("mostRecentScore1");
const mostRecentScore2 = localStorage.getItem("mostRecentScore2");
const mostRecentScore3 = localStorage.getItem("mostRecentScore3");

finalScore1.innerText = mostRecentScore1 + "/" + "10";
finalScore2.innerText = mostRecentScore2 + "/" + "10";
finalScore3.innerText = mostRecentScore3 + "/" + "10";
