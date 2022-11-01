import MockAdapter from "axios-mock-adapter";
import { getApiClient } from "../../utils/apiUtils";
import { getRecommendations } from "../root";

describe("root tests", () => {
  it("should ensure data as expected", async () => {
    const mock = new MockAdapter(getApiClient().axiosInstance);
    const resData = { results: [{ trackId: 12345, trackName: "Baarishein" }] };
    mock.onGet(`/search?term=anuv`).reply(200, resData);
    const res = await getRecommendations();
    expect(res).toEqual(resData.results);
  });

  it("should return an empty array if an error is present in the response", async () => {
    const mock = new MockAdapter(getApiClient().axiosInstance);
    const resData = { data: ["as"] };
    mock.onGet(`/search?term=anuv`).reply(404, resData);
    const res = await getRecommendations();
    expect(res).toStrictEqual([]);
  });
});
