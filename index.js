function receivesAFunction(callback) {
    callback();
  }
  
  function sayHello() {
    console.log("Hello, world!");
  }
  
  receivesAFunction(sayHello);


  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
 
  const myFunction = returnsANamedFunction();
  myFunction(); 



  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  

  const newFunction = returnsAnAnonymousFunction();
  myFunction(); 
  
  