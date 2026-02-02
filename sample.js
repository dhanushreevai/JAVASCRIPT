//function palindrome(sentence)
//{
  //  let str =sentence.split(" ").join("")
  //  let reversed= str.split("").reverse().join("")
 //   return str===reversed 
//}
// console.log(palindrome("nurses run"))

// function array1(arr)
//{
//    let sum=0
//    arr.map(num => sum += num)
//    return sum;
//}
//console.log(array1([1,2,3,4,5,6]))

//const numbers = [1,2,3,4,5,6]
//numbers.sort((a,b)=>b-a)
//console.log(numbers[0])

//const numbers = [1,2,3,4,5,6,0]
//numbers.sort((a,b) => (a-b))
//console.log(numbers[0])


//let num=5
//let fact=1
//for(i=1;i<=num;i++)
//{
//    fact=fact*i
//}
//console.log(fact)

//let num = 3
//if(num % 2 !=0 )
//{
//    console.log("prime")
//}
//else
//{
//    console.log("not prime")
//} 

//let str ="hello world"
//let result=str. charAt(0).toUpperCase()+ str.slice(1)
//console.log(result)


let str= "hello world"
let count=0
for(let i=0;i<str.length;i++){
    let ch=str[i]
    if(ch==='a' ||ch==='e' ||ch==='i'||ch==='o'||ch=="u")
    {
        count++
    }
}
console.log(count)