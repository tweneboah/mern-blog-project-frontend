import axios from "axios";
import { BASE_URL } from "../../utils/baseEndpoint";
//create that must return a promise

//!Create post api
export const paymentIntentAPI = async (planId) => {
  const response = await axios.post(
    `${BASE_URL}/checkout`,
    {
      subscriptionPlanId: planId,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
//!payment verification
export const paymentVerificationAPI = async (paymentId) => {
  const response = await axios.get(`${BASE_URL}/verify/${paymentId}`, {
    withCredentials: true,
  });
  return response.data;
};
//!Free pln
export const freePlanAPI = async () => {
  const response = await axios.get(`${BASE_URL}/free-plan`, {
    withCredentials: true,
  });
  return response.data;
};
