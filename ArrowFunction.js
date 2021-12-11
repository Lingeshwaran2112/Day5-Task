//3.	  Do the below programs in arrow functions

//a.	Print odd numbers in an array
//solution

        var a=[1,2,3,4];
        var res=a.filter((ele)=> ele%2!==0);

        console.log(res)

//b.	Convert all the strings to title caps in a string array
//solution

        var str="guvi geek";
        var res=str.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");

        console.log(res)

//c.	Sum of all numbers in an array
//solution

        var a=[1,2,3,4];
        var res=a.reduce((acc,val)=>acc+val,0);

        console.log(res)

//d.	Return all the prime numbers in an array
//solution

        var a=[1,2,3,4,5,6,7,8,9,10];
        var res=a.filter(num=>{
    
            for(let i=2;i<num;i++){
        if (num % i===0)return false;
    }
    return num !==1;
});

        console.log(res)

//e.	Return all the palindromes in an array
//solution
       palidrome=(str="")=>{
    
       if (str[0]=== str[str.length - 1]){
        return str.length<= 1 ? true : palidrome(str.slice(1,-1))
    }

    return false;
}
       
        console.log(["racecar","dad"].map((e,i)=>palidrome(e)).join());