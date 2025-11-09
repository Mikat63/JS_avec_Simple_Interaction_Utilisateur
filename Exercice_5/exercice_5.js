const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function () {
  if (firstNumber.value === "" || secondNumber.value === "") {
    alert("Les champs ne peuvent pas être vides");
    return;
  }

  const intFirstNumber = parseInt(firstNumber.value);
  const intsecondNumber = parseInt(secondNumber.value);

  if (isNaN(intFirstNumber)) {
    alert("Veuillez entrer des nombres valides");
    return;
  }

  const multiplyresult = intFirstNumber * intsecondNumber;
  alert(
    `Le résultat de la multiplication des entiers de ce nombre est de : ${multiplyresult}`
  );
});
