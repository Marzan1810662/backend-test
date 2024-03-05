let myPromise = new Promise(function(myResolve, myReject) {
    let x = 5;

  // some code (try to change x to 5)

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );


console.log(myPromise);

const newPromise = new Promise((resolve, reject) => {
    const variable = 0
    if (variable > 0) {
        resolve('yess')
    } else {
        reject('No')
    }
});

newPromise.then(
    (value)=>console.log(value),
    (error)=>console.log(error)
);

console.log(newPromise);