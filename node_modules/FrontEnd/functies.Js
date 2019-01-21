const assert = require('assert')


//* schrijf een functie die het grootste van twee getallen teruggeeft
function max(a, b)
 {
  let x = 0;
 if (a> b||a == b) 
 {
   x= a
 } else 
 {
   x = b
 }
return x;
}

assert.equal(max(0, 0), 0)
assert.equal(max(1, 0), 1)
assert.equal(max(0, 1), 1)
assert.equal(max(-1, 1), 1)


//* grootste van drie getallen
function max3(a, b, c) 
{
  let x = 0;
  if (a> b && a >c) 
  {
    x= a
  } 
  else if(b> a && b > c)
  {
    x = b
  }
  else if(c> a && c > b)
  {
    x = c
  }else if (a == b && b == c) 
  {
    x = a;
  }
 return x;
}

assert.equal(max3(0, 0, 0), 0)
assert.equal(max3(1, 0, 0), 1)
assert.equal(max3(0, 1, 0), 1)
assert.equal(max3(0, 0, 1), 1)
assert.equal(max3(-1, 1, 0), 1)


//* gegeven de volgende code:

function pair(left, right)
 {
  return function (f) 
  {
    return f(left, right)
  }
}

function left(pair)
{
  return pair((x,y) => x);
}

function right(pair) 
{
  return pair((x,y) => y);
}

//* schrijf de functies left en right, zodat:
const ogen = pair("linker oog", "rechter oog")
assert.equal(left(ogen), "linker oog")
assert.equal(right(ogen), "rechter oog")

//*/