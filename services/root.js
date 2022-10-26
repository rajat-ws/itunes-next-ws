import { generateApiClient } from "@app/utils/apiUtils";
const itunesApi = generateApiClient("itunes");

export const getRecommendations = async () => {
  const res = await itunesApi.get(`search?term=`);
  console.log("res", res);
};
