import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  const promises = [promise1, promise2];
  return Promise.allSettled(promises)
    .then(results =>
      results.map((resultMap) => {
        let value;
        if (resultMap.status === 'fulfilled') {
          value = resultMap.value;
        } else {
          value = resultMap.reason.toString();
        }
        return {
            status: resultMap.status,
            value: value,
        }
    })
);
}