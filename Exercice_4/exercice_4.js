const lastName = document.querySelector("#lastname");
const firstName = document.querySelector("#firstname");
const city = document.querySelector("#city");
const submitBtn = document.querySelector("#submit");

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

submitBtn.addEventListener("click", function () {
  const lastNameNameFirstUpperLetter = capitalizeFirstLetter(lastName.value);
  const firstNameFirstUpperLetter = capitalizeFirstLetter(firstName.value);
  const cityFirstUpperLetter = capitalizeFirstLetter(city.value);
  alert(
    `Nom : ${lastNameNameFirstUpperLetter}\nPrénom : ${firstNameFirstUpperLetter}\nVille : ${cityFirstUpperLetter}`
  );
});
