export default function handleResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
      console.log("Got a response from the API");
    } else {
      reject(new Error());
    };
  });
}