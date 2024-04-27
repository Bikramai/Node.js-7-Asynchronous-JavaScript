// we want to get rid of the callback hell issue here. 
// This nested structure, the technic we're going to use is to replace an anonymous fuction
// with a mane function. What do i mean by that? Well, look at the second argument to this 
// getCommits function. So, this is the second argument, right?

// We are going to replaceeach anonymous function with a name fucntion. And with this we can flatten
// the structure of this code. Let me show you how that works.


console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repo, displayCommits);
};

function displayCommits(commits) {
    console.log(commits);
};

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'Bikram' })
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}