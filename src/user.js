function sayHello() {
    for (var i = 0; i < 5; i++){
        console.log(i)
    }
    console.log(i);
}

sayHello()

//1: Variables declard with a 
//var -> function 
// Are scoped to the function
//2: let -> block

// Const -> block 

const x = 1 
x = 2


const person = { 

    name="Shubs",
    walk(){},
    talk(){}
    }
}

//Dot Notation is reffered to the
//code below 
person.talk()
person.name = " "
//Bracket Notation 
person['name']='John'
// We only use bracket notation 
// when we dont know if what property 
// we are going to use ahead of time 

const targetMemeber = 'name'
person[targetMember.value] = 'John';