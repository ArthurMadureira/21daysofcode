const questions = [
  {
    question: 'What is 2+2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '22', correct: false },
      { text: '22', correct: false }
    ]
  },
  {
    question: "What is HTML",
    answers: [
      { text: "Handom Text Mark Loop", correct: false },
      { text: "Handom Language Mark Loop", correct: false },
      { text: "Handom Text Mark Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
    ]
  },
  {
    question: "Programming is fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "No", correct: false },
      { text: "Yes", correct: true },
      { text: "I don't like so much", correct: false },
    ]
  },
  {
    question: "Wich is the Python code?",
    answers: [
      { text: "console.log('Hello World')", correct: false },
      { text: "printf('Hello World')", correct: false },
      { text: "print('Hello World')", correct: true },
      { text: "<h1>Hello World</h1>", correct: false },
    ]
  },
  {
    question: "Wich is the best programming language?",
    answers: [
      { text: "Javascript", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "Don't have the best, all is better for something", correct: true },
    ]
  },

]

let shuffledQuestions, currentQuestionIndex

const body = document.querySelector("body")

const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const questionContainer = document.getElementById("question-container")

function startGame() {
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainer.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")

    if (answer.correct) {
      button.dataset.correct = answer.correct
    }

    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")

  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target

  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerHTML = "Next"
    startButton.classList.remove("hide")
  }

}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})