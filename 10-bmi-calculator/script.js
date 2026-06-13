let unit = 'metric';
function setUnit(u, btn) {
    unit = u;
    document.querySelectorAll('.unit-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (u === 'metric') {
        document.getElementById('weightLabel').textContent = 'Weight (kg)';
        document.getElementById('heightLabel').textContent = 'Height (cm)';
        document.getElementById('weight').placeholder = 'Enter weight in kg';
        document.getElementById('height').placeholder = 'Enter height in cm';
    } else {
        document.getElementById('weightLabel').textContent = 'Weight (lbs)';
        document.getElementById('heightLabel').textContent = 'Height (inches)';
        document.getElementById('weight').placeholder = 'Enter weight in lbs';
        document.getElementById('height').placeholder = 'Enter height in inches';
    }
    document.getElementById('result').classList.remove('show');
}
function calculate() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    if (!weight || !height || weight <= 0 || height <= 0) { alert('Please enter valid values'); return; }
    if (unit === 'imperial') { height = height * 2.54; weight = weight * 0.453592; }
    height = height / 100;
    const bmi = weight / (height * height);
    showResult(bmi);
}
function showResult(bmi) {
    let cat, color, tip, pos;
    if (bmi < 18.5) { cat = 'Underweight'; color = '#3498db'; tip = 'Consider consulting a nutritionist. Increase caloric intake with nutrient-rich foods.'; pos = 12.5; }
    else if (bmi < 25) { cat = 'Normal Weight'; color = '#27ae60'; tip = 'Great job! Maintain a balanced diet and regular exercise.'; pos = 37.5; }
    else if (bmi < 30) { cat = 'Overweight'; color = '#f39c12'; tip = 'Consider increasing physical activity and monitoring your diet.'; pos = 62.5; }
    else if (bmi < 35) { cat = 'Obese (Class I)'; color = '#e67e22'; tip = 'It is recommended to seek guidance from a healthcare provider.'; pos = 77.5; }
    else { cat = 'Obese (Class II+)'; color = '#e74c3c'; tip = 'Please consult a healthcare professional for a personalized plan.'; pos = 87.5; }
    document.getElementById('bmiVal').textContent = bmi.toFixed(1);
    document.getElementById('bmiVal').style.color = color;
    document.getElementById('category').textContent = cat;
    document.getElementById('category').style.color = color;
    document.getElementById('pointer').style.left = Math.min(pos, 95) + '%';
    document.getElementById('tips').textContent = tip;
    document.getElementById('result').classList.add('show');
}
