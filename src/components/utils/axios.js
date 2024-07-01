import axios from "axios";
const lang = localStorage.getItem("lang")
  ? JSON.parse(localStorage.getItem("lang"))
  : "ar";
const authToken = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
const client = axios.create({
  baseURL: "http://dentella.somee.com/api",
  headers: {
    "Content-Type": "application/json",
    lang,
    "Accept-Language": lang,
    "Access-Control-Allow-Credentials": true,
    "x-api-key": "0FcBOe64FIFkBkNkA",
    Authorization: authToken ? `Bearer ${authToken}` : null,
  },
});
export const request = ({ ...options }) => {
  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
