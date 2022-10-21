import { Skeleton } from "antd";
import styled from "styled-components";
import { get } from "lodash";
import { If } from "@app/common";
import { TrackItem, TrackResponse } from "../../api/getTracks";
import TrackCard from "../TrackCard";

interface TrackListProps {
  tracksData: TrackResponse;
  loading: boolean;
}

const TracksListWrapper = styled.div`
  && {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
  }
`;

const TracksList: React.FC<TrackListProps> = props => {
  const { tracksData, loading } = props;
  const results: TrackItem[] = get(tracksData, "results", []);

  return (
    <TracksListWrapper>
      <If condition={results.length !== 0}>
        <Skeleton loading={loading} active>
          {results.map((item: TrackItem, index: number) => {
            return <TrackCard key={index} data={item} />;
          })}
        </Skeleton>
      </If>
    </TracksListWrapper>
  );
};

export default TracksList;
