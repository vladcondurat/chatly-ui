import { SBContainer, SBSvg, SBNavOptionContainer, SBTextWrapper } from './styles';
import ChatSvg from './assets/ChatSvg.svg';
import FriendsSvg from './assets/FriendsSvg.svg';
import ProfileSvg from './assets/ProfileSvg.svg';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store-hooks';
import { selectedRoomSelector } from '../../store/selectors/room-selectors';
import { ROUTE__ROOMS } from '../../router/constants';

interface NavOption {
  src: string;
  label: string;
  action: () => void;
}

const Sidebar = () => {
  const navigate = useNavigate();
  const selectedRoom = useAppSelector(selectedRoomSelector);
  const selectedRoomId = selectedRoom?.id;

  const navOptions: NavOption[] = [
    { src: ChatSvg, label: 'Chats', action: () => navigate(`${ROUTE__ROOMS}/${selectedRoomId}`) },
    { src: ProfileSvg, label: 'Profile', action: () => navigate('/profile') },
    { src: FriendsSvg, label: 'New', action: () => alert('This is a popup!') },
  ];

  return (
    <SBContainer>
      {navOptions.map(({ src, label, action }) => (
        <SBNavOptionContainer key={label} onClick={action}>
          <SBSvg src={src} />
          <SBTextWrapper>{label}</SBTextWrapper>
        </SBNavOptionContainer>
      ))}
    </SBContainer>
  );
};

export default Sidebar;
