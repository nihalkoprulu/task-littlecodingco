import axios from "axios";

const apiDomain = "https://randomuser.me";
const apiPath = "/api/";
const baseUrl = apiDomain + apiPath;

function fetch({ headers, method, path, params }) {
  let req = {
    headers: {
      ...headers,
    },
    method,
    [method === "GET" ? "params" : "data"]: params,
    url: baseUrl + path,
  };

  return axios(req)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export { fetch };
