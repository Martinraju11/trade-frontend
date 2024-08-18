import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

export const startProTrade = async () => {
    const response=await axios.post(`${BASE_URL}/start_protrader`)
    .then((response) => {
      return response.data;
    })
    .catch((error) =>  error.response.data);;
  return response;
};