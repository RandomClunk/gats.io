fetch('https://gats.io/js/1.7.15.js') // request to get the current client source code
  .then(res => {
    // status 404 means not found
    if(res.status === 404) return alert('This challenge was made for 1.7.15 but the game has updated.');
    
    // patch the function that activates walls to simply an empty function
    RB.prototype.activate = () => {};
  });
