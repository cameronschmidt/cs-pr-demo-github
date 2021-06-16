/*
Possible interventions:
if (a !== NaN) { // Noncompliant; always true
  console.log("a is not NaN"); // this statement is not necessarily true
}

for (var i = 0; i < strings.length; i--) { // TODO: fix this code!
  console.log("dead code")
}

if (str == null && str.length == 0) {
  console.log("String is empty");
}
*/ 

var Person = function(first, last, middle) {
    this.first = first;
    this.middle = middle;
    this.last = last;
};

Person.prototype = {

    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};

// Main code body lives here
var a = NaN;

if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // TODO: fix this code!
}
