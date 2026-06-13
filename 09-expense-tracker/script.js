let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
function render() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    transactions.forEach((t, i) => {
        const div = document.createElement('div');
        div.className = `transaction ${t.type}`;
        const amountColor = t.type === 'income' ? '#27ae60' : '#e74c3c';
        const sign = t.type === 'income' ? '+' : '-';
        div.innerHTML = `
            <div class="transaction-info">
                <div class="desc">${t.desc}</div>
                <div class="cat">${t.category} • ${new Date(t.date).toLocaleDateString()}</div>
            </div>
            <div class="amount" style="color:${amountColor}">${sign}$${parseFloat(t.amount).toFixed(2)}</div>
            <button class="delete-btn" onclick="del(${i})">✕</button>
        `;
        list.appendChild(div);
    });
    updateSummary();
}
function updateSummary() {
    const income = transactions.filter(t => t.type === 'income').reduce((a,t) => a + parseFloat(t.amount), 0);
    const expense = transactions.filter(t => t.type === 'expense').reduce((a,t) => a + parseFloat(t.amount), 0);
    document.getElementById('balance').textContent = '$' + (income - expense).toFixed(2);
    document.getElementById('income').textContent = '+$' + income.toFixed(2);
    document.getElementById('expense').textContent = '-$' + expense.toFixed(2);
}
function addTransaction() {
    const desc = document.getElementById('desc').value.trim();
    const amount = document.getElementById('amount').value;
    if (!desc || !amount || parseFloat(amount) <= 0) { alert('Enter valid values'); return; }
    transactions.unshift({ desc, amount, category: document.getElementById('category').value, type: document.getElementById('type').value, date: Date.now() });
    localStorage.setItem('transactions', JSON.stringify(transactions));
    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
    render();
}
function del(i) {
    if (confirm('Delete?')) {
        transactions.splice(i, 1);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        render();
    }
}
render();
