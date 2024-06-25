import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChatSvg from '@app/assets/ChatSvg.svg';
import NewChatSvg from '@app/assets/NewChatSvg.svg';
import ProfileSvg from '@app/assets/ProfileSvg.svg';

import { ROUTE__PROFILE, ROUTE__ROOMS } from '../../router/constants';
import NewChatModal from '../new-chat-modal';
import { MNContainer, MNNavOptionContainer, MNSvg } from './styles';

interface INavOption {
  src: string;
  action: () => void;
}

const MobileNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const navOptions: INavOption[] = [
    { src: ChatSvg, action: () => navigate(ROUTE__ROOMS) },
    { src: NewChatSvg, action: () => setIsModalOpen(true) },
    { src: ProfileSvg, action: () => navigate(ROUTE__PROFILE) },
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
