let student = {
    name: "Abhishek"
};

// Add getKeys method to Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};