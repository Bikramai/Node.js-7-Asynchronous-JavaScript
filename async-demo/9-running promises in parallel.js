const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation 1...');
        resolve(1)
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation 2...');
        resolve(2);
    }, 2000);
}); 

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));


// In this case, the result we have is not an array, it's the value of the first fulfilled promise.
// Promise.all([p1, p2])
    // .then(result => console.log(result))
    // .catch(err => console.log('Error', err.message));
