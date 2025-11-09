const userInputNumber = document.querySelector('#user_input_number');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (userInputNumber.value === "") {
        alert("Ce champ ne peut être vide");
        return;
    };

    const userInputNumberConvertion = parseInt(userInputNumber.value);

    if (isNaN(userInputNumberConvertion)) {
        alert("saisie impossible, veullez saisir un nombre");
        return;
    };

    if (userInputNumberConvertion < 1 || userInputNumberConvertion > 10) {
        alert("Le nombre saisi doit être compris entre 1 et 10");
    } else if (userInputNumberConvertion < 5) {
        alert("Le nombre saisi est inférieur à 5");
    } else if (userInputNumberConvertion > 5) {
        alert("Le nombre saisi est supérieur à 5");
    } else {
        alert("Le nombre saisi est égal à 5");
    }
}); 
