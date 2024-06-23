import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChatSvg from '@app/assets/ChatSvg.svg';
import NewChatSvg from '@app/assets/NewChatSvg.svg';
import ProfileSvg from '@app/assets/ProfileSvg.svg';
import NewChatModal from '@app/components/new-chat-modal';
import { useAppDispatch, useAppSelector } from '@app/hooks/store-hooks';
import { ROUTE__PROFILE, ROUTE__ROOMS } from '@app/router/constants';
import { setAppIsModalOpenAction } from '@app/store/actions/app-sync-actions';
import { selectedRoomSelector } from '@app/store/selectors/room-selectors';

import { SBContainer, SBNavOptionContainer, SBSvg, SBTextWrapper } from './styles';

interface NavOption {
  src: string;
  label: string;
  action: () => void;
}

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedRoom = useAppSelector(selectedRoomSelector);
  const selectedRoomId = selectedRoom ? selectedRoom.id : '';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    dispatch(setAppIsModalOpenAction(true));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(setAppIsModalOpenAction(false));
  };

  const navOptions: NavOption[] = [
    { src: ChatSvg, label: 'Chats', action: () => navigate(`${ROUTE__ROOMS}/${selectedRoomId}`) },
    { src: ProfileSvg, label: 'Profile', action: () => navigate(ROUTE__PROFILE) },
    { src: NewChatSvg, label: 'New', action: handleModalOpen },
  ];

  return (
    <SBContainer>
      {navOptions.map(({ src, label, action }) => (
        <SBNavOptionContainer key={label} onClick={action}>
          <SBSvg src={src} />
          <SBTextWrapper>{label}</SBTextWrapper>
        </SBNavOptionContainer>
      ))}
      {isModalOpen && <NewChatModal onClose={handleModalClose} />}
    </SBContainer>
  );
};

export default Sidebar;
