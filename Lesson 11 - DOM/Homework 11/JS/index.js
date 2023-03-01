let num = prompt('Назовите число, которое хотите возвести в степень: ')
let deg = prompt('Назовите степень, в которую хотите возвести число: ')

function numDeg(num, deg){
  if (deg == 1) {
    return num;
  } else {
    return num * numDeg(num, deg - 1);
  }
}

alert(numDeg(num, deg))
