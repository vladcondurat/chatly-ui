import { MNContainer, MNSvg, MNNavOptionContainer } from './styles';
import ChatSvg from '../../assets/ChatSvg.svg';
import NewChatSvg from '../../assets/NewChatSvg.svg';
import ProfileSvg from '../../assets/ProfileSvg.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTE__ROOMS } from '../../router/constants';
import { useState } from 'react';
import NewChatModal from '../new-chat-modal';

interface INavOption {
  src: string;
  action: () => void;
}

const MobileNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const navOptions: INavOption[] = [
    { src: ChatSvg, action: () => navigate(`${ROUTE__ROOMS}`) },
    { src: NewChatSvg, action: () => setIsModalOpen(true) },
    { src: ProfileSvg, action: () => navigate('/profile') },
  ];

  return (
    <MNContainer>
      {navOptions.map(({ src, action }) => (
        <MNNavOptionContainer key={src} onClick={action}>
          <MNSvg src={src} />
        </MNNavOptionContainer>
      ))}
      {isModalOpen && <NewChatModal onClose={closeModal} />}
    </MNContainer>
  );
};

export default MobileNav;
