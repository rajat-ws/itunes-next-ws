import React, { memo } from "react";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { TracksContainer } from "@features/itunes";
// import { getRecommendations } from "../services/root";

// export async function getStaticProps() {
//   const recommendations = await getRecommendations();
//   return {
//     props: {
//       recommendations,
//     },
//   };
// }

export const TracksPage = () => {
  return <TracksContainer />;
};

export default compose(injectIntl, memo)(TracksPage);
