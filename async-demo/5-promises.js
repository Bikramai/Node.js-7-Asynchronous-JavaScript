// It is extremely powerful when it comes to dealing with asynchronous code.

// Promises:- A promise is an object that holds the enventual result of an asynchronous operation.

const p = new Promise((resolve, reject) => {
    // Kick off some async work
    //...
    setTimeout(() => {
        // resolve(1); // pending => resolved, fulfilled
        reject(new Error('message')); // pending => rejected
    }, 2000)
});

p 
  .then(result => console.log('Result', result))
  .catch(err => console.log('Error', err.message));


// Recap:- a promise is an object that holds the eventual result of an asynchronous operation.
// Initially, it's in the pending state, when we create this promise. 
// At this point, it kick off an asynchronous operation, that operation can  complete successfully
// or it can fail, if it completes successfully, we say promise is resolve, or fulfilled.

// so this is how we create a promise -> first block of code, and this how we create consume it.
// we call then to get result, and catch to get the error.

// Takeaway from above code:-
// anywhere we have an asynchronous function that takes a callback, we should modify that function
// to return a promise.