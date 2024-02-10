//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get nameI(){
			return this.name;
		}
		set ageI(age){
		 this.age=age;
		}
}

class Student extends Person {
	// constructor(name){
	// 	super(name)
	// }
	study(){
		console.log(`${this.name} is studying`);
		// return 
	}
}

class Teacher extends Person {

// constructor(name){
// 		super(name)
// 	}
	teach(){
		console.log(`${this.name} is teaching`);
		// return
	}

	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
