console.log("Hello World")

console.log(beta())

function alpha()
{
    return "A"
}
function beta(){
    return "B"
}

console.log(alpha())

//console.log(gamma()) //reference error

let gamma = function (){
    return "c"
}

console.log(gamma())



// polymorphism

function area(height, width){

    if (!width){
        return Math.PI * height * height
    }
    return height * width
}


console.log("3,4",area(3,4))
console.log("3",area(3))