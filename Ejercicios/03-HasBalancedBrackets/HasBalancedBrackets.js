class Queue {
  array = []
  
  enqueue = (value) => {
    return this.array.push(value)
  }

  dequeue = () => {
    return this.array.pop()
  }

  value = () => {
    return this.array[this.array.length - 1]
  }

  size = () => {
    return this.array.length
  }
}

function HasBalancedBrackets (string) {
  // Your code here:
  let stack = new Queue()
  
  for (let i = 0; i < string.length; i++) {
       if(string[i] === '{' || string[i] === '[' || string[i] === '(') {
          stack.enqueue(string[i])
          console.log(stack.value())
       } 
       else {
        if(string[i] === ')' && stack.value() === '(' || string[i] === ']' && stack.value() === '[' || string[i] === '}' && stack.value() === '{') {
          stack.dequeue()
        }
        else {
          return false
        }
       }
  } 
  if(stack.size() === 0) 
    return true
  else 
    return false
}


console.log(HasBalancedBrackets('{{[]}}['))

module.exports = HasBalancedBrackets
