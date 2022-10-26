import React from "react";
import styled from "styled-components";
import { Space, Spin } from "antd";
import { styles } from "@app/themes";

const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${styles.viewHeight(100)}
`;

const Loader: React.FC = () => (
  <AlignCenter data-testid="align-center">
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </AlignCenter>
);

export default Loader;
