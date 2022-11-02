import React, { useEffect, useState } from "react";
import { Spin, Divider, Pagination } from "antd";
import { debounce } from "lodash";
import styled from "styled-components";
import ErrorState from "@app/features/itunes/components/ErrorState";
import { Header, SearchBox, TracksList, YouAreAwesome } from "@app/features/itunes/components";
import { useFetchTracksQuery } from "@app/features/itunes/api/getTracks";
import Recommended, { Recommendation } from "@app/features/itunes/components/Recommended";
import { colors, media } from "@app/themes";
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
    padding: 1rem;
    background: ${colors.gotoStories};
    color: ${colors.textSecondary};
    margin: 0 auto;

    ${media.lessThan("mobile")`
    width: 90%;
    `}
  }
`;

const PaginationWrapper = styled.div`
  && {
    padding: 1rem;
    margin: 0 2rem;

    .ant-pagination-item {
      background: ${colors.primary};
    }

    .ant-pagination-item a {
      color: ${colors.secondary};
    }

    .ant-pagination-item-active {
      background-color: ${colors.success};
    }
  }
`;

export const TracksContainer: React.FC<ItunesContainerProps> = ({ recommendations }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const limit = 10;

  const { data, error, isLoading, isFetching, isSuccess } = useFetchTracksQuery(
    { searchTerm, offset, limit },
    { skip: !searchTerm }
  );

  const handleOnChange = trackName => {
    setCurrentPage(1);
    setSearchTerm(trackName);
  };

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const debouncedHandleOnChange = debounce(handleOnChange, 500);

  useEffect(() => {
    const offset = currentPage * limit;
    setOffset(offset);
  }, [currentPage]);

  return (
    <>
      <Container>
        <StyledRecommnendationWrapper>
          <T id="recommended" />
          <Recommended recommendations={recommendations} />
          <YouAreAwesome href="https://www.iamawesome.com/">
            <T id="you_are_awesome" />
          </YouAreAwesome>
        </StyledRecommnendationWrapper>
        <Divider />
        <Header />
        <SearchBox debouncedHandleOnChange={debouncedHandleOnChange} />
        {data && (
          <PaginationWrapper>
            <Pagination defaultCurrent={1} total={50} onChange={handleOnPageChange} />
          </PaginationWrapper>
        )}
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
