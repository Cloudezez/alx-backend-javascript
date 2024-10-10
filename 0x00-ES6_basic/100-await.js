import uploadPhoto from './5-photo-reject.js'; // Adjust the path if needed
import createUser from './4-user-promise.js'; // Adjust the path if needed

export default async function asyncUploadUser() {
    try {
        const photo = await uploadPhoto('photo-profile-1.jpg'); // Call uploadPhoto
        const user = await createUser('Guillaume', 'Salva'); // Call createUser
        
        return { photo, user }; // Return the results
    } catch (error) {
        return { photo: null, user: null }; // Return empty object on failure
    }
}

