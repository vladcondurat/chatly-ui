import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GoBackSvg from '@app/assets/GoBackSvg.svg';
import { useAppDispatch } from '@app/hooks/store-hooks';
import AddUsersModal from '@app/modules/edit-chat-room/components/add-users-modal';
import { ROUTE__EDIT_ROOM, ROUTE__ROOMS } from '@app/router/constants';
import { setAppIsModalOpenAction } from '@app/store/actions/app-sync-actions';
import IRoomDetails from '@app/types/room/IRoomDetails';
import formatActiveNow from '@app/utils/formatActiveNow';

import FriendsSvg from './assets/FriendsSvg.svg';
import MoreOptionsSvg from './assets/MoreOptionsSvg.svg';
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

interface ITopBarProps {
  details: IRoomDetails;
  id: string;
  isGroup: boolean;
}

const TopBar = ({ details, id, isGroup }: ITopBarProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
          <TBOtherDetailsWrapper>{formatActiveNow(details.lastActive)}</TBOtherDetailsWrapper>{' '}
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
