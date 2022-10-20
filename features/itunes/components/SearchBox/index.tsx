import { injectIntl, IntlShape } from "react-intl";
import styled from "styled-components";
import { Input, Card } from "antd";
import { T } from "@app/common/T";

export interface SearchBoxProps {
  intl: IntlShape;
}

const { Search } = Input;

const SearchBoxContainer = styled.div`
  && {
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    .ant-card {
      border: 1px solid #3c4048;
    }
  }
`;

const TitleCard = styled(Card)`
  && {
    text-align: left;
    width: 100%;
  }
`;

const SearchBox = ({ intl }: SearchBoxProps) => {
  return (
    <SearchBoxContainer data-testid="search-box">
      <TitleCard title={intl.formatMessage({ id: "itunes_title" })}>
        <T id="track_search_default" />
        <Search type="text" data-testid="search-bar" placeholder="Baarishein by Anuv Jain...." />
      </TitleCard>
    </SearchBoxContainer>
  );
};

export default injectIntl(SearchBox);
