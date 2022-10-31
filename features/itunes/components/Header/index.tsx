import { colors, media } from "@app/themes";
import { injectIntl } from "react-intl";
import styled from "styled-components";

const HeaderContainer = styled.div`
  && {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    background: ${colors.primary};

    ${media.lessThan("mobile")`
    width: 90%;
    `}
  }
`;

const HeaderTitle = styled.span`
  && {
    font-size: 2rem;
    color: white;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle> Itunes Store 🎶 </HeaderTitle>
    </HeaderContainer>
  );
};

export default injectIntl(Header);
