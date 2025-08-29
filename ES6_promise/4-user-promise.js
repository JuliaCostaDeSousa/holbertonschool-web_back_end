export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    return resolve({ firstName: `${firstName}`, lastName: `${lastName}` });
  });
};