import { SBContainer, SBSvg, SBNavOptionContainer, SBTextWrapper } from './styles';
import ChatSvg from './assets/ChatSvg.svg';
import FriendsSvg from './assets/FriendsSvg.svg';
import ProfileSvg from './assets/ProfileSvg.svg';

const Sidebar = () => (
  <SBContainer>
    <SBNavOptionContainer>
      <SBSvg src={ChatSvg} />
      <SBTextWrapper>Chats</SBTextWrapper>
    </SBNavOptionContainer>
    <SBNavOptionContainer>
      <SBSvg src={FriendsSvg} />
      <SBTextWrapper>Friends</SBTextWrapper>
    </SBNavOptionContainer>
    <SBNavOptionContainer>
      <SBSvg src={ProfileSvg} />
      <SBTextWrapper>Profile</SBTextWrapper>
    </SBNavOptionContainer>
  </SBContainer>
);

export default Sidebar;
