// Merging two arrays using while loop

let a = [1, 3, 5, 7]
let b = [0, 2, 6]
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

while (i < a.length) {
  c[k] = a[i]
  i++
  k++
}

console.log(c)