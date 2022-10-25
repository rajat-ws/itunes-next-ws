import { colors } from "@themes";
import styled from "styled-components";

export const YouAreAwesome = styled.a`
  text-align: center;
  && {
    span {
      color: ${colors.primaryLink} !important;
      text-decoration: underline;
      :hover {
        opacity: 0.8;
      }
    }
  }
`;
