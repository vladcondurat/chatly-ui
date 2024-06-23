import { useEffect, useState } from 'react';

import { Search } from 'lucide-react';

import { SBInput, SBWrapper } from './styles';

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
      <Search size={12} color="#979aa0" strokeWidth={1.5} />
    </SBWrapper>
  );
};

export default SearchBar;
