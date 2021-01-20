/*
WRT C++/Java
"This" keyword cannot be writtern inside "Main fucntion" or any static function because it does not belong to any class or object
*/

console.log(this) // this is pointing to the current scope i.e window

let obj = {
    a:"abc",
    b: 10,
    c: true,
    d: function(){
        console.log(this) // this is pointing to the object "obj"
    },

    e:{
        f: 20,
        g: function(){
            console.log(this) // this is pointing to the object "e"
        }
    }

}