import { Skeleton } from "antd";
import styled from "styled-components";
import { get } from "lodash";
import { If } from "@app/common";
import { TrackItem, TrackResponse } from "../../api/getTracks";
import TrackCard from "../TrackCard";
import { useState } from "react";

interface TrackListProps {
  tracksData: TrackResponse;
  loading: boolean;
  handlePlayPauseWrapper;
}

const TracksListWrapper = styled.div`
  && {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 0.5rem;
  }
`;

const TracksList: React.FC<TrackListProps> = props => {
  const { tracksData, loading } = props;

  const [currentPlayingTrack, setCurrentPlayingTrack] = useState<any>(null);
  const results: TrackItem[] = get(tracksData, "results", []);

  const handlePlayPauseWrapper = audioRef => {
    setCurrentPlayingTrack(audioRef);

    const isTrackPaused = currentPlayingTrack?.current?.paused;

    if (!isTrackPaused && audioRef.current.src !== currentPlayingTrack?.current?.src) {
      currentPlayingTrack?.current?.pause();
    }
  };

  return (
    <TracksListWrapper>
      <If condition={results.length !== 0}>
        <Skeleton loading={loading} active>
          {results.map((item: TrackItem, index: number) => {
            return (
              <TrackCard
                key={index}
                data={item}
                isShowDetailsButton
                isShowDetails={false}
                handlePlayPauseWrapper={handlePlayPauseWrapper}
              />
            );
          })}
        </Skeleton>
      </If>
    </TracksListWrapper>
  );
};

export default TracksList;
