class Student{
    static totalStudents = 0;
    constructor(rollNo, name, marks){
        this.rollNo=rollNo;
        this.name=name;
        this.marks=marks;
        Student.totalStudents++;
    }
    displayResult() {
        console.log("Roll No:",this.rollNo);
        console.log("Name:",this.name);
        console.log("Marks:",this.marks);
         if (this.marks>=40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
        console.log("");
    }
    static displayTotalStudents() {
        console.log("Total Students Created:", Student.totalStudents);
    }
}
let s1 = new Student(101,"Krishna",85);
let s2 = new Student(102,"Prakhar",72);
let s3 = new Student(103,"Mukeem",35);
s1.displayResult();
s2.displayResult();
s3.displayResult();
Student.displayTotalStudents();




    