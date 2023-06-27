function getResponseFromApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from Api');
    }, 2000);
  });
}

export default getResponseFromApi;
