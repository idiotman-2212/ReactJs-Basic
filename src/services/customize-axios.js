import axios from "axios";
const instance = axios.create({
  baseURL: "https://reqres.in",
});

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    let res = {};

    if (error.response) {
      res.data = error.message.data;
      res.status = error.message.status;
      res.header = error.message.header;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return res;
    // return Promise.reject(error);
  }
);

export default instance;
