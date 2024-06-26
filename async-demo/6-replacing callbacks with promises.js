// This code has callback hell problem.
// How to resolve this callback hell problem? or How to create the promise?
// => we should modify our asynchronous functions to return a promise. 


console.log('Before');
getUser(1, (user) => {
getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
    });
  });
});
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
            resolve(['repo1', 'repo2', 'repo3']);
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

