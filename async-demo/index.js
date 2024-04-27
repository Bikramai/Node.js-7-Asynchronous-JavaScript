console.log('Before');
setTimeout(() => {
    console.log('Reading a user from a database...');
}, 2000);
console.log('After');


// Code Explanation:
// Here, this a timeout function is an example of an asynchronous or non-blocking function.
// When we call this function, this function will schedule a task to be performed in the future,
// in this case2 seconds after. So two seconds after it will call this function that we pass as 
// the first argument. So, when we run this program, the first line is executes, then we get to
// the second line, now all this function does is scheduling a task to be performed in the future.
// It doesn't wait. It doesn't block. It just schudules a task. And then the control is returned.
// So then we get to line 5 and display this after message in the console. So that's why when we run 
// the this program, first we see before, thaen immediately after we see after and two seconds later 
// when this function is executed we get this message about reading a user from a database. 

 
// So this is the difference between synchronous and asynchronous code. Now one thing we need to clearify here
// is that asynchronous does not mean concurrent or multithread. In this application, in this program, 
// we have a single thread. So our single thread at first executes the first line. Then schedules a 
// a function to be called in two seconds, next it will display this message in the console and 
// after that it will be free, so in two seconds from now it will execute this function and 
// display this message on the console.

// for Metaphor, Imaginary restaurant, So in a synchronous restaurant when you get a table, the waiter
// comes to you, takes your order, gives it to the kitchen, and then sits there waiting before your food is ready 
// before moving onto the next table. This is an example of a synchronous or blocking restaurant.

// In constrast, in an asynchronous- restaurant, the waiter doesn't wait in the kitchen, 
// so while the chef is preparing your meal, the waiter will move onto the next table to take their order.
// What is important here is that we have a single waiter or waitress, this is like a single thread in a program 
// so we don't have multiple threads, we don't have concurrency. 
// Now, why do we need to know all of this? Beacuse in Node programs, whenever we're dealing with an operation
// that involves disk or network access, we're dealing with asynchronous code, so we need to understand
// how asynchronous code behaves, and more importantly, we need to know how to write asynchronous code in a clean
// and maintainable way.

