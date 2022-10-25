import { useState } from "react";
import { Spin } from "antd";
import { debounce } from "lodash";
import styled from "styled-components";
import ErrorState from "@app/features/itunes/components/ErrorState";
import { Header, SearchBox, TracksList } from "@app/features/itunes/components";
import { useFetchTracksQuery } from "@app/features/itunes/api/getTracks";

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

export const TracksContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, error, isLoading, isFetching, isSuccess } = useFetchTracksQuery(searchTerm, {
    skip: !searchTerm,
  });

  const handleOnChange = trackName => setSearchTerm(trackName);

  const debouncedHandleOnChange = debounce(handleOnChange, 200);

  return (
    <>
      <Container>
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
