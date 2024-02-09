//complete this code
class Person {

	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	getName(){
			return this.name;
		}
		setAge(age){
		 this.age=age;

		}
}

class Student extends Person {
	constructor(name){
		super(name){
		// this.name=name
		}
	}
	study(){
		console.log(`${this.getName} is studying`);
		// return 
	}
}

class Teacher extends Person {

constructor(name){
		super(name){
	
		}
	}
	teach(){
		console.log(`${this.getName} is teaching`);
		// return
	}

	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
