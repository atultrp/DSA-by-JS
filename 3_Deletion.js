// Delete a value from the given index of an array

let a = [1, 2, 3, 4, 5]

// Without any built-in function 
let ind1 = 2

for (let i = ind1; i < a.length; i++) {
  a[i] = a[i + 1]
}
a.length = a.length - 1

console.log(a)

// With built-in function
let ind2 = 2
a.splice(ind2, 1)

console.log(a)