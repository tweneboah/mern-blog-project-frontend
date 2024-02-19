import axios from "axios";
import { BASE_URL } from "../../utils/baseEndpoint";
//create that must return a promise

//!Create comment api
export const createCommentAPI = async (data) => {
  const response = await axios.post(`${BASE_URL}/create`, data, {
    withCredentials: true,
  });
  return response.data;
};
