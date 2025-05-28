function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
  // Can obtain random integers from 0 to 9 evenly.
  let x = Math.floor(Math.random()*10);
  console.log("x: " + x);

  // The producing code (this may take some time)
  if (x % 2 == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);