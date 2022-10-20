import styled from "styled-components";
import { Header, SearchBox } from "@app/features/itunes/components";

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
  return (
    <Container>
      <Header />
      <SearchBox />
    </Container>
  );
};

export default TracksContainer;
