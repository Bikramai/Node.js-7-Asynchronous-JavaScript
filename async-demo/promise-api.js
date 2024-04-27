// How to explore the api of promise object in JavaScript in more detail?
// sometimes you want to create a promise that is already resolved.
// This is particularly useful when writing unit tests.
// So you want to simulate a scenario where an asynchronous operation like calling a web service
// completes successfully. In our unit test, you want to create a promise that is already resoloved.
// that's what we need, 

// 1. we can call Promise, this is the promise class, in javascript, it has static method called resolve.
// And return a promise that is already resolved. Now here we can optionally pass a value like 1, or a user object,
// and we get the promise, this promise is already resolved.
// 2. we call p.then get the result and display it on the console.

//resolve 
const promise = Promise.resolve({ id: 1});
promise.then(result => console.log(result));


// reject
const p = Promise.reject(new Error('reason for rejection...'));
p.catch(error => console.log(error));