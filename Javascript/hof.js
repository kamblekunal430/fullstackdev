function greet(name){
   return console.log(name)
}

function createGreeter(greeting){


    function greet(name){
       //  here we print the string value returned by the function
       //console.log(greeting,name)
       console.log(greeting,name()) // here we call the fucntion that is passed
    }

    return greet

}

function getName(){
    return document.getElementById("name").value
}



let g1 = createGreeter("Good Morning")
let g2 = createGreeter("Good Evening")

/*
console.log(g1())

console.log(typeof g1)

console.log(greet("Kunal"))


console.log(g1("Kunal"))*/