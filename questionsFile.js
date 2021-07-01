var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");
var hElement = document.querySelector("#title");
var oderListEl = document.querySelector("#q-list");
var finishDiv = document.querySelector(".finish-section");
var finalScore = document.querySelector("#result");
var errMsg = document.querySelector("#errorSmg");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var responsDiv = document.querySelector("#response");
var finaPageEl = document.querySelector(".final-page");
var initialAndScore = document.querySelector("#staticEmail");
var firstPageEl = document.querySelector(".first-page");



// Create an  array of questions
var questions = [
    {
        title: "Who developed Yahoo?",
        choices: ["Dennis Ritchie  & Ken Thompson", "David Filo & Jerry Yang", "Vint Cerf & Robert Kahn", "Steve Case & Jeff Bezos"],
        answer: "David Filo & Jerry Yang",
    },
    {
        title: "Which of the following function of the String object splits a String object into an array of strings by separating the string into substrings?",
        choices: ["slice()", "split()", "replace()", "search"],
        answer: "split()",
    },
    {
        title: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
        choices: ["indexOf()", "join()", "lastIndexOf()", "map()"],
        answer: "indexOf()",
    },
    {
        title: "Which built-in method returns the length of the string",
        choices: ["length()", "size()", "index()", "None of the above"],
        answer: "length()",
    },
    {   
        title: "Which of the following function of Array object reveres the order of the elements of an array?",
        choices: ["reverse()", "push()", "reduce()", "reduceRight()"],
        answer: "reverse()",
    }
]


 /**Create next questions to be added to the HTML document dynamically*/
function displayQuestions() {
    var holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    oderListEl.innerHTML = '';

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    oderListEl.appendChild(liTag1);
    divContEL.appendChild(oderListEl);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    oderListEl.appendChild(liTag2)
    divContEL.appendChild(oderListEl);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    oderListEl.appendChild(liTag3)
    divContEL.appendChild(oderListEl);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    oderListEl.appendChild(liTag4);
    divContEL.appendChild(oderListEl);
    var allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}