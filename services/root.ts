import { TrackDetail } from "@app/features/trackDetails/api/getTrackDetails";
import { ApiResponse } from "apisauce";
import { generateApiClient } from "../utils/apiUtils";

const itunesApi = generateApiClient("itunes");

export const getRecommendations = async () => {
  if (!itunesApi) return [];
  const res = await itunesApi.get<TrackDetail>("/search?term=anuv");

  const getData = (response: ApiResponse<TrackDetail>) => {
    if (!response.ok || !response.data) {
      return [];
    }

    const recommendations = ["Baarishein", "Ocean"];

    return response.data.results
      .filter(({ trackName }) => recommendations.includes(trackName))
      .map(({ trackId, trackName }) => ({ trackId, trackName }));
  };

  return getData(res);
};
