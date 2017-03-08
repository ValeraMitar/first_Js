function lanGuage (query) {
    var result;
    do {
        result = Number(prompt (query));
    } while (result < 1 || result > 2);
    return result;
}
var language = lanGuage('Укажите язык ввода :' + '\n' + 'Select language input :' + '\n' + '1 - Русский' + '\n' + '2 - Английский');

if (language == 1) {
    var firsName = prompt('Введите Фамилию:'),
        secondName = prompt('Введите Имя:'),
        middleName = prompt('Введите Отчество:'),
        userAge = Number(prompt('Введите ваш возраст (полных лет) :')),
        genDer = confirm('Ваш пол мужской ?');
    if (genDer == true) {
        genDer = 'мужской';
        if (userAge >= 63) {
            retirementAge = 'Да'
        } else {
            retirementAge = 'Нет'
        }
    } else {
        genDer = 'женский';
        if (userAge >= 58) {
            retirementAge = 'Да';
        } else {
            retirementAge = 'Нет'
        }
    }

    firsName = firsName.charAt(0).toUpperCase() + firsName.substr(1).toLowerCase();
    secondName = secondName.charAt(0).toUpperCase() + secondName.substr(1).toLowerCase();
    middleName = middleName.charAt(0).toUpperCase() + middleName.substr(1).toLowerCase();
    alert('Ваше ФИО : ' + firsName + ' ' + secondName +' ' +
        middleName + ' ' + ' ;' + '\n' +
        'Ваш возраст : ' + userAge + ' ;' + '\n' +
        'Ваш возраст в днях : ' + (userAge * (365)) + ' ;' + '\n' +
        'Через 5 лет вам будет : ' + (userAge + (5)) + ' ;' + '\n' +
        'Ваш пол : ' + genDer + ' ;' + '\n' +
        'Вы на пенсии : ' + retirementAge + ' .');
} else {
    var firsName = prompt('Enter First name :'),
        secondName = prompt('Enter Second name :'),
        middleName = prompt('Enter Middle Name :'),
        userAge = Number(prompt('Enter your age :')),
        genDer = confirm('Are you man ?');
    if (genDer == true) {
        genDer = 'male';
        if (userAge >= 63) {
            retirementAge = 'Yes'
        } else {
            retirementAge = 'No'
        }
    } else {
        genDer = 'female';
        if (userAge >= 58) {
            retirementAge = 'Yes';
        } else {
            retirementAge = 'No'
        }
    }
    alert('Your FSM: ' + firsName.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()) + ' ' + secondName.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()) + ' ' +
    middleName.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()) + ' ' + ' ;' + '\n' +
    'Your age : ' + userAge + ' ;' + '\n' +
    'Your age in days : ' + (userAge * (365)) + ' ;' + '\n' +
    'In 5 years you will be : ' + (userAge + (5)) + ' ;' + '\n' +
    'Your gender : ' + genDer + ' ;' + '\n' +
    'You are retired : ' + retirementAge + ' .');
}
