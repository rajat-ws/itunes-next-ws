import { trackDetailsApi } from "@app/features/trackDetails/api/getTrackDetails";
import { itunesApi } from "@features/itunes";

const middlewares = [itunesApi?.middleware, trackDetailsApi?.middleware];

export default middlewares;
