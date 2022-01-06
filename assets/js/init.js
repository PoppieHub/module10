const surName = document.querySelector('#surnameOutput');
const firstName = document.querySelector('#firstNameOutput');
const secondName = document.querySelector('#secondNameOutput');
const birthYear = document.querySelector('#birthYearOutput');
const gender = document.querySelector('#genderOutput');
const profession = document.querySelector('#professionOutput');
const image = document.querySelector('.avatar');

function generate () {
    const initPerson = personGenerator.getPerson();

    surName.innerText = initPerson.surName;
    firstName.innerText = initPerson.firstName;
    secondName.innerText = initPerson.secondName;
    birthYear.innerText = initPerson.birth;
    gender.innerText = initPerson.gender;
    profession.innerText = initPerson.profession;

    if (initPerson.gender === personGenerator.GENDER_MALE){
        image.src = 'assets/img/male.svg';
    } else if (initPerson.gender === personGenerator.GENDER_FEMALE) {
        image.src = 'assets/img/female.svg';
    } else {
        image.src = 'assets/img/default.svg';
    }
}

window.addEventListener('load', function () {
    generate();
});


document.querySelector('.delete').addEventListener('click',function () {

    image.src = 'assets/img/default.svg';

    surName.innerText = 'Фамилия';
    firstName.innerText = 'Имя';
    secondName.innerText = 'Отчество';
    birthYear.innerText = 'Дата рождения';
    gender.innerText = 'Пол';
    profession.innerText = 'Профессия';

});

document.querySelector('.refresh').addEventListener('click',()=>generate());