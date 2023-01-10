//Eli Pruneda 1/9/23
//1.9.23 - It appears that the button behavior is "bubbling." Testing stopPropagation(), so far no luck.
//  Need to finish the timer because right now it just counts from 10 and alerts the page- it should 
//  have the same behavior as a wrong answer if the time runs out.
//  Need to implement local storage and requesting name or initials for saving high scores.

// Ask a question - DONE
// Provide multiple choice, selectable answers - DONE
// Be able to click choices
// On click, evaluate to correct or incorrect
// Inform user of outcome
// Record the answer
// Get the next question + start over.
// When all the questions are done, display score, 
// Update high scores + rank them from highest to lowest

//Timer function
var secondsLeft = 10;
timeEl = document.querySelector(".timer");
// console.log(timeEl);
function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time left: "+ secondsLeft;
        // console.log(secondsLeft);
        if(secondsLeft === 0 ){
            clearInterval(timerInterval);
            alert("Time is up!");
        }
    },1000)
}
//qIndex used to track which question we're on.
var qIndex = 0;
var score = 0;
function loadQuestion(qIndex){
    ask();
    console.log("Current Question: "+qIndex);
    console.log("Current score: "+score);
}

function correct(){
    alert("Correct!");
    sessionStorage.setItem(score, score++);
    sessionStorage.setItem(qIndex, qIndex++);
    loadQuestion(qIndex);
}

