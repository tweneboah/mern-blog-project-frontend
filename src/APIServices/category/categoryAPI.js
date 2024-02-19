import axios from "axios";
import { BASE_URL } from "../../utils/baseEndpoint";
//create that must return a promise

//!Create post api
export const addCategoryAPI = async (postData) => {
  console.log(postData);
  const response = await axios.post(`${BASE_URL}/create`, postData, {
    withCredentials: true,
  });
  return response.data;
};

//! Fetch all catgories
export const fetchCategoriesAPI = async () => {
  const posts = await axios.get(BASE_URL);
  return posts.data;
};
