import { injectIntl, IntlShape } from "react-intl";
import styled from "styled-components";
import { Input, Card } from "antd";
import { T } from "@app/common/T";
import { colors } from "@app/themes";

export interface SearchBoxProps {
  intl: IntlShape;
  debouncedHandleOnChange: (e: string) => void;
}

const { Search } = Input;

const SearchBoxContainer = styled.div`
  && {
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    .ant-card {
      border: 1px solid ${colors.primary};
    }
  }
`;

const TitleCard = styled(Card)`
  && {
    text-align: left;
    width: 100%;
  }
`;

const SearchBox = ({ intl, debouncedHandleOnChange }: SearchBoxProps) => {
  return (
    <SearchBoxContainer data-testid="search-box">
      <TitleCard title={intl.formatMessage({ id: "itunes_title" })}>
        <T id="track_search_default" />
        <Search
          onChange={e => debouncedHandleOnChange(e.target.value)}
          onSearch={searchValue => debouncedHandleOnChange(searchValue)}
          type="text"
          data-testid="search-bar"
          placeholder="Baarishein by Anuv Jain...."
        />
      </TitleCard>
    </SearchBoxContainer>
  );
};

export default injectIntl(SearchBox);
