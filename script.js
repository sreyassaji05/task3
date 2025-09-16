const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hyper Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Home Tool Markup Language",
    correct: "a"
  },
  {
    question: "Which company developed JavaScript?",
    a: "Google",
    b: "Netscape",
    c: "Microsoft",
    d: "Oracle",
    correct: "b"
  },
  {
    question: "Which tag is used for the largest heading in HTML?",
    a: "<h1>",
    b: "<heading>",
    c: "<h6>",
    d: "<head>",
    correct: "a"
  }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  resetState();
  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  answerBtns[0].innerText = currentQuizData.a;
  answerBtns[1].innerText = currentQuizData.b;
  answerBtns[2].innerText = currentQuizData.c;
  answerBtns[3].innerText = currentQuizData.d;
}

function resetState() {
  feedback.innerText = "";
  answerBtns.forEach(btn => {
    btn.disabled = false;
    btn.style.background = "#575fcf";
  });
}

answerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let answer = btn.getAttribute("data-option");
    if (answer === quizData[currentQuiz].correct) {
      feedback.innerText = "Correct!";
      feedback.style.color = "#05c46b";
      score++;
      btn.style.background = "#05c46b";
    } else {
      feedback.innerText = "Wrong!";
      feedback.style.color = "#ff4d4d";
      btn.style.background = "#ff4d4d";
    }
    answerBtns.forEach(b => b.disabled = true);
  });
});

nextBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                      <button onclick="location.reload()">Reload</button>`;
  }
});

loadQuiz();
