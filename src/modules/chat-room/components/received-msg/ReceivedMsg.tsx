import { RMContainer, RMMsgTime, RMTextContainer, RMWrapper, RMAvatar, RMTextWrapper, RMUsername } from './styles';
import AvatarPng from './assets/Avatar.png';
import IMessage from '../../../../types/message/IMessage';
import formatTime from '../../../../utils/formatTime';

const ReceivedMsg = ({ message }: { message: IMessage }) => {
  const { user, content, createdAt } = message;
  return (
    <RMWrapper>
      <RMAvatar src={AvatarPng} alt="avatar-img" />
      <RMTextWrapper>
        <RMUsername>{user.username}</RMUsername>
        <RMContainer>
          <RMTextContainer>{content.textContent}</RMTextContainer>
          <RMMsgTime>{formatTime(createdAt)}</RMMsgTime>
        </RMContainer>
      </RMTextWrapper>
    </RMWrapper>
  );
};

export default ReceivedMsg;
