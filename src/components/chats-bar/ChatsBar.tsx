import ChatCell from '../chat-cell';
import SearchBar from '../search-bar';
import {
  CBContainer,
  CBCellWrapper,
  CBSearchBarWrapper,
  CBNoChatsContainer,
} from './styles';
import { fetchRoomsAsyncAction } from '../../store/actions/room-actions';
import { useEffect, useState } from 'react';
import {
  isLoadingRoomSelector,
  roomsSelector,
} from '../../store/selectors/room-selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import MobileNav from '../mobile-nav';
import LoadingSpinner from '../loading-spinner';

const ChatsBar = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingRoomSelector);
  const chatCells = useAppSelector(roomsSelector);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchRoomsAsyncAction());
  }, [dispatch]);

  const filteredChatCells = chatCells.filter(chatCell =>
    chatCell.details.roomName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChatCells = () =>
    filteredChatCells && filteredChatCells.length > 0 ? (
      filteredChatCells.map(chatCell => (
        <ChatCell key={chatCell.id} props={chatCell} />
      ))
    ) : (
      <CBNoChatsContainer>No chat rooms available</CBNoChatsContainer>
    );

  return (
    <>
      <CBContainer>
        <CBSearchBarWrapper>
          <SearchBar onSearch={setSearchQuery} />
        </CBSearchBarWrapper>
        <CBCellWrapper>
          {isLoading ? <LoadingSpinner /> : handleChatCells()}
        </CBCellWrapper>
      </CBContainer>
      <MobileNav />
    </>
  );
};

export default ChatsBar;
