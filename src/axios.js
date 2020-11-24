import axios from "axios";

const instance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://form-submitter.firebaseio.com/",
});

export default instance;
