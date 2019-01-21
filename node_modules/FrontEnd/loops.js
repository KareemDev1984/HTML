const assert = require('assert')

/// print de getallen tussen 0 en 100
for (let index = 0; index < 101; index++)
{
    console.log(index);
}
// grootste getal uit een lijst
let list  = [0,1,2,3,4, 8, 2]
let grootsteGetal = 0;
for (let index = 0; index < list.length; index++)
 {
   if (list[index]>grootsteGetal) 
   {
       grootsteGetal = list[index];
   }
}
console.log(grootsteGetal);
// langste string uit lijst
strings = ["abc","gehul","qggqgghqshg", "sfdqgq"]
let longestString;
    let length = 0;
    for (let index = 0; index < strings.length; index++)
    {
        if (strings[index].length > length) 
        {
            length = strings[index].length;
            longestString = strings[index];
        }
    }
 
    console.log(longestString);
// gemiddelde van een lijst getallen

array =[5,6,9,8,5,6,8]
let average = 0;
sum = 0;
array.forEach(element => 
{ 
    average += element.salary;
    sum++;

}); 

// check of een string een palindroom is
let palindroom;
let woord = "labal";
palindroom = woord.split("").reverse().join("");

//let  tempArray = woord.split("");
//tempArray.reverse();
//palindroom  = tempArray.join("");

console.log(woord);
console.log(palindroom);

assert.equal(woord,palindroom);