import getFullResponseFromAPI from './1-promise.js';

getFullResponseFromAPI(true)
  .then(response => {
    console.log(response); // Handle the resolved promise
  })
  .catch(error => {
    console.error(error.message); // Handle the rejected promise
  });

getFullResponseFromAPI(false)
  .then(response => {
    console.log(response); // Handle the resolved promise
  })
  .catch(error => {
    console.error(error.message); // Handle the rejected promise
  });

