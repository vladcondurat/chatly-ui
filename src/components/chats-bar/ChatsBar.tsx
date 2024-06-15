import ChatCell from '../chat-cell';
import SearchBar from '../search-bar';
import { CBContainer, CBCellWrapper, CBSearchBarWrapper } from './styles';
import { fetchRoomsAsyncAction } from '../../store/actions/room-actions';
import { useEffect } from 'react';
import { roomsSelector } from '../../store/selectors/room-selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';

const ChatsBar = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRoomsAsyncAction());
  }, [dispatch]);

  const chatCells = useAppSelector(roomsSelector);

  return (
    <CBContainer>
      <CBSearchBarWrapper>
        <SearchBar />
      </CBSearchBarWrapper>
      <CBCellWrapper>
        {chatCells && chatCells.length > 0 ? chatCells.map(chatCell => <ChatCell key={chatCell.id} props={chatCell} />) : <div>No chat rooms available</div>}
      </CBCellWrapper>
    </CBContainer>
  );
};

export default ChatsBar;
