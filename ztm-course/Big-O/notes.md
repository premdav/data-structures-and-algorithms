# General Notes for Section 3 - Big O

### What is good code?
Good code should be two things:
- Readable
- Scalable
There are efficient and inefficient ways to write code, or a set of instructions to accomplish a task
##### Code Examples
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
