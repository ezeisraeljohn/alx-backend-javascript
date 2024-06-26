import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

    return [
      { status: userResult.status, value: userResult.value },
      { status: photoResult.status, value: photoResult.value },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error.message }
    ];
  }
}

export default handleProfileSignup;
