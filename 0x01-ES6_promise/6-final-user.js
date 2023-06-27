import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signupPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signupPromise, uploadPromise]).then((values) => {
    const result = [];
    values.forEach((value) => {
      if (value.status === 'fulfilled') {
        result.push({ status: value.status, value: value.value });
      } else {
        result.push({ status: value.status, value: `${value.reason}` });
      }
    });
    return result;
  });
}
