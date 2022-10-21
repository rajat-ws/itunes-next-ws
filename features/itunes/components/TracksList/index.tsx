import { get } from "lodash";
import styled from "styled-components";
import { Skeleton } from "antd";
import { TrackItem, TrackResponse } from "../../api/getTracks";
import { If } from "@app/common";
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
  const trackResults: TrackItem[] = get(tracksData, "results", []);

  return (
    <TracksListWrapper>
      <If condition={trackResults.length !== 0}>
        <Skeleton loading={loading} active>
          {trackResults.map((item, index: number) => {
            return <TrackCard key={index} data={item} />;
          })}
        </Skeleton>
      </If>
    </TracksListWrapper>
  );
};

export default TracksList;
