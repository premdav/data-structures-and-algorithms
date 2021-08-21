# General Notes for Section 3 - Big O

### What is good code?
Good code should be two things:
- Readable
- Scalable
There are efficient and inefficient ways to write code, or a set of instructions to accomplish a task
##### Code Example
- BigO is how long it would take to run the following code. i.e. time complexity:
```javascript
const nemo = ['nemo', 'dory', 'bruce', 'marlin', 'nigel', 'hank', 'darla', 'squirt', 'gill'];
const large = new Array(100).fill('nemo'); // creates 100 items in loop
const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') console.log('FOUND NEMO!');
  }
}
findNemo(nemo);
findNemo(large);
```
### BigO and Scalability
- The more operations (the larger a inputs the function gets in case above), the slower it will be running. It will take more time as the inputs grow
- BigO notation is language we use to talk about how long an algorithm runs - algorithmic efficiency
- BigO can be measured using O(n!), O(2^n), O(n^2), O(n log n), O(n), O(log n), O(1)
- BigO is concerned with how many operations, or steps, there are in an algorithm

### O(n)
- the `findNemo` function above has the BigO complexity of O(n)
- O(n) -> linear time
- - it is a 1 to 1 relationship. For every item, n, there is one operation

### O(1)
```javascript
const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
};
```
- O(1) -> Constant Time
- No matter how many inputs, a function or algorithm that does only one operation is O(1)
- The amount of boxes in the above function could increase to 100000, but only one thing will happen, it will only log one box
- All constant time algorithms, whether they do 2 or 10 operations, if it is constant, it boils down to O(1)
