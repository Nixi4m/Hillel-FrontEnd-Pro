let array = ['Never','gonna','give','you','up'];
let item = prompt(`Назовите номер элемента, который хотите вырезать (1 - ${array.length} )`)-1;

function remove(array, item){
    array.splice(item, 1);
}
remove(array, item);
console.log(array); 

// //Удалите элемент массива

function average() {
    let array = ['Never', 15, 'gonna', 3,'let', 12,'you', 5,'down'];
    let summ = 0;
    let count = 0;  
    for(let i = 0; i < array.length; i++){
        if (!isNaN(array[i])) {
            count += 1;
            summ += array[i];
        }
    }
    return summ / count;
}

let result = average();
console.log(result)

// //Среднее арифметическое только числовых значений массива

function letterReplace(string, replaced){
    let letters = replaced.join('');
    return string.replace(RegExp(`[${letters}]`, 'gi'), '')
   }
   
console.log(letterReplace('Hello world', ['l', 'd']))

// //Удалить буквы из строкиs