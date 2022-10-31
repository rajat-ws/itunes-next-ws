import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Spin } from "antd";
import styled from "styled-components";
import TrackCard from "@app/features/itunes/components/TrackCard";
import {
  TrackItem,
  useFetchTrackDetailsQuery,
} from "@app/features/trackDetails/api/getTrackDetails";
import { media } from "@app/themes";

const StyledTrackDetailsWrapper = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    ${media.lessThan("mobile")`
      && {
        margin: 2rem 1rem;
      }
    `}
  }
`;

const TrackDetailsContainer = () => {
  const router = useRouter();
  const [singleTrackDetailData, setSingleTrackDetailData] = useState<TrackItem>();

  const slugTrackId = parseInt(router.query.slug as string);

  const { data, isFetching } = useFetchTrackDetailsQuery(slugTrackId);

  useEffect(() => {
    if (data) {
      setSingleTrackDetailData(data.results[0]);
    }
  }, [data]);

  return (
    <StyledTrackDetailsWrapper>
      <Spin spinning={isFetching} />
      {singleTrackDetailData && (
        <TrackCard
          data={singleTrackDetailData}
          isShowDetailsButton={false}
          isShowDetails={true}
          handlePlayPauseWrapper
        />
      )}
    </StyledTrackDetailsWrapper>
  );
};

export default TrackDetailsContainer;
