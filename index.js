require('dotenv').config();

const server = require('./api/server');
const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});


// //this functions expects to receive either 1 or 2
// function someProcedure(a) {
//  if(a === 1) {
//    return 5;
//  } else if(a === 2) {
//    return 10;
//  }

//  throw new Error('bruh tf did you even do lmfao idk how to help you mate');
// }


// function someOtherProcedure(a, b) {
//   return someProcedure(a) + b;
// }

// try {
//   console.log('my result is:', someOtherProcedure(12, 2));
// } catch(error) {
//   console.log("Exception:", error.message);
// }

// // callback versoin
// function after1Second(callback) {
//   setTimeout(callback, 1000);
// }
// after1Second(() => {
//   console.log('it worked!')
//   after1Second(() => {
//     console.log('it worked!')
//     after1Second(() => {
//       console.log('it worked!')
//       after1Second(() => {
//         console.log('it worked!')
//       });
//     })
//   })
// })


// promise versoin

// function after1SecondPromise () {
//   return new Promise(resolve => {
//     setTimeout(resolve, 1000);
//   });
// }
// after1SecondPromise()
//   .then(() => {console.log('it worked!')})
//   .then(after1SecondPromise)
//   .then(() => {console.log('it worked!')})
//   .then(after1SecondPromise)
//   .then(() => {console.log('it worked!')})
//   .then(after1SecondPromise)
//   .then(() => {console.log('it worked!')})
//   .then(after1SecondPromise)
//   .then(() => {console.log('it worked!')})
//   .then(after1SecondPromise)
//   .then(() => {console.log('it worked!')})
//   .then(after1SecondPromise)
//   .then(() => {console.log('it worked!')})

// async function doohickey() {
//   await after1SecondPromise();
//   console.log('it worked!');
//   await after1SecondPromise();
//   console.log('it worked!');
//   await after1SecondPromise();
//   console.log('it worked!');
//   await after1SecondPromise();
//   console.log('it worked!');
//   await after1SecondPromise();
//   console.log('it worked!');
// }
// doohickey();