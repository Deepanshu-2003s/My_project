const quizData = [
    {
        question: "1. What is the Capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "2. Who wrote 'Harry Potter'?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        answer: "J.K. Rowling"
    },
    {
        question: "3. What is the Largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "4. Which country is famous for its tulips and windmills?",
        options: ["Germany", "Netherlands", "France", "Belgium"],
        answer: "Netherlands"
    },
    {
        question: "5. Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "6. What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "7. Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Albert Einstein"],
        answer: "Alexander Fleming"
    },
    {
        question: "8. In which year did the Titanic sink?",
        options: ["1912", "1921", "1907", "1933"],
        answer: "1912"
    },
    {
        question: "9. What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "10. Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Charles Dickens", "Emily Brontë"],
        answer: "Harper Lee"
    }
];

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}<br>`;
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;

    const answer = selectedOption.value;
    const currentQuestion = quizData[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        quizContainer.innerHTML = `<h2>Quiz completed!</h2>
                                   <p>Your score: ${score} out of ${quizData.length}</p>`;
    }
}

submitButton.addEventListener('click', checkAnswer);
showQuestion();
