import { colors } from "@themes";
import styled from "styled-components";

export const YouAreAwesome = styled.a`
  && {
   p {
    margin-top: 2rem;
    color: ${colors.secondary};
    
     :hover {
       opacity: 0.8;
       color: ${colors.successLight};
    }
   }
  }
  }
`;
