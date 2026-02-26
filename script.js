const questions = [
  {
    question: "Where is Codtech IT Solutions located?",
    answers: [
      { text: "Tamil Nadu", correct: false },
      { text: "Hyderabad", correct: true },
      { text: "Rajasthan", correct: false },
      { text: "Keralam", correct: false }
    ]
  },
  {
    question: "Which language is primarily used for Frontend Development?",
    answers: [
      { text: "Python", correct: false },
      { text: "Javascript", correct: true },
      { text: "C++", correct: false },
      { text: "Java", correct: false }
    ]
  },
  {
    question: "What year was JavaScript created?",
    answers: [
      { text: "1996", correct: false },
      { text: "1995", correct: true },
      { text: "1994", correct: false },
      { text: "2000", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.addEventListener("click", () => selectAnswer(answer.correct, button));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(correct, button) {
  if (correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(btn => {
    btn.disabled = true;
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById("quiz").classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreText.innerText = `You scored ${score} out of ${questions.length}!`;
}

startQuiz();
