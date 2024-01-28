function test(a,b,c,d){
    if(a>b && c>d){
        return true
    }
    else{
        return false
    }
}

let a=parseInt(prompt("Enter integer value of a"))
let b=parseInt(prompt("Enter integer value of b"))
let c=parseInt(prompt("Enter integer value of c"))
let d=parseInt(prompt("Enter integer value of d"))

alert(test(a,b,c,d))