import { useState } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { Header, SearchBox, TracksList } from "@app/features/itunes/components";
import { useFetchTracksQuery } from "@app/features/itunes/api/getTracks";

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
        {error && <h1> Something went wrong </h1>}
        {isFetching && <h1> Data is getting fetched, please wait... </h1>}
        {isSuccess && <TracksList loading={isLoading} tracksData={data} />}
      </Container>
    </>
  );
};

export default TracksContainer;
