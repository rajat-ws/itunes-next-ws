/**
 *
 * ErrorState
 *
 */

import React from "react";
import get from "lodash/get";
import { compose } from "redux";
import { injectIntl, IntlShape } from "react-intl";
import { T, CustomCard } from "@common";
import { TrackResponse } from "../../api/getTracks";

interface ErrorStateProps {
  intl: IntlShape;
  loading: boolean;
  tracksData: TrackResponse | undefined;
  tracksError: string | undefined;
}

const ErrorState: React.FC<ErrorStateProps> = ({ intl, tracksData, tracksError, loading }) => {
  let trackError: string | undefined;
  if (tracksError) {
    trackError = tracksError;
  } else if (!get(tracksData, "resultCount", 0)) {
    trackError = "";
  }

  return !loading && trackError ? (
    <CustomCard
      color={tracksError ? "red" : "grey"}
      title={intl.formatMessage({ id: "something_went_wrong" })}
      data-testid="error-state"
    >
      <T id={trackError} />
    </CustomCard>
  ) : null;
};

export default compose(injectIntl)(ErrorState);
