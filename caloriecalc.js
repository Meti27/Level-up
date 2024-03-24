document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault(); // This prevents the default form submission behavior

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const calories = bmr * activity;
    document.getElementById('result').innerText = `Daily Calorie Needs: ${calories.toFixed(2)} calories`;
});

