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

interface ITopBarProps {
  roomName: string;
  imageUrl: string;
  roomId: string;
}

const TopBar = ({ roomName, imageUrl, roomId }: ITopBarProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TBContainer>
      <TBLeftContainer>
        <TBBackSvg
          src={GoBackSvg}
          alt="go-back"
          onClick={() => navigate(`${ROUTE__ROOMS}`)}
        />
        <TBChatImage src={imageUrl} alt="chat-img" />
        <TBTextContainer>
          <TBChatNameWrapper>{roomName}</TBChatNameWrapper>
          <TBOtherDetailsWrapper>Active now</TBOtherDetailsWrapper>
        </TBTextContainer>
      </TBLeftContainer>
      {isModalOpen && <AddUsersModal onClose={() => setIsModalOpen(false)} />}
      <TBOptionsContainer>
        <TBOptionSvgWrapper onClick={() => setIsModalOpen(true)}>
          <TBOptionSvg src={FriendsSvg} alt="friends" />
        </TBOptionSvgWrapper>
        <TBOptionSvgWrapper
          onClick={() => navigate(`${ROUTE__EDIT_ROOM}/${roomId}`)}
        >
          <TBOptionSvg src={MoreOptionsSvg} alt="more-options" />
        </TBOptionSvgWrapper>
      </TBOptionsContainer>
    </TBContainer>
  );
};

export default TopBar;
