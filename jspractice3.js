var n=parseInt(prompt("Enter the value of n"));
let res=''
    for(let j=0;j<=n;j++)
        if(j%2 !=0 && j%7==0){
            res+=j + ","
        }
alert(res)