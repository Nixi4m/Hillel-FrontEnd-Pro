let resultA = '';
let i = 20;

do {
  i += 0.5;
  resultA += i + ' ';
} while (i < 30);

console.log(resultA)

// Шаг в 0.5

let resultB = '';
let i2 = 0;

do {
  i2 += 10;
  dollar = i2 * 27;
  resultB += dollar + ' ';
} while (i2 < 100);

console.log(resultB)

// Доллар по 27

let resultC = '';
let i3 = 1;

do {
  i3++;
  square = i3 ** 2;
  resultC += square + ' ';
} while (square < 100);

console.log(resultC)

// Квадратный коррень меньше 100

let primeNum = prompt('Введіть число')

function isPrime(n) {
  if (n === 1 || n === 2) {
    return 'Просте число';
  } 

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return 'Не просте число';
    }
  }
  
  return 'Просте число';
}

console.log(isPrime(primeNum))

// Простое число

let number = prompt('Введіть число')

while (number % 3 == 0) {
  number /= 3;
}
console.log((number == 1)? "Число можна отримати" : "Число не можна отримати");

// Получить число путём возведения 3 в степень 