import { useNavigate } from 'react-router-dom';
import {
  TBBackSvg,
  TBChatImage,
  TBChatNameWrapper,
  TBContainer,
  TBLeftContainer,
  TBOptionSvg,
  TBOptionSvgWrapper,
  TBOptionsContainer,
  TBOtherDetailsWrapper,
  TBTextContainer,
} from './styles';
import GoBackSvg from '@app/assets/GoBackSvg.svg';
import { ROUTE__EDIT_ROOM, ROUTE__ROOMS } from '../../../../router/constants';
import AddUsersModal from '../../../edit-chat-room/components/add-users-modal';
import { useState } from 'react';
import MoreOptionsSvg from './assets/MoreOptionsSvg.svg';
import FriendsSvg from './assets/FriendsSvg.svg';
import { useAppDispatch } from '../../../../hooks/store-hooks';
import { setAppIsModalOpenAction } from '../../../../store/actions/app-sync-actions';
import IRoom from '../../../../types/room/IRoom';

interface ITopBarProps {
  room: IRoom;
}

const TopBar = ({ room }: ITopBarProps) => {
  const { details, id, isGroup } = room;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    dispatch(setAppIsModalOpenAction(true));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(setAppIsModalOpenAction(false));
  };

  return (
    <TBContainer>
      <TBLeftContainer>
        <TBBackSvg src={GoBackSvg} alt="go-back" onClick={() => navigate(`${ROUTE__ROOMS}`)} />
        <TBChatImage src={details.imageUrl} alt="chat-img" />
        <TBTextContainer>
          <TBChatNameWrapper>{details.roomName}</TBChatNameWrapper>
          <TBOtherDetailsWrapper>Active now</TBOtherDetailsWrapper>
        </TBTextContainer>
      </TBLeftContainer>
      {isModalOpen && <AddUsersModal onClose={handleModalClose} />}
      {isGroup && (
        <TBOptionsContainer>
          <TBOptionSvgWrapper onClick={handleModalOpen}>
            <TBOptionSvg src={FriendsSvg} alt="friends" />
          </TBOptionSvgWrapper>
          <TBOptionSvgWrapper onClick={() => navigate(`${ROUTE__EDIT_ROOM}/${id}`)}>
            <TBOptionSvg src={MoreOptionsSvg} alt="more-options" />
          </TBOptionSvgWrapper>
        </TBOptionsContainer>
      )}
    </TBContainer>
  );
};

export default TopBar;
