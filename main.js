const Person = function(firstAndLast) {
  // Only change code below this line
   this.getFirstName = function() {
     var name=firstAndLast.split(" ");
    return name[0];
  };
     this.getLastName = function() {
     var name=firstAndLast.split(" ");
    return name[1];
  };
       this.setFirstName = function(fname) {
     var name=firstAndLast.split(" ");
     name[0]=fname;
    firstAndLast= name.join(" ");
  };
         this.setLastName = function(lname) {
     var name=firstAndLast.split(" ");
     name[1]=lname;
    firstAndLast= name.join(" ");
  };
           this.setFullName = function(flname) {
    firstAndLast=flname;
  };
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
bob.getFullName();