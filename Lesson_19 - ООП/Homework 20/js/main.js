class Student{
    constructor(name, surname, birthYear, mark){
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.mark = mark;
        this.attendance = Array(25);
    }

    getAge(){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear-this.birthYear;
    }

    getMark(){
        if (this.mark.length === 0){
            return null;
        }
        const averageMark = this.mark.reduce((acc, val) => acc + val,0)
        return averageMark/this.mark.length
    }

    present() {
        const index = this.attendance.findIndex((item) => item === undefined);
        if (index !== -1) {
          this.attendance[index] = true;
        } else {
          console.log("Занятия закончились");
        }
      }

    absent() {
        const index = this.attendance.findIndex((item) => item === undefined);
        if (index !== -1) {
          this.attendance[index] = false;
        } else {
          console.log("Занятия закончились");
        }
      }

    summary(){
        const averageMark = this.getMark();
        const actualAttendance = this.attendance.filter(item => item === true).length;
        const averageAttendance = actualAttendance/this.attendance.length;
        
        if (averageMark >= 90 && averageAttendance >= 0.9){
            console.log('Молодець!')
        }
        else if (averageMark >= 90 || averageAttendance >= 0.9){
            console.log('Добре, але можна краще!')
        }
        else{
            console.log('Редиска!')
        }
    }
}

const student1 = new Student('Pablo','Juan', 2000, [90, 100, 80, 90, 100])
const student2 = new Student('Rick','Astley', 1966, [100, 100, 100, 100, 100])
const student3 = new Student('Max','Siva', 2002, [40, 10, 30, 10, 40])

function presentCheck (){
    for(let i = 0; i < 25; i++){
        student1.present()
    }
}
presentCheck()

console.log(student1.name)
console.log(student1.getAge())
console.log(student1.summary())

console.log(student2.name)
console.log(student2.getAge())
console.log(student2.summary())

console.log(student3.name)
console.log(student3.getAge())
console.log(student3.summary())