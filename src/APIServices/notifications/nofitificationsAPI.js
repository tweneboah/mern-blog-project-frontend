import axios from "axios";
import { BASE_URL } from "../../utils/baseEndpoint";
//create that must return a promise

//!fetch all notifications
export const fetchNotificationsAPI = async (postData) => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

//! Read notification
export const readNotificationAPI = async (notificationId) => {
  const posts = await axios.put(`${BASE_URL}/${notificationId}`, {});
  return posts.data;
};
