const https = require("https");

/**
 *
 * @param {string} url
 */
const useFetch = (url) => {
  let data = "";
  return new Promise((resolve, reject) => {
    https.get(url, (resp) => {
      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        data = JSON.parse(data);
        resolve(data);
      });

      resp.on("error", (error) => {
        reject(error.message);
      });
    });
  });
};
