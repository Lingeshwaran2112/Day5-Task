//1.	Do the below programs in anonymous function & IIFE
//a.	Print odd numbers in an array

        var a=[1,2,3,4];
        function odd(arr){
    
            for(var i=0;i<arr.length;i++){
        
                if(arr[i] % 2!== 0)
            
                console.log(arr[i]);
        }
    }

        odd(a)

//b.	Convert all the strings to title caps in a string array
//solution

        function title(str){
        str=str.toLowerCase().split(' ');
    
        for (var i=0;i<str.length;i++){
        
            str[i] =str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
    
        return str.join(' ');
    }

                console.log(title('guvi geek'))

//c.	Sum of all numbers in an array
//solution

       
            var a=[1,2,3,4];
            function sum(arr){
            var sum1=0;
    
            for(var i=0;i<arr.length;i++){
            sum1 +=arr[i];
        }
    
        return sum1;
    }

                console.log(sum(a))

//d.	Return all the prime numbers in an array
//solution

                var a=[1,2,3,4,5,6,7,8,9,10];

                function prime(arr){
        
                for(var i=2;i<arr;i++){
        
                    if(arr % i==0){
            
            return false;
        }
        }
       
        return arr > 1;
    }

            console.log(a.filter(prime))

//e.	Return all the palindromes in an array
//solution
        function palidrome(str){
    
            for(var i=0;i<a.length/2;i++){
        
                if(a[i] !== a[a.length -1 -i]){
            
                    return false;
            }
        }
      
        return a;
    }

            var a='dad';
        
            console.log(palidrome(a))

//f.	Return median of two sorted arrays of same size
//solution
        function median(ar1,ar2,n){
        
            var i=0;
            var j=0;
            var count=0;
            var m1= -1, m2= -1;
    
            for(count=0;count <= n;count++){
          
            if(i==n){
            m1=m2;
            m2=ar2[0];
            break;
        }
        
        else if(j==n){
            m1=m2;
            m2=ar1[i];
            i++;
        }
        
        else{
            m1=m2;
            m2=ar2[j];
            j++;
        }
    }
        return (m1+m2)/2;
}
    var ar1=[1,12,15,26,38];
    var ar2=[2,13,17,30,45];
    var n1=ar1.length;
    var n2=ar2.length;
    if(n1==n2)
    console.log(median(ar1,ar2,n1));

//g.	Remove duplicates from an array
//solution
    function uniq(arr){
     
        let uniqarr =[];
        for (let i of arr){
        
            if(uniqarr.indexOf(i)=== -1){
            uniqarr.push(i);
        }
    }
         
        console.log(uniqarr);
    }
        
        var a=[1,2,3,2,3];
        uniq(a)

//h.	Rotate an array by k times
//solution
    function rotate(a,n,k){
    k=k % n;
    for(let i=0;i<n;i++){
        
        if(i<k){

            console.log(a[n+i-k] + " ");
        }else{

            console.log((a[i-k]) + " ");
        }
    }
    return ;
    }
    let array=[1,2,3,4,5];
    let n=array.length;
    let k=2;

    rotate(array,n,k);


