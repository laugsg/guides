# a function that returns a class : the magic of the Array.reduce()

## Array.reduce()
> **Array.reduce(function(total, currentValue, currentIndex, array), initialValue)** <br />
> **Return Value: The accumulated result from the last call of the callback function.**

1. The Array.reduce() method iterates over an array,
2. applying each element of the array to a function you pass to it as the first argument
3. The return of that function 
   1. is remembered from one iteration to the next 
   2. and the result is passed from one iteration to the next.
   3. That result is called the ‘accumulator’ : the return is remembered and passed from one iteration to the next.

## "creator" is the function
1. It uses the "currentValue" of the reducer function as the name of the function to call, 
2. passing to it the "total".
3. currentValue(total)
4. The return is passed back to the reducer function as the "total" to be used for the next iteration (or to return to the calling code when the iteration is done).

## Phase 1: At the End, everything is into "total"
```
const numArr = [1,2,3,4,5]
// Array.reduce(function(total, currentValue, currentIndex, array), initialValue)
const result = numArr.reduce(function(total, currentValue, currentIndex){
  console.log("total", total)
  console.log("currentValue", currentValue)
  console.log("currentIndex", currentIndex)
  return total += currentValue
})
// result = 15 (1+2 = 3 | 3+3 = 6 | 6+4 = 10 | 10+5 = 15 | total = 15 | return total | const result = total)
console.log("result", result)
```