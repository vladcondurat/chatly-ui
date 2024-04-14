import { RMContainer, RMMsgTime, RMTextContainer, RMWrapper, RMAvatar, RMTextWrapper, RMUsername } from './styles';
import AvatarPng from './assets/Avatar.png';

const ReceivedMsg = () => (
  <RMWrapper>
    <RMAvatar src={AvatarPng} alt="avatar-img" />
    <RMTextWrapper>
      <RMUsername>Mihai</RMUsername>
      <RMContainer>
        <RMTextContainer>
          ce faci faci faci faci faci faci faci faci faci faci faci v v vfaci faci faci faci faci faci faci faci faci faci faci faci faci faci faci faci faci faci faci faci faci
          faci faci faci faci faci faci faci faci faci faci faci faci?
        </RMTextContainer>
        <RMMsgTime>10:00 PM</RMMsgTime>
      </RMContainer>
    </RMTextWrapper>
  </RMWrapper>
);

export default ReceivedMsg;
