import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const uploadPromise = uploadPhoto();
  const createUserPromise = createUser();

  Promise.all([uploadPromise, createUserPromise])
    .then(([uploadResponse, userResponse]) => {
      console.log(`${uploadResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

