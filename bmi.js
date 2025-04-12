function Validate(event) {
    event.preventDefault();

    const heightCm = document.getElementById('Height').value;
    const weight = document.getElementById('Weight').value;

    if (!heightCm || !weight) {
        alert("Please enter valid height and weight.");
        return false;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);

    // Show BMI in the result box 
    document.getElementById("result").value = bmi;

    // Show entered height and weight
    // const message = 'Your height is ' + heightCm + ' cm<br>' +
    //                 'Your weight is ' + weight + ' kg';
    // document.getElementById("display").innerHTML = message;

    // Display weight condition
    const condition = document.getElementById('weight-condition');
    if (bmi < 18.5) {
        condition.innerText = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        condition.innerText = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        condition.innerText = "Overweight";
    } else {
        condition.innerText = "Obesity";
    }

    return false;
}