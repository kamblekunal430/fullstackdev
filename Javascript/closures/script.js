function outer(arg1){

    console.log("inside outer")
    console.log(arguments[0],arguments[1]) //arguments does not come under closure scope

    var1 = 10

    let x = 10

    function inner(arg2){
        var2 = 20
        let x = 20
        console.log("inside inner")
        console.log(arg1,var1,arg2,var2)
        console.log(arguments[0])

        console.log(x) // the outer x is shadowed by the innner x
    }

    return inner
}


x = outer("outer arg",11)

x("inner arg")

