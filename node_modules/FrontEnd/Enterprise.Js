const assert = require('assert')

const employees = [
  { name: 'Marcel', salary: 3000, freelancer: true },
  { name: 'Sandra', salary: 3100, freelancer: false },
  { name: 'Thomas', salary: 2800, freelancer: false },
  { name: 'Alexander', salary: 3502, freelancer: false },
  { name: 'Els', salary: 3050, freelancer: true },
  { name: 'Igor', salary: 2600, freelancer: true },
  { name: 'Anne', salary: 2600, freelancer: true },
]

const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(average);

//* Hoeveel bedraagt de totale loonkost iedere maand?
function totalSalaries(employees)
{
    let total = employees.reduce((x,y)=> x + y.salary,0);
   /* 
    employees.forEach(element => {
       
       total += element.salary;
    });
    */
   return total
}

assert.equal(totalSalaries(employees), 20652)




//* Welke freelancer verdient het meest?
function bestPaidFreelancer(employees)
{
let highestSalary = 0;
let name;

for (let index = 0; index < employees.length; index++)
 {
    if (employees[index].freelancer == true && employees[index].salary > highestSalary) 
    {
        highestSalary = employees[index].salary;
        name = employees[index].name;
    }

}
  return name;
}



assert.equal(bestPaidFreelancer(employees), 'Els')


//* Wie verdient er allemaal meer als 3000?
function earsMoreThan3k(employees) {
let arrayMore300 = [] ;
    employees.forEach(element => 
    {
        if (element.salary>3000)
         {
          arrayMore300.push(element.name); 
        }
    });
return arrayMore300;  
}

assert.deepEqual(earsMoreThan3k(employees), ['Sandra', 'Alexander', 'Els'])


//* Hoeveel verdient een interne medewerker gemiddeld?
function averageSalaryNonFreeLancer(employees) 
{
// let average = 0;
// sum = 0;
// employees.forEach(element => 
// { if (element.freelancer == false) 
// {
    
//     average += element.salary;
//     sum++;
// }
// });
// return average / sum;
let average = employees.filter(x => x.freelancer == false).reduce((x,y)=> x + y.salary,0) / employees.filter(x => x.freelancer == false).length
return average;
}

assert.equal(averageSalaryNonFreeLancer(employees), 3134)


//* Wie heeft de langste naam?
function longestName(employees) 
{
    let longestname;
    let length = 0;
    for (let index = 0; index < employees.length; index++)
    {
        if (employees[index].name.length > length) 
        {
            length = employees[index].name.length;
            longestname = employees[index].name;
        }
    }
    return longestname;
}

assert.equal(longestName(employees), 'Alexander')


//* Print de namen van alle werknemers, gesorteerd op voornaam.
function sortedNames(employees) 
{
let sortedbyname = [];
employees.forEach(element =>
    {
        sortedbyname.push(element.name);
        
    });
sortedbyname.sort();
return sortedbyname;
}

assert.deepEqual(sortedNames(employees), ['Alexander', 'Anne', 'Els', 'Igor', 'Marcel', 'Sandra', 'Thomas'])

//*/
