/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator - array 2 points at object in arry1. Any change to arry2 is applies to arry 1
let arry1 = [1,2,3];
let arry2 = arry1;
arry2.push(4)

console.log('Second Array', arry2)
console.log('First Array', arry1 )

// Copying an array - spreads arry3 into arry4 creating an entirely new seperate object 
let arry3 = [4,5,6]
let arry4 = [...arry3]
arry4.push(7,8,9)
console.log('Third Array', arry3)
console.log('Fourth Array', arry4 )

// Copying an object

let obj1 ={ a:1, b:2, c:3}
let obj2 = { ...obj1, d:4}
let obj3 = {...obj1, b:5}

console.log('First Object', obj1)
console.log('Second Object', obj2 )
console.log('Third Object', obj3 )

// Copying only part of an array/object

let arry5 = [...arry1, {...obj1}, ...arry3,'x','y','z']
console.log(arry5)
