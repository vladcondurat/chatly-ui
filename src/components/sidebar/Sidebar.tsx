import { SBContainer, SBSvg, SBNavOptionContainer, SBTextWrapper } from './styles';
import ChatSvg from '../../assets/ChatSvg.svg';
import NewChatSvg from '../../assets/NewChatSvg.svg';
import ProfileSvg from '../../assets/ProfileSvg.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { selectedRoomSelector } from '../../store/selectors/room-selectors';
import { ROUTE__PROFILE, ROUTE__ROOMS } from '../../router/constants';
import { useState } from 'react';
import NewChatModal from '../new-chat-modal';
import { setAppIsModalOpenAction } from '../../store/actions/app-sync-actions';

interface NavOption {
  src: string;
  label: string;
  action: () => void;
}

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedRoom = useAppSelector(selectedRoomSelector);
  const selectedRoomId = selectedRoom ? selectedRoom.id : '';

  const handleModalOpen = async () => {
    setIsModalOpen(true);
    await dispatch(setAppIsModalOpenAction(true));
  };

  const handleModalClose = async () => {
    setIsModalOpen(false);
    await dispatch(setAppIsModalOpenAction(false));
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
