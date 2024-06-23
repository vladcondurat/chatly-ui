import { useEffect, useMemo, useState } from 'react';

import ChatCell from '@app/components/chat-cell';
import LoadingSpinner from '@app/components/loading-spinner';
import MobileNav from '@app/components/mobile-nav';
import SearchBar from '@app/components/search-bar';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { fetchRoomsAsyncAction } from '@app/store/actions/room-actions';
import { isLoadingRoomSelector, roomsSelector } from '@app/store/selectors/room-selectors';

import { CBCellWrapper, CBContainer, CBNoChatsContainer, CBSearchBarWrapper } from './styles';

const ChatsBar = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingRoomSelector);
  const chatCells = useAppSelector(roomsSelector);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchRoomsAsyncAction());
  }, [dispatch]);

  const filteredChatCells = useMemo(() => {
    return chatCells.filter(chatCell =>
      chatCell.details.roomName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [chatCells, searchQuery]);

  const renderChatCells = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (filteredChatCells.length > 0) {
      return filteredChatCells.map(chatCell => (
        <ChatCell
          key={chatCell.id}
          id={chatCell.id}
          details={chatCell.details}
          lastMessage={chatCell.lastMessage}
        />
      ));
    }
    return <CBNoChatsContainer>No chat rooms available</CBNoChatsContainer>;
  };

  return (
    <>
      <CBContainer>
        <CBSearchBarWrapper>
          <SearchBar onSearch={setSearchQuery} />
        </CBSearchBarWrapper>
        <CBCellWrapper>{renderChatCells()}</CBCellWrapper>
      </CBContainer>
      <MobileNav />
    </>
  );
};

export default ChatsBar;
