import {
  RMContainer,
  RMMsgTime,
  RMTextContainer,
  RMWrapper,
  RMAvatar,
  RMTextWrapper,
  RMUsername,
  RMAvatarPlaceholder,
} from './styles';
import AvatarPng from './assets/Avatar.png';
import IMessage from '../../../../types/message/IMessage';
import formatTime from '../../../../utils/formatTime';

interface IReceivedMsgProps {
  message: IMessage;
  isSameUser?: boolean;
  isLastFromUser?: boolean;
}

const ReceivedMsg = ({ message, isSameUser, isLastFromUser }: IReceivedMsgProps) => {
  const { user, content, createdAt } = message;
  return (
    <RMWrapper>
      {isLastFromUser ? <RMAvatar src={AvatarPng} alt="avatar-img" /> : <RMAvatarPlaceholder />}
      <RMTextWrapper>
        {!isSameUser && <RMUsername>{user.username}</RMUsername>}
        <RMContainer $isSameUser={!isSameUser}>
          <RMTextContainer>{content.textContent}</RMTextContainer>
          <RMMsgTime>{formatTime(createdAt)}</RMMsgTime>
        </RMContainer>
      </RMTextWrapper>
    </RMWrapper>
  );
};

export default ReceivedMsg;
