function greeting(person, name){
    person(name)
}

// const person1 = greeting("Halim mia")
// const array = [12, 34, 23]
// const object = {laptop : 45000, brand : "lenovo"}
// greeting(object)
// greeting(array)
function person(name){
    console.log("good morning", name)
}

function greetEvening(name){
    console.log("good evening", name)
}

greeting(person, 'tom hanks')
greeting(greetEvening, 'Alamin')

