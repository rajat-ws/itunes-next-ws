import { isEmpty } from "lodash";
import styled from "styled-components";
import { Card, Image, Typography } from "antd";
import { colors, fonts } from "@app/themes";
import { If } from "@app/common";
import { TrackItem } from "../../api/getTracks";

const { Paragraph } = Typography;

interface TrackCardProps {
  data: TrackItem;
}

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

const TrackCard: React.FC<TrackCardProps> = ({ data }) => {
  const { artistName, artworkUrl100: imageUrl, collectionName, trackName } = data;
  return (
    <TrackCardWrapper>
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
          otherwise={<Paragraph>No track name available</Paragraph>}
        >
          <Paragraph>
            <StyledSpan> Track name: </StyledSpan> {trackName}
          </Paragraph>
        </If>
      </StyledDescription>
    </TrackCardWrapper>
  );
};

export default TrackCard;
