import { store } from "@store";
import { GetServerSideProps } from "next";
import { TrackDetailsContainer } from "@features/trackDetails";
import { trackDetailsApi } from "@app/features/trackDetails/api/getTrackDetails";

const TrackDetailsPage = () => {
  return <TrackDetailsContainer />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  // This automatically creates a store instance which can be used in getServerSideProps or getInitialProps
  // Refer to https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering
  store.dispatch(
    trackDetailsApi.endpoints.fetchTrackDetails.initiate(parseInt(context.query.slug as string))
  );

  await Promise.all(trackDetailsApi.util.getRunningOperationPromises());

  return {
    props: {},
  };
};

export default TrackDetailsPage;
