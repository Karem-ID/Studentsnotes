//récupération des valeurs de champs
const fullName = document.querySelector('.FullName');
const DateOfBirth = document.querySelector('.DateOfBirth');
const gender = document.querySelector('Select[name="gender"]');
const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');
//Récupérer les bouttons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
//validation rules
function validateFullName(fullName) {
    //check if the full name is required
    if (!fullName) {
        return "Full name is required.";
    }

    //check the length of full name
    if(fullName.lenghth < 3 || fullName.lenghth > 20) {
        return "Full nqme must be between 3 qnd 20 characters long.";
    }
    
    //check rhe format of the full name
    if (!/^[a-zA-Z ]+$/.test(fullName)) {
        return "full name must be between 3 and 20 characters long.";
    }

    //if the full name passes all of the validation rules, return null.
    return null;
}