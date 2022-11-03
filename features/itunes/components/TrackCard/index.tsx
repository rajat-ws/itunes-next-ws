import { useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import isEmpty from "lodash/isEmpty";
import { Card, Image, Typography } from "antd";
import { colors, fonts } from "@app/themes";
import { If } from "@app/common";
import { TrackItem } from "../../api/getTracks";

const { Paragraph } = Typography;

export type TrackCardProps = {
  data: TrackItem;
  isShowDetailsButton: boolean;
  isShowDetails: boolean;
  handlePlayPauseWrapper;
};

const TrackCardWrapper = styled(Card)`
  && {
    border-radius: 0.5rem;
    width: 25rem;
    border: 1px solid ${colors.secondary};
    text-align: center;
    border: 1px solid ${colors.primary}
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  ${fonts.size.big}
  padding-top: 1rem;
`;

const StyledSpan = styled.span`
  && {
    color: ${colors.text};
    ${fonts.weights.bold}
    ${fonts.size.big}
  }
`;

const ButtonWrapper = styled.div`
  && {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const ShowDetailsButton = styled.button`
  && {
    background-color: ${colors.primary};
    color: ${colors.textSecondary};
    padding: 5px;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    width: 100%;
    ${fonts.size.xRegular}
    ${fonts.weights.bold}

    &:hover {
      background-color: ${colors.primaryDark};
    }
  }
`;

const PlayButton = styled.button`
  && {
    background-color: ${colors.success};
    color: ${colors.textSecondary};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: ${colors.successLight};
    }
  }
`;

const ButtonLabel = styled.span`
  && {
    ${fonts.weights.bold}
    ${fonts.size.big}
  }
`;

const TrackCard: React.FC<TrackCardProps> = ({
  data,
  isShowDetailsButton,
  isShowDetails,
  handlePlayPauseWrapper,
}) => {
  const {
    artistName,
    trackName,
    trackId,
    trackTimeMillis: trackDuration,
    artworkUrl100: imageUrl,
    previewUrl,
    collectionName,
    country,
    primaryGenreName,
    kind,
    wrapperType,
  } = data;
  const router = useRouter();
  const [isTrackPlaying, setIsTrackPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    const isTrackPaused = audioRef.current?.paused;

    if (isTrackPaused) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
    setIsTrackPlaying(!isTrackPlaying);

    if (!isShowDetails) {
      handlePlayPauseWrapper(audioRef);
    }
  };

  return (
    <TrackCardWrapper data-testid="track-card">
      <If condition={!isEmpty(imageUrl)} otherwise={"No image available"}>
        <Image src={imageUrl} width="80%" alt={collectionName} />
      </If>
      <StyledDescription>
        <If
          condition={!isEmpty(artistName)}
          otherwise={<Paragraph>No artist name available</Paragraph>}
        >
          <Paragraph>
            <StyledSpan> Artist name: </StyledSpan> {artistName}
          </Paragraph>
        </If>
        <If
          condition={!isEmpty(primaryGenreName)}
          otherwise={<Paragraph>No primaryGenre name available</Paragraph>}
        >
          <Paragraph>
            <StyledSpan> Genre: </StyledSpan> {primaryGenreName}
          </Paragraph>
        </If>

        <If
          condition={!isEmpty(trackName)}
          otherwise={
            <Paragraph>
              <StyledSpan> Track name: </StyledSpan> No track name available
            </Paragraph>
          }
        >
          <Paragraph>
            <StyledSpan> Track name: </StyledSpan> {trackName}
          </Paragraph>
        </If>

        <If condition={isShowDetails}>
          <Paragraph>
            <StyledSpan> Country: </StyledSpan> {country}
          </Paragraph>
          <Paragraph>
            <StyledSpan> Kind: </StyledSpan> {kind}
          </Paragraph>

          <Paragraph>
            <StyledSpan> Collection name: </StyledSpan> {collectionName}
          </Paragraph>

          <Paragraph>
            <StyledSpan> Wrapper Type: </StyledSpan> {wrapperType}
          </Paragraph>

          {trackDuration && (
            <Paragraph>
              <StyledSpan> Duration: </StyledSpan> {Math.floor(trackDuration / 60000)}:
              {Math.floor(trackDuration / 1000) % 60}s
            </Paragraph>
          )}
        </If>
      </StyledDescription>

      <ButtonWrapper>
        <If condition={isShowDetailsButton}>
          <ShowDetailsButton
            data-testid="showDetails"
            onClick={() => router.push(`/trackDetails/${trackId}`)}
          >
            Show Details
          </ShowDetailsButton>
        </If>
        <PlayButton onClick={handlePlayPause} data-testid="playPauseBtn">
          <If
            condition={audioRef.current?.src && !audioRef.current?.paused}
            otherwise={<ButtonLabel> Play </ButtonLabel>}
          >
            <ButtonLabel> Pause </ButtonLabel>
          </If>
        </PlayButton>
      </ButtonWrapper>
      <audio src={previewUrl} data-testid="trackAudio" ref={audioRef} />
    </TrackCardWrapper>
  );
};

export default TrackCard;
