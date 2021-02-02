console.log("hello world")

obj = {
    a:10,
    b:20,
    c:30
}

console.log("obj  ",obj)

obj2 = Object.create(obj)

console.log("obj2 ",obj2)

console.log(obj2.a) // prints the value of obj.a

console.log(obj == obj2) // prints false 

console.log(obj == obj2.__proto__) // prints true because obj2.__proto__ constains obj
console.log(obj2.__proto__)

obj2.d = 4
obj2.e = 5

console.log(obj2)

obj3 = Object.create(obj2)

console.log(obj3)

console.log(obj3.a) // prints value 10 which is in obj.a as it is inherited

console.log(obj3.__proto__.__proto__) // prints the obj

console.log(obj3.__proto__) // prints obj2

console.log(obj3.__proto__.__proto__ == obj) // prints true

console.log(obj3.a++) 
/*
    obj3.a = obj3.a + 1

    so here it read the obj3.a using proto and the increment it 
    and write in obj3 i.e why the obj3 contains the element 
    {a:11}
*/
console.log(obj3)

