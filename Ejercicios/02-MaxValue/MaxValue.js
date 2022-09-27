function MaxValue (shares) {
  // Your code here:
  const min = Math.min(...shares)
  const i = shares.indexOf(min)
  const max = Math.max(...shares.slice(i))
  return max - min
}

console.log(MaxValue([4, 3, 2, 5, 11]))
module.exports = MaxValue
