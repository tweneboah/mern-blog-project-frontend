import axios from "axios";
import { BASE_URL } from "../../utils/baseEndpoint";
//create that must return a promise

//!Create post api
export const createPlanAPI = async (planData) => {
  const response = await axios.post(`${BASE_URL}/create`, planData, {
    withCredentials: true,
  });
  return response.data;
};

//! Fetch all plans
export const fetchPlansAPI = async () => {
  const plans = await axios.get(BASE_URL);
  return plans.data;
};
//! Fetch  plan
export const fetchPlanAPI = async (id) => {
  const plan = await axios.get(`${BASE_URL}/${id}`);
  return plan.data;
};
