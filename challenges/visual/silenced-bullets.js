(() => {
  // store reference to original activate function
  const original = RC.prototype.activate;
  
  // patch activation function
  RC.prototype.activate = function() {
    // do what the original function would have done
    original.apply(this, arguments);
    
    // silence the bullet
    this.silenced = 1;
  };
})();
