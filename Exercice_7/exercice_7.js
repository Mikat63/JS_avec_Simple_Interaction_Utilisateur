const shoeSize = document.querySelector("#shoeSize");
const yearOfBirth = document.querySelector("#yearOfBirth");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (shoeSize.value === "" || yearOfBirth.value === "") {
    alert("Les champs ne peuvent être remplis");
    return;
  }

  const intShoesSize = parseInt(shoeSize.value);
  const intYearsOfBirth = parseInt(yearOfBirth.value);

  if (isNaN(intShoesSize) || isNaN(intYearsOfBirth)) {
    alert("Vous devez saisir des nombres");
    return;
  }

  const sizeResult = 50 * (intShoesSize * 2 + 5) - intYearsOfBirth + 1766;

  console.log(sizeResult);
});
