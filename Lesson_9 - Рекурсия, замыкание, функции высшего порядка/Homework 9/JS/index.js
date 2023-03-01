function number() {
    let result = 0;
    return function addNumber(num){
        result += num
        return result
    }
}

let sum = number();

console.log(sum(3));
console.log(sum(5));
console.log(sum(8));