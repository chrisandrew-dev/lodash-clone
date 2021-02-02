const _ = {
  // Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  chunk(arr, size = 1) {
    let newArr = []
    while (arr.length > size) {
      newArr.push(arr.slice(0, size))
      arr = this.drop(arr, size)
    }
    newArr.push(arr)
    return newArr
  },
  
  // Clamps number within the inclusive lower and upper bounds.
  clamp(num, lower, upper) {
    const lowerClampedValue = Math.max(num, lower)
    const clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },
  
  // Creates a slice of array with n elements dropped from the beginning.
  drop(arr, num = 1) {
    arr = arr.slice(num)
    return arr
  },
  
  // Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
  dropWhile(arr, fn) {
    const falsy = (value, i) => !fn(value, i, arr)
    const num = arr.findIndex(falsy)
    return this.drop(arr, num)
  },

  // Returns the key of the first element predicate returns truthy for instead of the element itself.
  findKey(obj, fn) {
    for (let key in obj) {
      const testValue = fn(obj[key])
      if (testValue) return key
    }
  },
  
  // Checks if path is a direct property of object.
  has(obj, key) {
    return obj[key] != undefined
    ? true
    : false
  },
  
  // Checks if num is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
  inRange(num, start, end = start) {
    if (end === start) start = 0
    if (start > end) {
      const newStart = end
      end = start
      start = newStart
    }
    return (num >= start && num < end) 
    ? true 
    : false
  },

  // Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
  invert (obj) {
    let newObj = {}
    for (let key in obj) {
      newObj[obj[key]] = key
    }
    return newObj
  },
  
  // Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
  pad(str, length) {
    if (str.length >= length) {
      return str
    } else {
      const padStart = Math.floor((length - str.length) / 2)
      const padEnd = length - str.length - padStart
      const pad = ' '
      str = pad.repeat(padStart) + str + pad.repeat(padEnd)
      return str
    }
  },  
  
  // Splits string into an array of its words.
  words(str) {
    return str.split(' ')
  },
}

// Do not write or modify code below this line.
module.exports = _;