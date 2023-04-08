// Linear Searching

// Without built-in function
let a = [7, 5, 3, 4, 8, 9]
let searchEle = 4

for (let i in a) {
  if (a[i] == searchEle) {
    console.log(i)
    break
  }
}

// With built-in function
console.log(a.indexOf(searchEle))