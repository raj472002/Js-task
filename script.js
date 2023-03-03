const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (isNaN(height) || isNaN(weight)) {
    result.textContent = "Please enter valid values.";
    result.className = "";
    return;
  }

  const bmi = weight / ((height / 100) * (height / 100));

  let category;
  let color;

  if (bmi < 18.5) {
    category = "underweight";
    color = "yellow";
  } else if (bmi < 25) {
    category = "normal";
    color = "green";
  } else if (bmi < 30) {
    category = "overweight";
    color = "yellow";
  } else {
    category = "obese";
    color = "red";
  }

  result.textContent = `Your BMI is ${bmi.toFixed(1)}. You are ${category}.`;
  result.className = category;
  result.style.color = color;
});
