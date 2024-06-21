import { SBContainer, SBSvg, SBNavOptionContainer, SBTextWrapper } from './styles';
import ChatSvg from '../../assets/ChatSvg.svg';
import NewChatSvg from '../../assets/NewChatSvg.svg';
import ProfileSvg from '../../assets/ProfileSvg.svg';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store-hooks';
import { selectedRoomSelector } from '../../store/selectors/room-selectors';
import { ROUTE__ROOMS } from '../../router/constants';
import { useState } from 'react';
import NewChatModal from '../new-chat-modal';

interface NavOption {
  src: string;
  label: string;
  action: () => void;
}

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();
  const selectedRoom = useAppSelector(selectedRoomSelector);
  const selectedRoomId = selectedRoom ? selectedRoom.id : '';

  const navOptions: NavOption[] = [
    { src: ChatSvg, label: 'Chats', action: () => navigate(`${ROUTE__ROOMS}/${selectedRoomId}`) },
    { src: ProfileSvg, label: 'Profile', action: () => navigate('/profile') },
    { src: NewChatSvg, label: 'New', action: () => setIsModalOpen(true) },
  ];

  return (
    <SBContainer>
      {navOptions.map(({ src, label, action }) => (
        <SBNavOptionContainer key={label} onClick={action}>
          <SBSvg src={src} />
          <SBTextWrapper>{label}</SBTextWrapper>
        </SBNavOptionContainer>
      ))}
      {isModalOpen && <NewChatModal onClose={closeModal} />}
    </SBContainer>
  );
};

export default Sidebar;
