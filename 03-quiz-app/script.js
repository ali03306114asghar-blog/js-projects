const questions = [
    { q: "What is the output of typeof null?", options: ["null", "undefined", "object", "number"], answer: 2 },
    { q: "Which method converts JSON to object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"], answer: 1 },
    { q: "What does === check?", options: ["Value only", "Reference only", "Type and value", "Memory"], answer: 2 },
    { q: "Which is not a primitive type?", options: ["String", "Number", "Array", "Boolean"], answer: 2 },
    { q: "What is closure in JS?", options: ["A function inside function", "Function with access to parent scope", "Data hiding", "All of above"], answer: 3 }
];
let current = 0, score = 0;
function loadQuestion() {
    const q = questions[current];
    document.getElementById('quizContainer').innerHTML = `
        <div class="question">Q${current+1}: ${q.q}</div>
        <div class="options">${q.options.map((o,i) => `<div class="option" onclick="selectOption(${i}, this)">${o}</div>`).join('')}</div>
    `;
    document.getElementById('nextBtn').style.display = 'block';
}
function selectOption(index, el) {
    const q = questions[current];
    document.querySelectorAll('.option').forEach(o => o.style.pointerEvents = 'none');
    if (index === q.answer) { el.classList.add('correct'); score++; }
    else { el.classList.add('wrong'); document.querySelectorAll('.option')[q.answer].classList.add('correct'); }
    document.getElementById('nextBtn').textContent = current === questions.length-1 ? 'See Result' : 'Next';
}
function nextQuestion() {
    current++;
    if (current < questions.length) loadQuestion();
    else showResult();
}
function showResult() {
    document.getElementById('quizContainer').innerHTML = `<div class="score">Your Score: ${score}/${questions.length}</div>`;
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('restartBtn').style.display = 'block';
}
function restartQuiz() { current = 0; score = 0; loadQuestion(); document.getElementById('restartBtn').style.display = 'none'; }
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);
loadQuestion();
