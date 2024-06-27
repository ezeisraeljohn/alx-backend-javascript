import { uploadPhoto, createUser } from "./utils.js";

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto('profile-1.jpg');
    const userPromise = createUser('Guillaume', 'Salva');

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
