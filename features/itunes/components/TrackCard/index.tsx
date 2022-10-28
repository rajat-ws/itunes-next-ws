import { useRouter } from "next/router";
import styled from "styled-components";
import { isEmpty } from "lodash";
import { Card, Image, Typography } from "antd";
import { colors, fonts } from "@app/themes";
import { If } from "@app/common";
import { TrackItem } from "@app/features/trackDetails/api/getTrackDetails";

const { Paragraph } = Typography;

export type TrackCardProps = {
  data: TrackItem;
  isShowDetailsButton: boolean;
  isShowDetails: boolean;
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
    color: ${colors.success};
    ${fonts.weights.bold}
    ${fonts.size.big}
  }
`;

const ButtonWrapper = styled.div`
  && {
    background: yellow;
  }
`;

const ShowDetailsButton = styled.button`
  && {
    background-color: ${colors.primary};
    color: ${colors.textSecondary};
    padding: 5px;
    cursor: pointer;
    border: none;
    width: 100%;
    ${fonts.size.xRegular}

    &:hover {
      background-color: ${colors.primaryDark};
    }
  }
`;

const TrackCard: React.FC<TrackCardProps> = ({ data, isShowDetailsButton, isShowDetails }) => {
  const {
    artistName,
    artworkUrl100: imageUrl,
    trackTimeMillis: trackDuration,
    collectionName,
    trackName,
    trackId,
    country,
    primaryGenreName,
    kind,
    wrapperType,
  } = data;
  const router = useRouter();

  return (
    <TrackCardWrapper data-testid="track-card">
      <If condition={!isEmpty(imageUrl)} otherwise={"No image available"}>
        <Image src={imageUrl} width="80%" alt={artistName} />
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
          condition={!isEmpty(collectionName)}
          otherwise={<Paragraph>No collection name available</Paragraph>}
        >
          <Paragraph>
            <StyledSpan> Collection name: </StyledSpan> {collectionName}
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
            <StyledSpan> Genre: </StyledSpan> {primaryGenreName}
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
          <ShowDetailsButton onClick={() => router.push(`/trackDetails/${trackId}`)}>
            Show Details
          </ShowDetailsButton>
        </If>
      </ButtonWrapper>
    </TrackCardWrapper>
  );
};

export default TrackCard;
