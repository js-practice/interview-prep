/*
implement a promises class with the following methods:
  - then
  - resolve

then - should allow the user to register a callback to be executed when data is available.  The then method returns another promise.

resolve - should process any registered callbacks.  

You can register multiple callbacks on a single promise and they all receive the same data.  

Ex:  promise1.then(dostuff1);
     promise2.then(dostuff2);

     //dostuff1 and dostuff2 receive the same resolved data

Thens are chainable.  

Ex:  promise1.then(dostuff)
      .then(dostuff2)

      //dostuff is passed the resolved data and the return result is passed to dostuff2

The class should handle the case of a promise being resolved prior to any then callbacks being registered.  These callbacks should immediately execute.

There are no other constraints.  You do not have to implement reject.
*/