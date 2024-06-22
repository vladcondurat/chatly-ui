import { Pen, Trash } from 'lucide-react';
import { useAppDispatch } from '../../../../hooks/store-hooks';
import { deleteMessageAsyncAction } from '../../../../store/actions/message-actions';
import { fetchSelectedRoomAsyncAction } from '../../../../store/actions/room-actions';
import IMessage from '../../../../types/message/IMessage';
import formatTime from '../../../../utils/formatTime';
import {
  SMContainer,
  SMError,
  SMLoading,
  SMMsgTime,
  SMTextContainer,
  SMTextWrapper,
  SMWrapper,
  SMOptionsWrapper,
  SMOptions,
  SMImgContainer,
  SMContentWrapper,
  SMContainerWithImg,
  SMDefaultImgTextContainer,
} from './styles';

interface ISentMsgProps {
  message: IMessage;
  roomId?: string;
  isLoading?: boolean;
  isError?: boolean;
  onEditMessage?: (message: IMessage) => void;
}

const SentMsg = ({ message, roomId, isLoading, isError, onEditMessage }: ISentMsgProps) => {
  const dispatch = useAppDispatch();
  if (message === null) {
    return null;
  }
  const { content, createdAt } = message;

  const handleDelete = async () => {
    await dispatch(deleteMessageAsyncAction(message.id));
    await dispatch(fetchSelectedRoomAsyncAction({ roomId: roomId }));
  };

  const handleUpdate = () => {
    if (onEditMessage) {
      onEditMessage(message);
    }
  };

  return (
    <SMWrapper>
      <SMTextWrapper>
        <SMOptionsWrapper className="options-wrapper">
          <SMOptions onClick={handleUpdate}>
            <Pen size={20} strokeWidth={1.5} />
          </SMOptions>
          <SMOptions onClick={handleDelete}>
            <Trash size={20} strokeWidth={1.5} />
          </SMOptions>
        </SMOptionsWrapper>
        {isLoading && <SMLoading>Loading...</SMLoading>}
        {isError && <SMError>Failed</SMError>}

        {content.attachedImageUrl && (
          <SMContentWrapper>
            <SMImgContainer src={content.attachedImageUrl} alt="attached" />
            <SMContainerWithImg>
              {content.textContent ? (
                <SMTextContainer>{content.textContent}</SMTextContainer>
              ) : (
                <SMDefaultImgTextContainer>Attached Image</SMDefaultImgTextContainer>
              )}
              <SMMsgTime>{isLoading ? 'now' : formatTime(createdAt)}</SMMsgTime>
            </SMContainerWithImg>
          </SMContentWrapper>
        )}

        {content.textContent && !content.attachedImageUrl && (
          <SMContainer>
            <SMTextContainer>{content.textContent}</SMTextContainer>
            <SMMsgTime>{isLoading ? 'now' : formatTime(createdAt)}</SMMsgTime>
          </SMContainer>
        )}
      </SMTextWrapper>
    </SMWrapper>
  );
};

export default SentMsg;
