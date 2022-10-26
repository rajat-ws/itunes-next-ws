import React, { useState } from "react";
import { Spin, Divider } from "antd";
import { debounce } from "lodash";
import styled from "styled-components";
import ErrorState from "@app/features/itunes/components/ErrorState";
import { Header, SearchBox, TracksList, YouAreAwesome } from "@app/features/itunes/components";
import { useFetchTracksQuery } from "@app/features/itunes/api/getTracks";
import Recommended, { Recommendation } from "@app/features/itunes/components/Recommended";
import { colors } from "@app/themes";
import { T } from "@app/common/T";

interface ITunesError {
  status: number;
  data: {
    message: string;
    documentionUrl: string;
    errors: {
      code: string;
      field: string;
      resource: string;
    }[];
  };
}

interface ItunesContainerProps {
  recommendations?: Recommendation[];
}

const Container = styled.div`
  && {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;
    text-align: center;
  }
`;

const StyledRecommnendationWrapper = styled.div`
  && {
    width: 50%;
    padding: 1rem 0;
    background: ${colors.gotoStories};
    color: ${colors.textSecondary};
    margin: 0 auto;
  }
`;

export const TracksContainer: React.FC<ItunesContainerProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, error, isLoading, isFetching, isSuccess } = useFetchTracksQuery(
    { searchTerm },
    { skip: !searchTerm }
  );

  const handleOnChange = trackName => setSearchTerm(trackName);

  const debouncedHandleOnChange = debounce(handleOnChange, 500);

  return (
    <>
      <Container>
        <StyledRecommnendationWrapper>
          <T id="recommended" />
          <Recommended />
          <YouAreAwesome href="https://www.iamawesome.com/">
            <T id="you_are_awesome" />
          </YouAreAwesome>
        </StyledRecommnendationWrapper>
        <Divider />
        <Header />
        <SearchBox debouncedHandleOnChange={debouncedHandleOnChange} />
        <Spin spinning={isFetching} />
        {isSuccess && <TracksList loading={isLoading} tracksData={data} />}
        <ErrorState
          tracksData={data}
          loading={isLoading && isFetching}
          tracksError={(error as ITunesError)?.data?.message}
        />
      </Container>
    </>
  );
};

export default TracksContainer;
