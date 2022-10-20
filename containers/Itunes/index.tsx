import styled from "styled-components";

import { Header, SearchBox } from "@app/features/itunes/components";
import { useState } from "react";
import { useFetchTracksQuery } from "@app/features/itunes/api/getTracks";
import { debounce } from "lodash";

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
  const { data } = useFetchTracksQuery(searchTerm, { skip: !searchTerm });
  console.log(data);

  const handleOnChange = trackName => {
    setSearchTerm(trackName);
  };

  const debouncedHandleOnChange = debounce(handleOnChange, 200);

  // console.log("data", data);

  return (
    <Container>
      <Header />
      <SearchBox debouncedHandleOnChange={debouncedHandleOnChange} />
    </Container>
  );
};

export default TracksContainer;
