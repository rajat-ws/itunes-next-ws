import React, { memo } from "react";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { TracksContainer } from "@features/itunes";

export const TracksPage = () => {
  return <TracksContainer />;
};

export async function getStaticProps() {
  // const recommendations = await getReccomendations();
  return {
    props: {
      // recommendations,
    },
  };
}

export default compose(injectIntl, memo)(TracksPage);
