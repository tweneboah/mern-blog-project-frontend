import axios from "axios";
import { BASE_URL } from "../../utils/baseEndpoint";
//create that must return a promise

//! Fetch all earnings
export const fetchAllEarningsAPI = async () => {
  const posts = await axios.get(BASE_URL);
  return posts.data;
};

//! Fetch all user earnings
export const getMyEarningsAPI = async () => {
  const posts = await axios.get(`${BASE_URL}/my-earnings`, {
    withCredentials: true,
  });
  return posts.data;
};
