// async and await:- It helps you write asynchrounous code like synchronous code. 


console.log('Before');
getUser(1, (user) => {
getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
    });
  });
});

// Promise-based approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// Async and Await approach
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message);
    }
}
displayCommits();

// explaination of Async and Await approach
// whenever you use the await aperator in the function, we need to decorate that function with the async modifier.
// This is a requirement by javascript engine that whenever we use await we should have a function that is 
// decorated with async, and we will find out why in a second.
// Async and await just syntactical sugar, internally we use promises, our code still runs 
// asynchronously but it looks and reads synchronous. so to varify this, 
// when we use async and await, we need to wrap our code inside of a try catch block.


console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'Bikram' })
        }, 2000);
    }) 
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            // resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get the repos.'))
        }, 2000);
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    })
}
