function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (!taskText) return;
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><span>${taskText}</span><button onclick="this.parentElement.remove()">✕</button>`;
    li.querySelector('input').addEventListener('change', function() {
        li.classList.toggle('completed', this.checked);
    });
    document.getElementById('taskList').appendChild(li);
    input.value = '';
    input.focus();
}
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});
