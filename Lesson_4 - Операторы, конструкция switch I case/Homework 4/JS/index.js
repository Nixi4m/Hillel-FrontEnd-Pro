let year = (prompt('Ваш рік народження?'));
let age = (2023 - year);
let yearCount = (`Ваш вік: ${age}`);

if( year >= 2023 ) {
    alert('Введіть ваш рік нарождення')
} 
    else if( year === '' ) {
    alert('Не введено значення')
} 
    else if (year === null ){
    alert('Шкода, що Ви не захотіли ввести свій вік')
}
    else {
    alert( yearCount )    
}

let city = prompt('В якомі місті ви мешкаєте?');
let anotherCity = (`Ти живешь у місті ${city}`);

if( city === 'Київ' ) {
    alert('Ти живешь у столиці України')
}
    else if( city === 'Вашингтон' ) {
    alert('Ти живешь у столиці США')
}
    else if( city === 'Лондон' ) {
    alert('Ти живешь у столиці Великобританії')
}
    else if( city === '' ) {
    alert('Не введено значення')
} 
    else if (city === null ){
    alert('Шкода, що Ви не захотіли ввести своє місто')
}
    else {
    alert( anotherCity )  
}

let sport = prompt('Ваш улюблений вид спорту?');
let box = 'Александром Усиком';
let volleyball = 'Симоне Джаннелли';
let basketball = 'Рикард Рубио';
let anotherSport = (`Ваш улюблений вид спорту: ${sport}`);

if( sport === 'Бокс' ) {
    alert(`Круто! Хочеш стати ${box}?`)
}
    else if( sport === 'Волейбол' ) {
    alert(`Круто! Хочеш стати ${volleyball}?`)
}
    else if( sport === 'Баскетбол' ) {
    alert(`Круто! Хочеш стати ${basketball}?`)
}
    else if( sport === '' ) {
    alert('Не введено значення')
} 
    else if (sport === null ){
    alert('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту')
}
    else {
    alert( anotherSport )
}

alert(`${yearCount} \n${anotherCity} \n${anotherSport}`);