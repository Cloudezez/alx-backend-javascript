export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      resolve("Response from API");
    }, 1000); // Adjust the time as needed
  });
}

