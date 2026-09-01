const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("result");

const calculate = () => {
  const heightValue = Number(height.value);   // Number Converts String to Number
  const weightValue = Number(weight.value);     // Converted Weight also

  if (heightValue < 0 || weightValue < 0) {
    result.textContent = "Negative Data no allowed.";    // To check if no negative np. are entered.
    return;
  }

  if (heightValue === 0 || weightValue === 0) {
    result.textContent = "Enter some value.";       // To check if no neg np. are entered.
    return;
  }

  const bmi = (weightValue / (heightValue * heightValue) * 10000).toFixed(2);       //calculate BMI

  if (bmi < 18.5) {             // checking BMI factor and accordingly giving respective input
    result.innerText = `Your are Under Weight. ${bmi}`;
  } else if (bmi < 25) {
    result.innerText = `Your are Normal. ${bmi}`;
  } else {
    result.innerText = `Your are Over Weight. ${bmi}`;
  }
};
