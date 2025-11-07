const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function () {
  console.log("hello");
  if (firstNumber.value === "" || secondNumber.value === "") {
    alert("Les champs ne peuvent pas être vides");
    return;
  }

  const intFirstNumber = Number(firstNumber.value);
  const intSecondNumber = Number(secondNumber.value);

  if (isNaN(intFirstNumber) || isNaN(intSecondNumber)) {
    alert("Veuillez entrer des nombres valides");
    return;
  }

  if (intSecondNumber === 0) {
    alert("Division par zéro impossible");
    return;
  }

  const divideResult = intFirstNumber / intSecondNumber;
  alert(
    `Le résultat de la division des entiers de ce nombre est de : ${divideResult}`
  );
});
