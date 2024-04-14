import { SBInput, SBWrapper, SBSvgWrapper } from './styles';
import SearchSvg from './assets/search.svg';

const SearchBar = () => {
  return (
    <SBWrapper>
      <SBInput placeholder="Search" />
      <SBSvgWrapper src={SearchSvg} alt="search-icon" />
    </SBWrapper>
  );
};

export default SearchBar;
