//complete this code
class Person {
	constructor(name,age){
		get name(){
			return this.name;
		}
		set age(age){
		 this.age=age;
			// return this.age;
		}
	}
}

class Student extends Person {
	constructor(name){
		super(name){
		this.name=name
		}
	}
	study(){
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {

constructor(name){
		super(name){
		this.name=name;
		}
	}
	teach(){
		console.log(`${name} is teaching`);
	}

	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
