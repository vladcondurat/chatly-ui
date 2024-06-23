import IMessage from '@app/types/message/IMessage';
import formatTime from '@app/utils/formatTime';

import {
  RMAvatar,
  RMAvatarPlaceholder,
  RMContainer,
  RMContainerWithImg,
  RMContentWrapper,
  RMDefaultImgTextContainer,
  RMImgContainer,
  RMMsgTime,
  RMTextContainer,
  RMTextWrapper,
  RMUsername,
  RMWrapper,
} from './styles';

interface ReceivedMsgProps {
  message: IMessage;
  isSameUser?: boolean;
  isLastFromUser?: boolean;
  isGroup?: boolean;
}

const ReceivedMsg = ({ message, isSameUser, isLastFromUser, isGroup }: ReceivedMsgProps) => {
  const { user, content, createdAt } = message;
  return (
    <RMWrapper>
      {isGroup && (
        <>
          {isLastFromUser ? (
            <RMAvatar src={user.avatarUrl} alt="avatar-img" />
          ) : (
            <RMAvatarPlaceholder />
          )}
        </>
      )}
      <RMTextWrapper>
        {!isSameUser && isGroup && <RMUsername>{user.username}</RMUsername>}

        {content.attachedImageUrl && (
          <RMContentWrapper>
            <RMImgContainer src={content.attachedImageUrl} alt="attached" />
            <RMContainerWithImg>
              {content.textContent ? (
                <RMTextContainer>{content.textContent}</RMTextContainer>
              ) : (
                <RMDefaultImgTextContainer>Attached Image</RMDefaultImgTextContainer>
              )}
              <RMMsgTime>{formatTime(createdAt)}</RMMsgTime>
            </RMContainerWithImg>
          </RMContentWrapper>
        )}

        {content.textContent && !content.attachedImageUrl && (
          <RMContainer $isSameUser={!isSameUser} $isLastFromUser={isLastFromUser}>
            <RMTextContainer>{content.textContent}</RMTextContainer>
            <RMMsgTime>{formatTime(createdAt)}</RMMsgTime>
          </RMContainer>
        )}
      </RMTextWrapper>
    </RMWrapper>
  );
};

export default ReceivedMsg;
