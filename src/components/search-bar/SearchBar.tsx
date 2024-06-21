import { useState, useEffect } from 'react';
import { SBInput, SBWrapper, SBSvgWrapper } from './styles';
import SearchSvg from './assets/search.svg';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery.length >= 3 || searchQuery.length === 0) {
        onSearch(searchQuery);
      }
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <SBWrapper>
      <SBInput placeholder="Search" onChange={handleInputChange} />
      <SBSvgWrapper src={SearchSvg} alt="search-icon" />
    </SBWrapper>
  );
};

export default SearchBar;
