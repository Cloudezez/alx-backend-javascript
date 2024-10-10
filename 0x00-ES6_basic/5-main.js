import uploadPhoto from './5-photo-reject.js';

uploadPhoto('guillaume.jpg')
  .then(response => {
    console.log(response); // If you want to log the resolved value
  })
  .catch(error => {
    console.error(error.message); // This will log the error message
  });