function incorrect(){
    alert("Incorrect!");
    sessionStorage.setItem(qIndex, qIndex++);
    loadQuestion(qIndex);
}
//Asking questions
function ask(){
    
    var qTag = document.getElementById('question');
    var question = [
        "Question 1: What does DOM stand for?",
        "Question 2: .getElementById() will act on:",
        "Question 3: What is a callback function?",
        "Question 4: What is JQuery?",
        "Question 5: What is JSON?",
        "Question 6: What is AJAX?",
        "Question 7: What is Angular JS?",
        "Question 8: What is an Object in Javascript?",
        "Question 9: What is JSON.stringify()?",
        "Question 10: What is hoisting in Javascript?",
    ];
    qTag.innerText = question[qIndex];
    
    var optionsQ1 = [
        "A- Dang Oh Man.", 
        "B- Document Object Model.", 
        "C- Document Observe Model.", 
        "D- Demonstrate Object Model."
    ];

    var optionsQ2 = [
        "A- The class of an element.", 
        "B- The attribute of an element.", 
        "C- The id of an element.", 
        "D- The tag of an element."
    ];

    var optionsQ3 = [
        "A- A function that is passed as an argument to another function.", 
        "B- A function to call the error log.", 
        "C- A function that is out of scope.", 
        "D- A function that solves all your problems."
    ];

    var optionsQ4 = [
        "A- A MySQL database API for Javascript.", 
        "B- A language based on Javascript but in Japanese.", 
        "C- A Javascript library that uses inline Python.", 
        "D- A Javascript library that makes it much easier to use Javascript."
    ];

    var optionsQ5 = [
        "A- Jeans Surfer-Onsite Notation - Jean Surfer famous coder who cracked the mystery of turning machines.", 
        "B- Javascript Observation Notation - A special JS syntax used by NASA.", 
        "C- Javascript Object Notation - lightweight format for storing and transporting data.", 
        "D- Java Soul Onsite Normal - a bunch of gibberish."
    ];

    var optionsQ6 = [
        "A- Asynchronous Javascript and XML - the use of XML HTTP request to communicate with servers.", 
        "B- A famous Greek mythical hero who vanquished his enemies.", 
        "C- Asynchronous coding- for when you don't know when something will happen.", 
        "D- A famous french chef who made the baguette."
    ];

    var optionsQ7 = [
        "A- Angular is a framework for generating geometric shapes on a screen.", 
        "B- Angular is a framework for calculating trigonometry formulas.", 
        "C- Angular is a language based on java but for mobile apps only.", 
        "D- Angular is a structural framework for dynamic web apps. It extends HTML and starts automaticaly on page load."
    ];

    var optionsQ8 = [
        "A- A type of variable that manipulates arrays only.", 
        "B- An object is a standalone entity, with properties and a type.", 
        "C- One of the primitive data types.", 
        "D- An object is an entity that requires use of integers."
    ];

    var optionsQ9 = [
        "A- A method that will parse and annotate any two strings.", 
        "B- A way for Javascript to manipulate XML", 
        "C- A way to translate data to a string in order to send data to a web server.", 
        "D- One of the most popular jQuery selectors."
    ];

    var optionsQ10 = [
        "A- Javascript's default behavior of moving declarations to the top.", 
        "B- Java's default behavior for scope.", 
        "C- Javascript's old server methods before JSON was made.", 
        "D- A way to allow const and let to be declared after they are used."
    ];
    // Options for Q1
    if(qIndex == 0){
        var ansA = document.getElementById("a");
        ansA.innerText = optionsQ1[0];
        var ansB = document.getElementById("b");
        ansB.innerText = optionsQ1[1];
        var ansC = document.getElementById("c");
        ansC.innerText = optionsQ1[2];
        var ansD = document.getElementById("d");
        ansD.innerText = optionsQ1[3];
        //lets say B is correct
        ansB.addEventListener("click", function(e){
            e.stopPropagation()
            correct();
        });
        ansA.addEventListener("click", function(e){
            e.stopPropagation()
            incorrect();
        });
        ansC.addEventListener("click", function(e){
            e.stopPropagation()
            incorrect();
        });
        ansD.addEventListener("click", function(e){
            e.stopPropagation()
            incorrect();
        });
        
    // Options for Q2
    }else if(qIndex == 1){ 
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ2[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ2[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ2[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ2[3];
        //lets say C is correct
        ansB.addEventListener("click", function(e){
            incorrect();
            e.stopPropagation()
        });
        ansA.addEventListener("click", function(e){
            incorrect();
            e.stopPropagation()
        });
        ansC.addEventListener("click", function(e){
            correct();
            e.stopPropagation()
        });
        ansD.addEventListener("click", function(e){
            incorrect();
            e.stopPropagation()
        });
    // Options for Q3
    }else if(qIndex == 2){
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ3[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ3[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ3[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ3[3];
        //lets say A is correct
        ansB.addEventListener("click", function(){
            incorrect();
        });
        ansA.addEventListener("click", function(){
            correct();
        });
        ansC.addEventListener("click", function(){
            incorrect();
        });
        ansD.addEventListener("click", function(){
            incorrect();
        });
    // Options for Q4
    }else if(qIndex == 3){
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ4[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ4[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ4[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ4[3];
        //lets say D is correct
        ansB.addEventListener("click", function(){
            incorrect();
        });
        ansA.addEventListener("click", function(){
            incorrect();
        });
        ansC.addEventListener("click", function(){
            incorrect();
        });
        ansD.addEventListener("click", function(){
            correct();
        });
    // Options for Q5
    }else if(qIndex == 4){
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ5[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ5[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ5[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ5[3];
        //lets say C is correct
        ansB.addEventListener("click", function(){
            incorrect();
        });
        ansA.addEventListener("click", function(){
            incorrect();
        });
        ansC.addEventListener("click", function(){
            correct();
        });
        ansD.addEventListener("click", function(){
            incorrect();
        });
    }else if(qIndex == 5){
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ6[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ6[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ6[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ6[3];
        //lets say A is correct
        ansB.addEventListener("click", function(){
            incorrect();
        });
        ansA.addEventListener("click", function(){
            correct();
        });
        ansC.addEventListener("click", function(){
            incorrect();
        });
        ansD.addEventListener("click", function(){
            incorrect();
        });
    //Options for Q7
    }else if(qIndex == 6){
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ7[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ7[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ7[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ7[3];
        //lets say D is correct
        ansB.addEventListener("click", function(){
            incorrect();
        });
        ansA.addEventListener("click", function(){
            incorrect();
        });
        ansC.addEventListener("click", function(){
            incorrect();
        });
        ansD.addEventListener("click", function(){
            correct();
        });
    //Options for Q8
    }else if(qIndex == 7){
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ8[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ8[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ8[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ8[3];
        //lets say B is correct
        ansB.addEventListener("click", function(){
            correct();
        });
        ansA.addEventListener("click", function(){
            incorrect();
        });
        ansC.addEventListener("click", function(){
            incorrect();
        });
        ansD.addEventListener("click", function(){
            incorrect();
        });
    //Options for Q9
    }else if(qIndex == 8){
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ9[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ9[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ9[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ9[3];
        //lets say C is correct
        ansB.addEventListener("click", function(){
            incorrect();
        });
        ansA.addEventListener("click", function(){
            incorrect();
        });
        ansC.addEventListener("click", function(){
            correct();
        });
        ansD.addEventListener("click", function(){
            incorrect();
        });
    //Options for Q10
    }else if(qIndex == 9){
        ansA = document.getElementById("a");
        ansA.innerText = optionsQ10[0];
        ansB = document.getElementById("b");
        ansB.innerText = optionsQ10[1];
        ansC = document.getElementById("c");
        ansC.innerText = optionsQ10[2];
        ansD = document.getElementById("d");
        ansD.innerText = optionsQ10[3];
        //lets say A is correct
        ansB.addEventListener("click", function(){
            incorrect();
        });
        ansA.addEventListener("click", function(){
            correct();
        });
        ansC.addEventListener("click", function(){
            incorrect();
        });
        ansD.addEventListener("click", function(){
            incorrect();
        });
    }
}

setTime();
//ask();
loadQuestion(0);

