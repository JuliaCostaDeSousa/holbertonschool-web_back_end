import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils.js";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
        const body = values[0].body;
        const firstName = values[1].firstName;
        const lastName = values[1].lastName;
        console.log(`${body} ${firstName} ${lastName}`);
    })
    
    .catch(() => {
        console.log('Signup system offline');
    })
}