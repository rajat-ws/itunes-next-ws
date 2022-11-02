/**
 *
 * Recommended
 *
 */

import React from "react";
import { useRouter } from "next/router";
import { ClickableTags } from "@common";
import styled from "styled-components";

interface RecommendedProps {
  recommendations?: Recommendation[];
}

export interface Recommendation {
  trackId: number;
  trackName: string;
}

const StyledRecommendedContainer = styled.div`
  && {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }
`;

const Recommended: React.FC<RecommendedProps> = ({ recommendations }) => {
  const router = useRouter();

  return (
    <StyledRecommendedContainer data-testid="recommended">
      {recommendations?.length &&
        recommendations.map(({ trackId, trackName }) => (
          <div
            data-testid="recommendTag"
            key={trackId}
            onClick={() => router.push(`/trackDetails/${trackId}`)}
          >
            <ClickableTags>{trackName} 🎶 </ClickableTags>
          </div>
        ))}
    </StyledRecommendedContainer>
  );
};

export default Recommended;
