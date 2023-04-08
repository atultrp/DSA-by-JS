// Merging two arrays using while loop

let a = [1, 9, 0, 2, 3, 4]
let b = [5, 6, 7]
let c = []

let i = 0
let j = 0
let k = 0

while (i < a.length && j < b.length) {
  if (a[i] < b[j]) {
    c[k] = a[i]
    i++
  }
  else {
    c[k] = b[j]
    j++
  }
  k++
}

console.log(c)

while (i < a.length) {
  b[k] = a[i]
  i++
  k++
}

console.log(c)