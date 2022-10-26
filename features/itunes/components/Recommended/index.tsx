/**
 *
 * Recommended
 *
 */

import React from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { ClickableTags } from "@common";

interface RecommendedProps {
  recommendations?: Recommendation[];
}

export interface Recommendation {
  id: number;
  name: string;
}

const Recommended: React.FC<RecommendedProps> = ({ recommendations }) => {
  const router = useRouter();

  return (
    <Row data-testid="recommended">
      {recommendations?.length &&
        recommendations.map(({ id, name }) => (
          <Col key={id} onClick={() => router.push(`/info/${name}`)}>
            <ClickableTags>{name}</ClickableTags>
          </Col>
        ))}
    </Row>
  );
};

export default Recommended;
