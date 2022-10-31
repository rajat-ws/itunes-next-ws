import React, { memo } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { TracksContainer } from "@features/itunes";
import { getRecommendations } from "../services/root";

export async function getStaticProps() {
  const recommendations = await getRecommendations();

  return {
    props: {
      recommendations,
    },
  };
}

export const TracksPage = ({ recommendations = [] }) => {
  return <TracksContainer recommendations={recommendations} />;
};

TracksPage.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      trackId: PropTypes.number.isRequired,
      trackName: PropTypes.string.isRequired,
    })
  ),
};

export default compose(injectIntl, memo)(TracksPage);
