let first = prompt('Введите значение')
let second = prompt('Введите значение')
let third = prompt('Введите значение')
alert('Результат: '+first+' '+second+' '+third)

function test (num){
let numSpace = num.toString().split('')
console.log(numSpace[0],numSpace[1],numSpace[2],numSpace[3],numSpace[4])
console.log(numSpace[4],numSpace[3],numSpace[2],numSpace[1],numSpace[0])
}
test(12345)
