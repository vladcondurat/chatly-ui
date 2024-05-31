import ChatCell from '../chat-cell';
import SearchBar from '../search-bar';
import { CBContainer, CBCellWrapper } from './styles';

const ChatsBar = () => (
  <CBContainer>
    <SearchBar />
    <CBCellWrapper>
      <ChatCell id="1" />
      <ChatCell id="2" />
      <ChatCell id="3" />
      <ChatCell id="4" />
    </CBCellWrapper>
  </CBContainer>
);

export default ChatsBar;
