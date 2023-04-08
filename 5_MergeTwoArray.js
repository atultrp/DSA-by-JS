// Merging two Arrays

let a = [1, 2, 3, 4, 5]
let b = [7, 8, 9]

// Without built-in function
let c = []

for (let i in a) {
  c[i] = a[i]
}
for (let i in b) {
  c[a.length + parseInt(i)] = b[i]
}

console.log(c)

// Using built-in function
let d = []
d = [...a, ...b]

console.log(d);