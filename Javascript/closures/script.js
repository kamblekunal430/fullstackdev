function outer(arg1){

    console.log("inside outer")

    var1 = 10

    function inner(arg2){
        var2 = 20
        console.log("inside inner")
        console.log(arg1,var1,arg2,var2)
    }

    return inner
}


x = outer("outer arg")

x("inner arg")

