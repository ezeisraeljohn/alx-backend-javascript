function getResponseFromAPI() {
        return new Promise((resolve, reject) => {
          // Simulating an asynchronous operation
          setTimeout(() => {
            resolve('API response');
          }, 1000);
        });
      }
      
      export default getResponseFromAPI;
      