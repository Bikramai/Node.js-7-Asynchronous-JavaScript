console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

// Callbacks
// Promises
// Async/await

function getUser() {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        return { id: id, gitHubUsername: 'Bikram' }
    }, 2000);

    return 1;
}

// Code Explanation:
// In the function, we need to return a userobject. So, when we read from the database, 
// right after that we're going to return an object, let's say this object has id property, 
// but it also has github username property. set that to Bikram.
// Now here is interesting part. Back on line 2, we can not get this user object like this, 
// set it to this const user = getUser. This doen't work. So if we do a console.log of user,
// we're going to get unddefined in the console. Let's have a look, so back in the terminal, 
// node index.js. The reason for this is coz this function that passed to set time out, 
// is executed two seconds after.
// So what we are returning from this function will not be available at the time of calling getUser.
// Because in this function, we are just calling set time out to schedule task for the future. 
// If you want to return a value from get user, we have to return it here -return 1.

// In this case, this value that we're returning here, will be available on thie line, but that's not 
// what we want. Coz  when accessing a database, the result it not avaible immediately. It might take
// halfa second, it  might take one second or two seconds, who knows. 

// So that's why we've called setTimeout to simulate a long running operation. 
// In this case we're reading something from the database and at this point the result eill be ready.

// So how can we addwss this user object in the main program here?
// => Well, there are 3 patterns to deal with asynchronous code. 
//    We have - 1. Callbacks
//              2. Promises
//              3. Async/await