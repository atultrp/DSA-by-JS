// Insert a new element at the given index of an array

let a = [6, 5, 4, 3, 2, 1, 9, 0, 7, 8];

// Without any built-in function 
let ind1 = 5;
let val1 = 20;

for (let i = a.length - 1; i >= ind1; i--) {
  a[parseInt(i) + 1] = a[i]
  if (i == ind1) {
    a[i] = val1
  }
}

console.log(a)

// With built-in function
let ind2 = 5;
let val2 = 30;

a.splice(ind2, 0, val2)

console.log(a)